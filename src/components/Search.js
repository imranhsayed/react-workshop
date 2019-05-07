import React from 'react';
import axios from 'axios';
import { config } from "../config";
import PageNavigation from './PageNavigation';

import '../Search.css';
import Loader from '../loader.gif';

class Search extends  React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			query: '',
			results: {},
			totalResults: 0,
			totalPages: 0,
			currentPageNo: 0,
			error: '',
			message: '',
			loading: false,
		};
		this.cancel = '';
	}

	/**
	 * Get the Total Pages count.
	 *
	 * @param total
	 * @param denominator Count of results per page
	 * @return {number}
	 */
	getPagesCount = (total, denominator) => {
		const divisible = total % denominator === 0;
		const valueToBeAdded = divisible ? 0 : 1;
		return Math.floor(total / denominator) + valueToBeAdded;
	};

	/**
	 * Fetch the search results and update the state with the result.
	 * Also cancels the previous query before making the new one.
	 *
	 * @param {int} updatedPageNo Updated Page No.
	 * @param {String} query Search Query.
	 *
	 */
	fetchSearchResults = (updatedPageNo = '', query ) => {

		const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';

		// By default the limit of results is 20
		const searchUrl = `https://pixabay.com/api/?key=${config.apiKey}&q=${query}${pageNumber}`;

		if (this.cancel) {
			// Cancel the previous request before making a new request
			this.cancel.cancel();
		}
		// Create a new CancelToken
		this.cancel = axios.CancelToken.source();

		axios
			.get(searchUrl, {
				cancelToken: this.cancel.token,
			})
			.then((res) => {
				const total = res.data.total;
				const totalPagesCount = this.getPagesCount( total, 20 );
				const resultNotFoundMsg = !res.data.hits.length
					? 'There are no more search results. Please try a new search.'
					: '';

				this.setState({
					results: res.data.hits,
					totalResults: res.data.total,
					currentPageNo: updatedPageNo,
					totalPages: totalPagesCount,
					message: resultNotFoundMsg,
					loading: false,
				});
			})
			.catch((error) => {
				if (axios.isCancel(error) || error) {
					this.setState({
						error,
						loading: false,
						message: 'Failed to fetch results.Please check network',
					});
				}
			});
	};

	handleOnInputChange = (event) => {
		const query = event.target.value;
		this.setState({ query, loading: true, message: '' }, () => {
			this.fetchSearchResults(1, query);
		});
	};

	renderSearchResults = () => {
		const {results} = this.state;

		if (Object.keys(results).length && results.length) {
			return (
				<div className="results-container">
					{results.map((result) => {
						return (
							<a key={result.id} href={result.previewURL} className="result-items">
								<h6 className="image-username">{result.user}</h6>
								<div className="image-wrapper">
									<img className="image" src={result.previewURL} alt={result.user}/>
								</div>
							</a>
						);
					})}
				</div>
			);
		}
	};

	/**
	 * Fetch results according to the prev or next page requests.
	 *
	 * @param {String} type 'prev' or 'next'
	 */
	handlePageClick = (type) => {
		event.preventDefault();
		const updatedPageNo =
			      'prev' === type
				      ? this.state.currentPageNo - 1
				      : this.state.currentPageNo + 1;

		if (!this.state.loading) {
			this.setState({ loading: true, message: '' }, () => {
				// Fetch previous 50 Results
				this.fetchSearchResults(updatedPageNo, this.state.query);
			});
		}
	};


	render() {

		const { query, loading, message, currentPageNo, totalPages } = this.state;

		console.warn( this.state );

		// showPrevLink will false, when on the 1st page, hence wont be shown on 1st page.
		const showPrevLink = 0 < ( currentPageNo - 1 );

		// showNextLink will false, when on the last page, hence wont be shown last page.
		const showNextLink = totalPages > ( currentPageNo + 1 );

		return (
			<div className="container">
				{/*Heading*/}
				<h2 className="heading">Live Search: React Application</h2>

				{/*Search Input*/}
				<label className="search-label" htmlFor="search-input">
					<input
						type="text"
						onChange={this.handleOnInputChange}
						value={query}
						id="search-input"
						placeholder="Search..."
					/>
					<i className="fa fa-search search-icon"/>
				</label>

				{/*Error Message*/}
				{ message && <p className="message">{message}</p> }

				{/*Loader*/}
				<img  src={Loader} className={`search-loading ${loading ? 'show' : 'hide' }`}  alt="loader"/>

				{/*Navigation Top*/}
				<PageNavigation
					loading={loading}
					showPrevLink={showPrevLink}
					showNextLink={showNextLink}
					handlePrevClick={() => this.handlePageClick('prev')}
					handleNextClick={() => this.handlePageClick('next')}
				/>

				{/*Result*/}
				{ this.renderSearchResults() }

				{/*Navigation Bottom*/}
				<PageNavigation
					loading={loading}
					showPrevLink={showPrevLink}
					showNextLink={showNextLink}
					handlePrevClick={() => this.handlePageClick('prev')}
					handleNextClick={() => this.handlePageClick('next')}
				/>


			</div>
		)
	}
}

export default Search;

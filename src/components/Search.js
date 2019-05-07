import React from 'react';
import axios from 'axios';
import { config } from "../config";

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
				const total = res.data.length;
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
		console.warn( results );
		if (Object.keys(results).length && results.length) {
			return (
				<div>
					{results.map((result) => {
						return (
							<div key={result.id} >
								<h6>{result.user}</h6>
								<img src={result.previewURL} alt={result.user}/>
							</div>
						);
					})}
				</div>
			);
		}
	};

	render() {
		const { query } = this.state;

		return (
			<div>
				<input type="text" onChange={this.handleOnInputChange} value={query}/>
				{ this.renderSearchResults() }
			</div>
		)
	}
}

export default Search;

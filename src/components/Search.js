import React from 'react';
import axios from 'axios';
import { config } from "../config";

class Search extends  React.Component {

	constructor( props ) {
		super( props );

		this.state = {
			total: 0,
			data: [],
			currentPage: 0,
		}
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
			.then((resData) => {
				const totalPagesCount = this.getPageCount(resData.data.hits.total, 50);
				const resultNotFoundMsg = !resData.data.hits.hits.length
					? 'There are no more search results. Please try a new search.'
					: '';

				this.setState({
					results: resData.data.hits,
					totalResults: resData.data.hits.total,
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

	componentDidMount() {
		const url = 'https://jsonplaceholder.typicode.com/posts?q=h';
		axios.get( url )
			.then( res => {
				console.warn( res.data );
				const total = res.data.length;
				const totalPages = this.getPagesCount( total, 2 );
				console.warn( total, totalPages );
			} )
			.catch( err => console.warn( err ) );
	}

	render() {
		return (
			<div>

			</div>
		)
	}
}

export default Search;

import React, { Fragment } from 'react';
// import { Router, Route, Switch } from 'react-router';
// import PropTypes from 'prop-types';

export default class Main extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			//
		};
	}

	render() {
		return (
			<Fragment>
				<i className="fab fa-js"></i>
				<h1>Welcome to Frontend Boilerplate</h1>
				<a rel="noopener noreferrer" href="https://github.com/evgenytk/frontend-boilerplate" target="_blank"><i className="fab fa-github"></i> evgenytk</a>
			</Fragment>
		);
	}
}

// Main.propTypes = {
// 	exampleProp: PropTypes.string,
// };

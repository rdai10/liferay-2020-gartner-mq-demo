import React from 'react';
import ReactDOM from 'react-dom';

import AppComponent from './AppComponent';
import ErrorBoundary from './ErrorBoundary';

/**
 * This is the main entry point of the portlet.
 *
 *
 * @param  {Object} params a hash with values of interest to the portlet
 * @return {void}
 */
export default function main({portletElementId}) {
	ReactDOM.render(
		<ErrorBoundary>
			<AppComponent />
		</ErrorBoundary>,
		document.getElementById(portletElementId)
	);
}

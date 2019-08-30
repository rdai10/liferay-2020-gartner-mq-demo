import React from 'react';

import Card from './Card';

export default class extends React.Component {
	render() {
		return (
			<div className="dashboard-body">
				<div className="col-md-12 central-dash row">
					<div className="col-md-5">
						Alert <Card heading="Performance">Graph</Card>
					</div>
					<div className="col-md-7">
						<Card heading="Usage">Car</Card>
					</div>
				</div>
				<div className="col-md-12 subscriptions row">
					<div className="col-md-12 subscription-header">
						<h6>Your Subscriptions</h6>

						<button className="btn btn-link">Add</button>
					</div>

					<div className="col-md-4">
						<Card heading="My Data" subheading="Premium Plus">
							Chart
						</Card>
					</div>
					<div className="col-md-4">
						<Card heading="Cloud Share" subheading="Basic">
							Progress Bar
						</Card>
					</div>
					<div className="col-md-4">
						<Card heading="SolarTrak" subheading="Basic">
							Graph
						</Card>
					</div>
				</div>
			</div>
		);
	}
}

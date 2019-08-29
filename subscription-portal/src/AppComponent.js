import React from 'react';

import Card from './Card';

export default class extends React.Component {
	render() {
		return (
			<React.Fragment>
				<div className="col-md-12 header-bar">
					<div className="vehicle-name">
						<h4>2019 Riuvo Sedan</h4>
						<button className="btn btn-link">Change Vehicle</button>
					</div>

					<div className="acc-info">svg User Name dropdown</div>
				</div>

				<div className="col-md-12 central-dash">
					<div className="col-md-5">
						Alert <Card heading="Performance">Graph</Card>
					</div>
					<div className="col-md-7">
						<Card heading="Usage">Car</Card>
					</div>
				</div>
				<div className="col-md-12 subscriptions">
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
			</React.Fragment>
		);
	}
}

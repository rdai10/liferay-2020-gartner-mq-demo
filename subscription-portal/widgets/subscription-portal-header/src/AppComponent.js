import React from 'react';

import CaretIcon from './CaretIcon';
import NotificationIcon from './NotificationIcon';

export default class extends React.Component {
	render() {
		return (
			<div className="header-bar subscription-portal">
				<div className="vehicle-name">
					<h4>2019 Riuvo Sedan</h4>

					<button className="btn btn-link">Change Vehicle</button>
				</div>

				<div className="acc-info">
					<NotificationIcon /> Angelo <CaretIcon />
				</div>
			</div>
		);
	}
}

import React from 'react';
import PropTypes from 'prop-types';

class Milage extends React.Component {
	render() {
		const {milage, fuel, speed} = this.props;

		return (
			<table className="table table-autofit table-list table-nowrap milage-table">
				<thead>
					<tr>
						<th className="font-weight-medium">Milage</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{milage && (
						<tr>
							<td className="table-cell-expand">
								<div className="font-weight-medium">Average Milage</div>
							</td>
							<td>{milage}</td>
						</tr>
					)}
					{fuel && (
						<tr>
							<td className="table-cell-expand">
								<div className="font-weight-medium">Average Fuel</div>
							</td>
							<td>{fuel}</td>
						</tr>
					)}
					{speed && (
						<tr>
							<td className="table-cell-expand">
								<div className="font-weight-medium">Average Speed</div>
							</td>
							<td>{speed}</td>
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}

Milage.propTypes = {
	milage: PropTypes.string,
	fuel: PropTypes.string,
	speed: PropTypes.string
};

export default Milage;

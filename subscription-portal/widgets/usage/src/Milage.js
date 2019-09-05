import React from 'react';

class Milage extends React.Component {
	render() {
		const {milage, fuel, speed} = this.props;

		return (
			<table className="table table-autofit table-list table-nowrap">
				<thead>
					<tr>
						<th className="table-cell-expand">Milage</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{milage && (
						<tr>
							<td clasSName="table-cell-expand">
								<div className="table-list-title">Average Milage</div>
							</td>
							<td className="table-cell-expand">{milage}</td>
						</tr>
					)}
					{fuel && (
						<tr>
							<td clasSName="table-cell-expand">
								<div className="table-list-title">Average Fuel</div>
							</td>
							<td className="table-cell-expand">{fuel}</td>
						</tr>
					)}
					{speed && (
						<tr>
							<td className="table-cell-expand">
								<div className="table-list-title">Average Speed</div>
							</td>
							<td className="table-cell-expand">{speed}</td>
						</tr>
					)}
				</tbody>
			</table>
		);
	}
}

export default Milage;

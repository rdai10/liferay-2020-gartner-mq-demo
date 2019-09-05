import React from 'react';

class Stat extends React.Component {
	render() {
		const {icon, primaryStat, secondaryStat} = this.props;

		return (
			<div className="col-md-3 stat">
				{icon && <div className="stat-icon">{icon}</div>}

				{primaryStat && (
					<div className="font-weight-medium primary-stat">{primaryStat}</div>
				)}

				{secondaryStat && (
					<div className="secondary-font-color secondary-stat">
						{secondaryStat}
					</div>
				)}
			</div>
		);
	}
}

export default Stat;

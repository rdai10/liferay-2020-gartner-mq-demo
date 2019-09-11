import React from 'react';
import PropTypes from 'prop-types';

class Stat extends React.Component {
	render() {
		const {icon, primaryStat, primaryStatUnit, secondaryStat} = this.props;

		return (
			<div className="col-md-3 stat">
				{icon && <div className="stat-icon">{icon}</div>}

				{primaryStat && (
					<div className="font-weight-medium primary-stat">
						{primaryStat}
						{primaryStatUnit ? primaryStatUnit : ''}
					</div>
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

Stat.propTypes = {
	icon: PropTypes.node,
	primaryStat: PropTypes.string.isRequired,
	primaryStatUnit: PropTypes.string,
	secondaryStat: PropTypes.node
};

export default Stat;

import React from 'react';
import PropTypes from 'prop-types';
import AnimationCount from 'react-count-animation';

class Stat extends React.Component {
	render() {
		const {icon, primaryStat, primaryStatUnit, secondaryStat} = this.props;

		return (
			<div className="col-md-3 stat">
				{icon && <div className="stat-icon">{icon}</div>}

				{primaryStat && (
					<div className="font-weight-medium primary-stat">
						<AnimationCount
							start={0}
							count={primaryStat}
							animation="up"
							duration={2400}
						/>
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
	primaryStat: PropTypes.number.isRequired,
	primaryStatUnit: PropTypes.string,
	secondaryStat: PropTypes.node
};

export default Stat;

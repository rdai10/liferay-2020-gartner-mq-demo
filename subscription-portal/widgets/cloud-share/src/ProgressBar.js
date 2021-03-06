import React from 'react';
import PropTypes from 'prop-types';

class ProgressBar extends React.Component {
	render() {
		const {title, progress} = this.props;

		const style = {
			width: `${progress}%`
		};

		return (
			<React.Fragment>
				<div className="progress-bar-title">
					<div className="font-weight-medium">{title}</div>

					<div>
						<span className="font-weight-medium secondary-font-size">
							{progress}%
						</span>{' '}
						used
					</div>
				</div>

				<div className="progress progress-md">
					<div className="progress-bar" style={style}></div>
				</div>
			</React.Fragment>
		);
	}
}

ProgressBar.propTypes = {
	title: PropTypes.string.isRequired,
	progress: PropTypes.string.isRequired
};

export default ProgressBar;

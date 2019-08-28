import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
	const {children, heading, subheading} = props;

	return (
		<div
			className="card card-interactive card-interactive-primary card-type-template template-card"
			tabindex="0"
		>
			<div className="card-item-first">
				{subheading && (
					<React.Fragment>
						<h6>{heading}</h6>
						<div className="subheading">{subheading}</div>
					</React.Fragment>
				)}

				{!subheading && (
					<div className="secondary-font-size">{heading}</div>
				)}
			</div>
			<div className="card-body">{children}</div>
		</div>
	);
};

Card.defaultProps = {
	subheading: null
};

Card.propTypes = {
	children: PropTypes.node.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string
};

export default Card;

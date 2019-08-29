import React from 'react';

class Card extends React.Component {
	render() {
		const {children, heading, subheading} = this.props;

		return (
			<div
				className="card card-interactive card-interactive-primary card-type-template template-card"
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
	}
}

export default Card;
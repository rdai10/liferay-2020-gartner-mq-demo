import React from 'react';

class Card extends React.Component {
	render() {
		const {children, heading, iconSVG, subheading} = this.props;

		return (
			<div className="card card-interactive card-interactive-primary card-type-template template-card">
				<div className="card-item-first">
					{iconSVG && (
						<span className="card-icon-wrapper">
							<span className="card-icon">{iconSVG}</span>
						</span>
					)}

					<div className="card-name">
						{subheading && (
							<React.Fragment>
								<div className="heading font-weight-medium secondary-font-size">
									{heading}
								</div>
								<div className="subheading secondary-font-color">
									{subheading}
								</div>
							</React.Fragment>
						)}

						{!subheading && <h6 className="heading">{heading}</h6>}
					</div>
				</div>
				<div className="card-body">{children}</div>
			</div>
		);
	}
}

export default Card;

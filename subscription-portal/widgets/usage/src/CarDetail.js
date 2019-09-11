import React from 'react';
import PropTypes from 'prop-types';

class CarDetail extends React.Component {
	render() {
		const {year, name, type, plate, vin} = this.props;

		const style = {
			background: `url(${Liferay.ThemeDisplay.getPathThemeImages()}/bg.png) bottom center no-repeat`,
			backgroundSize: 'cover',
			minHeight: '620px',
			width: '100%'
		};

		return (
			<div className="banner d-flex" style={style}>
				<div className="container">
					<div className="car-info">
						{year && (
							<div className="car-year font-weight-medium secondary-font-color">
								{year}
							</div>
						)}
						{name && <h5>{name}</h5>}
						{type && <div className="secondary-font-color">{type}</div>}

						<dl className="license-info">
							{plate && (
								<React.Fragment>
									<dt>Plate</dt>
									<dd>{plate}</dd>
								</React.Fragment>
							)}

							{vin && (
								<React.Fragment>
									<dt>VIN</dt>
									<dd>{vin}</dd>
								</React.Fragment>
							)}

							<dt>Docs</dt>
							<dd className="user-manual font-weight-medium">
								View Owners Manual
							</dd>
						</dl>

						<div className="controls-wrapper">
							<div className="controls">
								<div className="control active">
									<img
										src={`${Liferay.ThemeDisplay.getPathThemeImages()}/car-1.png`}
										alt="active car"
									/>
								</div>
								<div className="control">
									<img
										src={`${Liferay.ThemeDisplay.getPathThemeImages()}/car-2.png`}
										alt="inactive car"
									/>
								</div>
							</div>
							<a className="btn btn-light btn-add">
								<svg
									width="13"
									height="14"
									viewBox="0 0 13 14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M7.69477 0.723633V5.66845H12.3541V7.74501H7.69477V13.1051H5.39757V7.74501H0.699346V5.66845H5.39757V0.723633H7.69477Z"
										fill="#FF6B00"
									/>
								</svg>
							</a>
						</div>
					</div>

					<div className="my-data-label">
						<span className="card-icon">
							<svg
								width="18"
								height="24"
								viewBox="0 0 18 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 7.00186L8.9996 12L16 17L8.9996 22V2L16 7.00186L8.9996 12L2 17"
									stroke="#2368EE"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>
							</svg>
						</span>
						<h5>My Data</h5>
					</div>

					<div className="upgrade">
						<p className="font-weight-medium">Ready to Upgrade?</p>
						<a className="btn btn-light btn-upgrade">
							<svg
								width="19"
								height="14"
								viewBox="0 0 19 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0.5 7H16" stroke="#FF6B00" strokeWidth="3" />
								<path
									d="M10.5 1.5L16 7L10.5 12.5"
									stroke="#FF6B00"
									strokeWidth="3"
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		);
	}
}

CarDetail.propTypes = {
	year: PropTypes.string,
	name: PropTypes.string,
	type: PropTypes.string,
	plate: PropTypes.string,
	vin: PropTypes.string
};

export default CarDetail;

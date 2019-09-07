import React from 'react';

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
							<dt>Plate</dt>
							<dd>{plate}</dd>

							<dt>VIN</dt>
							<dd>{vin}</dd>

							<dt>Docs</dt>
							<dd className="user-manual font-weight-medium">
								View Owners Manual
							</dd>
						</dl>
					</div>
				</div>
			</div>
		);
	}
}

export default CarDetail;

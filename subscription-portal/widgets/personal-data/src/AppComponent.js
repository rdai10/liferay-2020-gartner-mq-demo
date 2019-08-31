import React from 'react';

import Card from './Card';

export default class extends React.Component {
	render() {
		const bluetoothIcon = (
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
				/>
			</svg>
		);

		return (
			<Card
				heading="My Data"
				iconSVG={bluetoothIcon}
				subheading="Premium Plus"
			>
				Chart
			</Card>
		);
	}
}

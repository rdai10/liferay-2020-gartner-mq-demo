import React from 'react';
import bb from 'billboard.js';

import Card from './Card';

export default class extends React.Component {
	componentDidMount() {
		bb.generate({
			data: {
				columns: [
					['energy', 15, 23, 23, 23, 23, 38, 38, 38, 40, 40, 40, 38, 22, 23]
				],
				type: 'bar'
			},
			axis: {
				x: {
					show: false
				},
				y: {
					show: false
				}
			},
			bar: {
				radius: 6,
				width: {
					ratio: 0.5
				}
			},
			color: {
				pattern: ['23D6EE', '3E7BF0']
			},
			legend: {
				hide: true
			},
			size: {
				height: 80
			},
			svg: {
				classname: 'energy-absorption'
			},
			bindto: '#energyAbsorptionChart'
		});
	}

	render() {
		const carIcon = (
			<svg
				width="24"
				height="18"
				viewBox="0 0 24 18"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M3.97592 6.1811C4.4729 5.12503 4.93881 4.00684 5.52896 2.79547C5.83957 2.23638 6.24336 1.70834 6.89564 1.64622H17.1146C17.798 1.70834 18.1707 2.23638 18.5124 2.79547C19.1025 4.00684 19.5684 5.12503 20.0654 6.1811H3.97592ZM6.89564 0C5.80851 0 5.12517 0.40379 4.22441 1.67728L2.70243 5.09397H0.37287C0.0312012 5.09397 -0.621076 6.98868 1.80167 7.0508L0.994086 9.03869C0.994086 11.5236 1.02515 14.0395 1.02515 16.5243C1.02515 17.0524 1.42894 17.4562 1.95697 17.4562H5.09411C5.62215 17.4562 6.02594 17.0524 6.02594 16.5243V14.4433H17.9843V16.5243C17.9843 17.0524 18.4192 17.4562 18.9162 17.4562H22.0844C22.6124 17.4562 23.0162 17.0524 23.0162 16.5243C23.0162 14.0395 23.0473 11.5236 23.0473 9.03869L22.2086 7.0508C24.6624 6.98868 23.9791 5.09397 23.6374 5.09397H21.3078L19.8169 1.67728C18.8851 0.40379 18.2328 0 17.1146 0H6.89564ZM19.5995 9.194C18.7609 9.194 18.0775 9.87733 18.0775 10.716C18.0775 11.5546 18.7609 12.238 19.5995 12.238C20.4381 12.238 21.1215 11.5546 21.1215 10.716C21.1215 9.87733 20.4381 9.194 19.5995 9.194ZM4.41077 9.194C5.24942 9.194 5.93275 9.87733 5.93275 10.716C5.93275 11.5546 5.24942 12.238 4.41077 12.238C3.57213 12.238 2.88879 11.5546 2.88879 10.716C2.88879 9.87733 3.57213 9.194 4.41077 9.194Z"
					fill="#2368EE"
				/>
			</svg>
		);

		return (
			<Card heading="SolarTrak" iconSVG={carIcon} subheading="Basic">
				<div className="font-weight-medium">Energy Absorption</div>

				<div id="energyAbsorptionChart"></div>
			</Card>
		);
	}
}

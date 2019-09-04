import React from 'react';
import bb from 'billboard.js';

import Card from './Card';

export default class extends React.Component {
	componentDidMount() {
		bb.generate({
			data: {
				columns: [['Data Unused', 71], ['Data Used', 19]],
				colors: {
					'Data Used': '#138EFF',
					'Data Unused': '#F1F1F1'
				},
				order: 'asc',
				type: 'donut'
			},
			donut: {
				label: {
					show: false
				},
				title: '822MB\n 71% left',
				width: 20
			},
			legend: {
				hide: true
			},
			size: {
				height: 220
			},
			svg: {
				classname: 'personal-data-donut'
			},
			bindto: '#personalDataDonut'
		});
	}

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
			<Card heading="My Data" iconSVG={bluetoothIcon} subheading="Premium Plus">
				<div id="personalDataDonut"></div>
			</Card>
		);
	}
}

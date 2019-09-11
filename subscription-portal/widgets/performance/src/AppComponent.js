import React from 'react';
import bb from 'billboard.js';

import Card from './Card';

export default class extends React.Component {
	componentDidMount() {
		const chart = bb.generate({
			data: {
				columns: [
					[
						'performance',
						0,
						2.5,
						3,
						0.5,
						2,
						2.5,
						3,
						9,
						9,
						6,
						7,
						7.5,
						6.5,
						7,
						9,
						9,
						7.5,
						4.5,
						1.5,
						3.5,
						4.5,
						3.5,
						2.5,
						5,
						6,
						6.5
					]
				],
				colors: {
					performance: '#3E7BF0'
				},
				type: 'area-spline'
			},
			area: {
				linearGradient: true
			},
			axis: {
				x: {
					tick: {
						show: false
					},
					show: false
				},
				y: {
					tick: {
						count: 3
					},
					min: 0,
					max: 20,
					padding: {
						top: 0,
						bottom: 0
					}
				}
			},
			grid: {
				y: {
					show: true
				}
			},
			legend: {
				hide: true
			},
			regions: [
				{
					axis: 'x',
					start: 16,
					end: 26
				}
			],
			point: {
				show: false
			},
			svg: {
				classname: 'performance'
			},
			bindto: '#performanceChart'
		});

		setTimeout(
			() =>
				chart.load({
					columns: [
						[
							'performance',
							0,
							5,
							6,
							1,
							4,
							5,
							6,
							18,
							18,
							12,
							14,
							15,
							13,
							14,
							18,
							18,
							15,
							9,
							3,
							7,
							9,
							7,
							5,
							10,
							12,
							13
						]
					]
				}),
			1000
		);
	}

	render() {
		return (
			<div className="subscription-portal">
				<Card heading="Performance">
					<div id="performanceChart"></div>
				</Card>
			</div>
		);
	}
}

import React from 'react';
import bb from 'billboard.js';

import Card from './Card';

export default class extends React.Component {
	componentDidMount() {
		bb.generate({
			data: {
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
					type: 'category',
					categories: [
						'Sep 1',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						'Sep 15',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						' ',
						'Sep 30'
					]
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
	}

	render() {
		return (
			<Card heading="Performance">
				<div id="performanceChart"></div>
			</Card>
		);
	}
}

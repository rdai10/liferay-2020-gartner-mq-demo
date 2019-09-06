import React from 'react';
import bb from 'billboard.js';

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
						'Sep 7',
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
						'Sep 22',
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
			point: {
				show: false
			},
			svg: {
				classname: 'fuel-consumption-chart'
			},
			bindto: '#fuelConsumptionChart'
		});
	}

	render() {
		return (
			<div className="fuel-consumption">
				<div className="consumption-heading">
					<h4>Fuel Consumption</h4>
					<div className="time-scale">
						<span>D</span>
						<span>W</span>
						<span className="active-scale font-weight-black">M</span>
						<span>Y</span>
					</div>
				</div>
				<div id="fuelConsumptionChart"></div>
			</div>
		);
	}
}

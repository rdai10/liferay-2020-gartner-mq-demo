import React from 'react';

import Card from './Card';
import Modal from './Modal';
import UsageDetail from './UsageDetail';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.handleDisplayModal = this.handleDisplayModal.bind(this);

		this.state = {
			showModal: false
		};
	}

	handleDisplayModal() {
		this.setState({
			showModal: true
		});
	}

	render() {
		const {showModal} = this.state;

		return (
			<div className="subscription-portal">
				<Card heading="Usage">
					<button
						className="btn btn-link"
						onClick={this.handleDisplayModal}
						type="button"
					>
						<img
							// Image saved in theme
							src={`${Liferay.ThemeDisplay.getPathThemeImages()}/usage-car.png`}
							alt="Usage Car Image"
						/>

						<Modal
							onClose={this.handleCloseModal}
							show={showModal}
							size="full-screen"
						>
							<UsageDetail />
						</Modal>
					</button>
				</Card>
			</div>
		);
	}
}

import React from 'react';

import Card from './Card';
import Modal from './Modal';
import UsageDetail from './UsageDetail';

export default class extends React.Component {
	constructor(props) {
		super(props);

		this.handleCloseModal = this.handleCloseModal.bind(this);
		this.handleDisplayModal = this.handleDisplayModal.bind(this);

		this.state = {
			showModal: false
		};
	}

	handleCloseModal() {
		this.setState({
			showModal: false
		});
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
							src={`${Liferay.ThemeDisplay.getPathThemeImages()}/usage-car.png`}
							alt="Usage Car Image"
						/>
					</button>

					{showModal && (
						<Modal size="full-screen">
							<UsageDetail onClick={this.handleCloseModal} />
						</Modal>
					)}
				</Card>
			</div>
		);
	}
}

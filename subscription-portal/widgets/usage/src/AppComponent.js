import React from 'react';

import Card from './Card';
import Modal from './Modal';

// import img from '../assets/img/usage-car.png';

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
			<Card heading="Usage">
				<button
					className="btn btn-link"
					onClick={this.handleDisplayModal}
					type="button"
				>
					<img
						// Import img file as img tag src fails silently, hard coding url for now
						src={
							'http://localhost:8080/documents/20123/46507/usage-car+%281%29.png/9fb8f04b-2a07-1fa0-d162-18d8c24b632c?version=1.0&t=1567632736711&download=true'
						}
						alt="Usage Car Image"
					/>

					<Modal
						onClose={this.handleCloseModal}
						show={showModal}
						size="full-screen"
					>
						Body
					</Modal>
				</button>
			</Card>
		);
	}
}

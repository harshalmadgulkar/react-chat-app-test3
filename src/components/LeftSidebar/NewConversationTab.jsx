import React from 'react';
import ContactTab from './ContactTab';

import { IoCloseCircleSharp } from 'react-icons/io5';

function NewConversationTab({ contacts, showNewConvoTab }) {
	let handleClose = () => {
		showNewConvoTab(false);
	};

	return (
		<>
			<div className='new-convo-tab'>
				<div className='nct-header'>
					<p>Select Contact</p>
					<span onClick={handleClose}>
						<IoCloseCircleSharp />
					</span>
				</div>
				<div className='nct-list' onClick={handleClose}>
					{contacts.map((contact, index) => (
						<ContactTab contact={contact} key={index} />
					))}
				</div>
			</div>
		</>
	);
}

export default NewConversationTab;

import React from 'react';
import { FaPlus } from 'react-icons/fa';

function NewConversation(props) {
	let handleClick = () => {
		props.showNewConvoTab(true);
	};
	
	return (
		<div className='new-convo'>
			<p>New Conversation</p>
			<span onClick={handleClick}>
				<FaPlus />
			</span>
		</div>
	);
}

export default NewConversation;

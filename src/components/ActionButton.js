import React from 'react';
import '../Inbox.css';

const ActionButton = (props) => {

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

   
    const allMessages = props.messages 

    if (!allMessages) {
      return (
        <div className="ActionButton">
        </div>
      )
    }

    if (props.messages.length === 0) {
      return (
        <div className="ActionButton">
        </div>
      )
    }

    const message = props.messages[props.indexActiveMessage]
    const { type, action } = message

    return (
      <div className="ActionButton">
        <button 
          className="action-button">
            {capitalizeFirstLetter(action)} {capitalizeFirstLetter(type)} 
        </button>
      </div>
    );
  
}

export default ActionButton;
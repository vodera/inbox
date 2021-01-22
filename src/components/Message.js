import React from 'react';
import '../Inbox.css';
import moment from 'moment'

const Message = (props) => {

  // const calculateTimeSince = (date) => {
  //   let then = moment(date)
  //   let now = moment()
  //   if (now.diff(then, 'minutes') < 60) return now.diff(then, 'minutes') + "m ago"
  //   if (now.diff(then, 'hours') < 24) return now.diff(then, 'hours') + "h ago"
  //   return now.diff(then, 'days') + "d ago"
  // }
  // const allTheMessages = props.messages
  // const {member, user, type, amount} = allTheMessages
    return  (
      <>
      {/* <div className="Message">
          <div className="inbox-row grey-text">
          <span>{props.indexActiveMessage + 1} of {props.messages.length}</span>
          <span>{calculateTimeSince(props.messages.timestamp)}</span>
          </div>
        </div>

        {props.messages.map((message, index) => { 
             
          return (
        <div className={index === props.indexActiveMessage ? 'data': 'data active'} key={index}>
        {index === props.indexActiveMessage && ( 
        <h2>{member || props.messages.user} applied for a {props.messages.type} with a total amount of KES {props.messages.amount}</h2>
            )}
              </div>
              
          )
        
              })}     */}
     </>
    )
  
}

export default Message;

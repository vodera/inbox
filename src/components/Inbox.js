import React, {useEffect, useState} from 'react';
// import {service} from '../api'
import axios from 'axios'
import '../Inbox.css';
import moment from 'moment'
// import Message from './Message';
import ActionButton from './ActionButton';

const Inbox = () => {

  const [loansData, setLoansData] = useState([])
  const [tillsData, setTillsData] = useState([])
  const [messages, setMessages] = useState([])
  const [indexActiveMessage, setIndexActiveMessage] = useState(0)

  const baseURL = 'api'
  
  const calculateTimeSince = (date) => {
    let then = moment(date)
    let now = moment()
    if (now.diff(then, 'minutes') < 60) return now.diff(then, 'minutes') + "m ago"
    if (now.diff(then, 'hours') < 24) return now.diff(then, 'hours') + "h ago"
    return now.diff(then, 'days') + "d ago"
  }
  const numberOfMessages = messages.length
 

  const nextMessage = (e) => {
    e.preventDefault()
    setIndexActiveMessage(indexActiveMessage === numberOfMessages -1 ? 0 : indexActiveMessage +1)
  }

  const previousMessage = (e) => {
    e.preventDefault()
    setIndexActiveMessage(indexActiveMessage === 0 ? numberOfMessages -1 : indexActiveMessage -1)
  }
  
  useEffect(() => {
    axios.get(`${baseURL}/inbox/loans`)
    .then(loansRes => {
      let loansData = loansRes.data.data
      
      setLoansData(loansData)
      console.log(loansData)
    })
    .catch(console.error());
    
    axios.get( `${baseURL}/inbox/till`)
      .then(tillsRes => { 
        let tillsData = tillsRes.data.data

        setTillsData(tillsData)
        setMessages(messages => [...loansData, ...tillsData])
        console.log(messages)
      })
    .catch(console.error());
  }, [loansData.length, messages.length])
  
    return (
      <div className="inbox">
        <div className="inbox-row">        
          <span className="title">Inbox</span> 
          
          <div className="inbox-buttons"> 
            <button onClick={previousMessage}>
              <img src="assets/left_arrow.svg" alt="left-arrow"></img>
            </button>
            
            <button onClick={nextMessage}>
              <img src="assets/right_arrow.svg" alt="right-arrow"></img>
            </button>
          </div>
          </div>
         
            <div className="inbox-row grey-text">
              <span>{indexActiveMessage + 1} of {loansData.length + tillsData.length}</span>
              <span>{calculateTimeSince(loansData.timestamp || tillsData.timestamp)}</span>
            </div>
          
         
         {/* <Message 
          messages={[...messages]}
          indexActiveMessage={indexActiveMessage}
        /> */}

           {messages.map((message, index) => {    
            return (
         <div 
        //  className={index === indexActiveMessage ? 'data': 'data active'} 
         key={index}>
         {index === indexActiveMessage && ( 
         <h2 >{message.member || message.user} applied for a {message.type} with a total amount of KES {message.amount}</h2>
               )}
                </div>
            )
                })}    

        <ActionButton
          messages={[...messages]}
          indexActiveMessage={indexActiveMessage}
    />

    </div>   


  
   
  

        )
        
    
}


export default Inbox;

import axios from 'axios';

export const service = axios.create({
  baseURL: 'api',
});

// const errHandler = err => {
//   if (err.response && err.response.data) {
//     throw err.response.data.message;
//   }
//   throw err;
// };


// export default {
//   service: service,
 

//   fetchInboxMessages() {
//     return service
//       .get('/inbox/loans')
//       .then(loanRes => loanRes.data)
//       .catch(errHandler);
//   },



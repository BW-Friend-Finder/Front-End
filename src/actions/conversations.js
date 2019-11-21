
export const send_message = conversationInfo => dispatch => {
  console.log('send message')
  axios.post('', {conversationID: conversationInfo.id})
    .then(res => {
    })
    .catch(console.log)
}

export const receive_messages = conversationInfo => dispatch => {
  console.log('receive messages')
  axios.post('', {conversationID: conversationInfo.id})
    .then(res => {
    })
    .catch(console.log)
}
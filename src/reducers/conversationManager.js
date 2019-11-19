export default (state, action) => {
  switch (action.type){
    default:
      return[
        {
          conversationID: -1,
          messages: [
            {
              senderID: -1,
              message: ''
            }
          ]
        }
      ]
  }
}
const UPDATE_NEW_FRIEND_MESSAGE_BODY = 'UPDATE_NEW_FRIEND_MESSAGE_BODY';
const SEND_FRIEND_MESSAGE = 'SEND_FRIEND_MESSAGE';

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ],
    friendmessages: [
        {id: 1, friendmessage: 'Hi'},
        {id: 2, friendmessage: 'How is your it-kamasutra?'},
        {id: 3, friendmessage: 'Yo'},
        {id: 4, friendmessage: 'Yo'},
        {id: 5, friendmessage: 'Yo'}
    ],
    newFriendMessageBody: ""
};

const friendsReducer = (state = initialState, action) => {
   switch (action.type) {
       case UPDATE_NEW_FRIEND_MESSAGE_BODY:
           state.newFriendMessageBody = action.body;
           return state;
       case SEND_FRIEND_MESSAGE:
           let body = state.newFriendMessageBody;
           state.newFriendMessageBody = '';
           state.friendmessages.push({id: 6, friendmessage: body});
           return state;
       default:
           return state;
   }
}

export const sendFriendMessageCreator = () => ({type: SEND_FRIEND_MESSAGE})
export const updateNewFriendMessageBodyCreator = (body) =>
    ({ type: UPDATE_NEW_FRIEND_MESSAGE_BODY, body: body })

export default friendsReducer;
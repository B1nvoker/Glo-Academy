const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {message: "Post 1", likes: 12, imgUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
                {
                    message: "Post 2",
                    likes: 123,
                    imgUrl: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
                },
                {message: "Post 3", likes: 124, imgUrl: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                {
                    message: "Post 4",
                    likes: 125,
                    imgUrl: "https://i.pinimg.com/originals/7b/e0/4f/7be04f1d514b2583dc5b99fb22005ccd.jpg"
                },
                {message: "Post 5", likes: 126, imgUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"}
            ],
            newPostText: "Write your post"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "valera", imgUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"},
                {
                    id: 2,
                    name: "vadim",
                    imgUrl: "https://i.pinimg.com/originals/7b/e0/4f/7be04f1d514b2583dc5b99fb22005ccd.jpg"
                },
                {
                    id: 3,
                    name: "vova",
                    imgUrl: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"
                },
                {id: 4, name: "volodja", imgUrl: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                {
                    id: 5,
                    name: "artem",
                    imgUrl: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"
                }
            ],
            messages: [
                {message: "Hi"},
                {message: "How are you?"},
                {message: "Bye"}

            ],
            newMessageText : "Write your message"
        },
        favoriteFriendsSideBar: {
            favoriteFriends: [
                {name: "Alex", avaUrl: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},
                {name: "Sasha", avaUrl: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
                {name: "Sveta", avaUrl: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"}
            ]
        }
    },
    _callSubscribe() {
    },

    getState() {
        return this._state;
    },
    subscride(observer) {
        this._callSubscribe = observer;
    },

    dispatch(action) {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case ADD_POST : {
                let newPost = {
                    message: this._state.profilePage.newPostText,
                    likes: 0,
                    imgUrl: "https://i.pinimg.com/originals/7b/e0/4f/7be04f1d514b2583dc5b99fb22005ccd.jpg"
                };
                this._state.profilePage.posts.push(newPost);
                this._state.profilePage.newPostText = "";
                this._callSubscribe(this._state);
            }
            // eslint-disable-next-line no-fallthrough
            case UPDATE_NEW_POST_TEXT : {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscribe(this._state);
            }

            case ADD_MESSAGE : {
                let newMessage = {
                    message: this._state.dialogsPage.newMessageText
                };
                this._state.dialogsPage.messages.push(newMessage);
                this._state.dialogsPage.newMessageText = "";
                this._callSubscribe(this._state);
            }
            // eslint-disable-next-line no-fallthrough
            case UPDATE_NEW_MESSAGE_TEXT : {
                this._state.dialogsPage.newMessageText = action.newText;
                this._callSubscribe(this._state);
            }
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

export const updateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;
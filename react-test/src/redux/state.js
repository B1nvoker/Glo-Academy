import {renderEntireTree} from "../render";

let state = {
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
            {id: 3, name: "vova", imgUrl: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},
            {id: 4, name: "volodja", imgUrl: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
            {id: 5, name: "artem", imgUrl: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"}
        ],
        messages: [
            {message: "Hi"},
            {message: "How are you?"},
            {message: "Bye"}

        ]
    },
    favoriteFriendsSideBar: {
        favoriteFriends: [
            {name: "Alex", avaUrl: "https://www.meme-arsenal.com/memes/be50e6ba99654b5455027dcc82beb5b3.jpg"},
            {name: "Sasha", avaUrl: "https://f1.upet.com/A_r2u6uZhnxA_x.jpg"},
            {name: "Sveta", avaUrl: "https://cs11.pikabu.ru/post_img/big/2020/04/12/9/1586704514168132921.png"}
        ]
    }
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state);

}

export let addPost = () => {
    let newPost = {
        message: state.profilePage.newPostText,
        likes: 0,
        imgUrl: "https://i.pinimg.com/originals/7b/e0/4f/7be04f1d514b2583dc5b99fb22005ccd.jpg"
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    renderEntireTree(state);
}

export default state;
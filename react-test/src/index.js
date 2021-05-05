import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {message: "Post 1", likes: 12},
    {message: "Post 2", likes: 123},
    {message: "Post 3", likes: 124},
    {message: "Post 4", likes: 125},
    {message: "Post 5", likes: 126}
];

let dialogs = [
    {id: 1, name: "valera"},
    {id: 2, name: "vadim"},
    {id: 3, name: "vova"},
    {id: 4, name: "volodja"},
    {id: 5, name: "artem"}
]

let messages = [
    {message: "Hi"},
    {message: "How are you?"},
    {message: "Bye"}

]


ReactDOM.render(
  <React.StrictMode>
    <App posts = {posts} messages = {messages} dialogs = {dialogs}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

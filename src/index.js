import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: "How are you?", likesCount: 12},
  {id: 2, message: "This is my first post)", likesCount: 10},
  {id: 3, message: "This is my second post!", likesCount:22}
];

let persons = [
  {id: 1, name: 'Vova'},
  {id: 2, name: 'Valera'},
  {id: 3, name: 'Maks'},
  {id: 4, name: 'Lexa'},
  {id: 5, name: 'Andrey'},
  {id: 6, name: 'Djodji'}
];

let messages = [
  {id: 1, message: 'Hello. How are you today?', time: '11:01', new: true},
  {id: 2, message: 'Hey! I am fine. Thanks for asking!', time: '11:01', new: false},
  {id: 3, message: 'Sweet! So, what do you wanna do today?', time: '11:03', new: true},
  {id: 4, message: 'Nah, I dunno. Play soccer.. or learn more coding perhaps?', time: '11:05', new: false}
];

ReactDOM.render(
  <React.StrictMode>
    <App posts={ posts } persons={ persons } messages={ messages } />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import ReactDOM from 'react-dom';
import user from './social-profile/user.json';
import friends from './friend-list/friends.json';

function SocialProfile(props) {
  return (
    <div className="profile">
      <div className="description">
        <img src={props.avatar} alt={props.name} className="avatar" />
        <p className="name">{props.name}</p>
        <p className="tag">@{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{props.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{props.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{props.likes}</span>
        </li>
      </ul>
    </div>
  );
}

ReactDOM.render(
  <SocialProfile
    avatar={user.avatar}
    name={user.name}
    tag={user.tag}
    location={user.location}
    followers={user.stats.followers}
    views={user.stats.views}
    likes={user.stats.likes}
  />,
  document.getElementById('root'),
);

// function FriendList(pug) {
//   return (
//     <li className="item">
//       <span className="status">{friends.isOnline}</span>
//       <img
//         className="avatar"
//         src={friends.avatar}
//         alt={friends.name}
//         width="48"
//       />
//       <p className="name">{friends.name}</p>
//     </li>
//   );
// }

// ReactDOM.render(<FriendList friends />, document.getElementById('root'));

// ========================================
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// // import { string } from 'prop-types';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

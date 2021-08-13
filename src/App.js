import FriendList from './components/FriendList';
import SocialProfile from './components/SocialProfile';
import friends from './friend-list/friends.json';
import user from './social-profile/user.json';

function App() {
  return (
    <div>
      <FriendList
        isOnline={friends[0].isOnline}
        avatarImage={friends[0].avatar}
        name={friends[0].name}
      />
      <br />
      <hr />
      <br />
      <SocialProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}

export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           PUG LIFE
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

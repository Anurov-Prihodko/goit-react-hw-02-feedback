import defaultFoto from './defaultfoto.jpg';
// const friend = friends[2];

const FriendList = props => {
  const { isOnline, avatarImage = defaultFoto, name } = props;
  return (
    <li className="item">
      <span className="status">{isOnline}</span>
      <img className="avatar" src={avatarImage} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

export default FriendList;

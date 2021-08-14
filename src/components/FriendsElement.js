import PropTypes from 'prop-types';
import defaultFoto from './defaultfoto.jpg';

const FriendsElement = ({ id, avatar = defaultFoto, name, isOnline }) => {
  return (
    <li className="item" key={id}>
      {isOnline ? (
        <span className="status">🟢</span>
      ) : (
        <span className="status">🔴</span>
      )}
      <img
        className="avatar"
        src={avatar ?? defaultFoto}
        alt={name}
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendsElement.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsElement;

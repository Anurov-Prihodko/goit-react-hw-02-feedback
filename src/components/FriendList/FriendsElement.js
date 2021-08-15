import PropTypes from 'prop-types';
import defaultFoto from '../defaultfoto.jpg';
import styles from './FriendList.module.css';

const FriendsElement = ({ id, avatar = defaultFoto, name, isOnline }) => {
  return (
    <li className={styles.item} key={id}>
      {isOnline ? (
        <span className={styles.status + ' ' + styles.online}></span>
      ) : (
        <span className={styles.status + ' ' + styles.offline}></span>
      )}
      <img
        className={styles.avatar}
        src={avatar ?? defaultFoto}
        alt={name}
        width="48"
      />
      <p className={styles.friend_name}>{name}</p>
    </li>
  );
};

FriendsElement.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendsElement;

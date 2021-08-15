import PropTypes from 'prop-types';
import defaultFoto from '../defaultfoto.jpg';
import styles from './SocialProfile.module.css';

export default function SocialProfile(props) {
  const {
    avatar = defaultFoto,
    name,
    tag,
    location,
    followers = 'unknown',
    views = 'unknown',
    likes = 'unknown',
  } = props;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <div className={styles.position_foto}>
          <img
            src={avatar ?? defaultFoto}
            alt={name}
            className={styles.avatar}
          />
        </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.wraper_profile}>
          <span className={styles.label}>Followers </span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li className={styles.wraper_profile}>
          <span className={styles.label}>Views </span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li className={styles.wraper_profile}>
          <span className={styles.label}>Likes </span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

SocialProfile.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};

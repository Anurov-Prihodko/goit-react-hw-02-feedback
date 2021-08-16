import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

function getRandomColor() {
  let color = '';
  for (let i = 0; i < 3; i++) {
    let sub = Math.floor(Math.random() * 256).toString(16);
    color += sub.length === 1 ? '0' + sub : sub;
  }
  return '#' + color;
}

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title ? <h2 className={styles.title}>Upload stats</h2> : null}

      <ul className={styles.stat_list}>
        {stats.map(stata => (
          <li
            className={styles.item}
            key={stata.id}
            style={{
              backgroundColor: getRandomColor(),
            }}
          >
            <span className={styles.label}>{stata.label}</span>
            <span className={styles.percentage}>{stata.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};

export default Statistics;

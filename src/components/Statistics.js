import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title ? (
        <h2 className="title">Upload stats</h2>
      ) : (
        <h2 className="title">{title}</h2>
      )}

      <ul className="stat-list">
        {stats.map(stata => (
          <li className="item" key={stata.id}>
            <span className="label">{stata.label}</span>
            <span className="percentage">{stata.percentage}</span>
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

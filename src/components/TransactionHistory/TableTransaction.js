import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TableTransaction = ({ id, type, amount, currency }) => {
  return (
    <tr key={id} className={styles.transaction_line}>
      <td className={styles.transaction_info}>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
};

TableTransaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableTransaction;

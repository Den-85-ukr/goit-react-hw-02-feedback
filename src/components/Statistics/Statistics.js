import styles from './Statistics.module.css';

const Statisics = ({ good, neutral, bad, total, average }) => {
  let rating = average() >= 50 ? 'green' : 'red';

  return (
    <ul className={styles.list}>
      <li>Good:{good}</li>
      <li>Neutral:{neutral}</li>
      <li>Bad:{bad}</li>
      <li>Total: {total()}</li>
      <li style={{ color: rating }}>Average:{average()}%</li>
    </ul>
  );
}

export default Statisics;
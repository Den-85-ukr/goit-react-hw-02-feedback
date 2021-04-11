import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (options.length === 0) return null;

  return (
    <ul className={styles.list}>
          {options.map(option => {          
        return (
          <li key={option}>
            <button
              className={styles.btn}
              type="button"
              onClick={() => { onLeaveFeedback(option); }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default FeedbackOptions
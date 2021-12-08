import styles from './SelectArea.module.css'

function SelectLabels() {

  return (
    <div>
      <select name="type" placeholder="type" className={styles.typeSelector}>
        <option value="type" disabled selected style={{display: "none"}} className={styles.selectorOption}>Type</option>
        <option value="option">Option 1</option>
        <option value="option">Option 2</option>
        <option value="option">Option 3</option>
      </select>
      <select name="type" placeholder="type" className={styles.countrySelector}>
        <option value="type" disabled selected style={{display: "none"}} className={styles.selectorOption}>Country</option>
        <option value="option">Country 1</option>
        <option value="option">Country 2</option>
        <option value="option">Country 3</option>
      </select>
      <select name="type" placeholder="type" className={styles.stateSelector}>
        <option value="type" disabled selected style={{display: "none"}} className={styles.selectorOption}>State</option>
        <option value="option">State 1</option>
        <option value="option">State 2</option>
        <option value="option">State 3</option>
      </select>
    </div>
  );
}

export default SelectLabels;

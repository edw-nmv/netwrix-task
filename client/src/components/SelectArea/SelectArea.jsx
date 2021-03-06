import { useSelector, useDispatch } from 'react-redux';
import actionTypesCompanyType from '../../redux/actionTypes/companyTypeAT';
import styles from './SelectArea.module.css';

function SelectLabels() {
  const dispatch = useDispatch();

  const dataFromDB = useSelector((state) => state.data.list);
  const status = dataFromDB.map((company) => company.status);
  const uniqueStatus = [...new Set(status)];

  function handleChange(event) {
    event.preventDefault();
    const companyType = event.target.value;
    dispatch({ type: actionTypesCompanyType.GET_COMPANY_TYPE_START, payload: companyType });
  }

  return (
    <div className={styles.selectors}>
      <select name="type" placeholder="type" className={styles.typeSelector} defaultValue={'DEFAULT'} onChange={handleChange}>
        <option value="DEFAULT" disabled style={{ display: 'none' }} className={styles.selectorOption}>Type</option>
        {
          uniqueStatus.map((el, index) => (
            <option key={index} value={el}>{el}</option>
          ))
        }
      </select>
      <select name="type" placeholder="type" className={styles.countrySelector} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled style={{ display: 'none' }} className={styles.selectorOption}>Country</option>
        <option value="option">United States</option>
        <option value="option">United Kingdom</option>
        <option value="option">Russia</option>
      </select>
      <select name="type" placeholder="type" className={styles.stateSelector} defaultValue={'DEFAULT'}>
        <option value="DEFAULT" disabled style={{ display: 'none' }} className={styles.selectorOption}>State</option>
        <option value="option">State of New York</option>
        <option value="option">State of Washington</option>
        <option value="option">State of Florida</option>
      </select>
    </div>
  );
}

export default SelectLabels;

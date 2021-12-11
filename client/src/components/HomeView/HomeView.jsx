import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import actionTypesDBData from '../../redux/actionTypes/dbDataAT';

import Card from '../Card/Card.jsx';
import Header from '../Header/Header.jsx';

function HomeView() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: actionTypesDBData.GET_DATA_FROM_DB_START });
  }, [dispatch]);

  const dataFromDB = useSelector((state) => state.data.list);
  const companyType = useSelector((state) => state.companyType.list);
  const companyByType = dataFromDB.filter((company) => company.status === companyType);

  return (
    <>
      <Header />
        {
          !companyByType.length
            ? <div style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 20 }}>
                Your search parameters did not match any partners. Please try different search
              </p>
            </div>
            : companyByType.map((company) => (
              <Card key={company.id} item={company} />
            ))
        }
    </>
  );
}

export default HomeView;

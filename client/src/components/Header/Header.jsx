import * as React from 'react';

import SelectArea from '../SelectArea/SelectArea.jsx';
import logo from './img/Netwrix_logo_120x25.png';
import background from './img/bg_large_1.png';
import styles from './Header.module.css';

function Header() {
  return (
    <>
    <div className={styles.logoDiv}>
      <img className={styles.logoImg} src={logo} alt="logo" />
    </div>
    <div className={styles.header} style={{ backgroundImage: `url(${background})` }}>
      <div className={styles.overlapGroup3}>
        <h1 className={styles.bigTitle}>Netwrix Partner Locator</h1>
        <p className={styles.description}>
          Hundreds of Netwrix partners around the world are standing by to help you.<br/>
          With our Partner Locator you can easily find the list of authorized partners in your area.
        </p>
      </div>
      <div>
        <input className={styles.searchContainer} type="text" placeholder="Search by company name or address.." />
      </div>
      <div className={styles.filter}>
        <SelectArea />
      </div>
    </div>
    </>
  );
}

export default Header;

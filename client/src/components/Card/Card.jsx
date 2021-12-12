import styles from './Card.module.css';

function Card({ item }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCardInfo}>
        <div className={styles.logo}>
          <img src={item.logo} alt="logo" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>{item.company}</h2>
          <p className={styles.infoAddress}>{item.address}</p>
        </div>
      </div>
      <div className={styles.rightCardInfo}>
        <hr className={styles.shapeHorizontal} noshade={'noshade'}/>
        <div className={styles.contacts}>
          <p><a className={styles.website} href={item.website}>Website</a></p>
          <p><a className={styles.phone} href="tel:">{item.phone}</a></p>
        </div>
        <hr className={styles.shapeVertical} noshade={'noshade'}/>
        <div className={styles.status}>
          <p className={styles.statusTitle}>{item.status}</p>
          <p className={styles.helper}>helper</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

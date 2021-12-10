import logo from './img/logo-distributor-new.png'
import styles from './Card.module.css'

function Card({ item }) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.leftCardInfo}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.info}>
          <h2 className={styles.infoTitle}>{item.title}</h2>
          <p className={styles.infoAddress}>{item.address}</p>
        </div>
      </div>
      <div className={styles.rightCardInfo}>
        <div className={styles.contacts}>
          <p><a className={styles.website} href="tel:">{item.website}</a></p>
          <p><a className={styles.phone} href="tel:">{item.phone}</a></p>
        </div>
        <hr className={styles.shape} noshade={'noshade'}/>
        <div className={styles.status}>
          <p className={styles.statusTitle}>{item.status}</p>
          <p style={{ visibility: 'hidden'}}>helper</p>
        </div>
      </div>

    </div>
  )
}

export default Card;

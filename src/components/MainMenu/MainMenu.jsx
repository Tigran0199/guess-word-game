import React from 'react'
import styles from './MainMenu.module.css'
import MenuLogo from '../../assets/images/kid.jpg'

export default function MainMenu() {
  return (
    <div className={styles.menuContainer}>
        <img src={MenuLogo}  className={styles.menuLogo}/>
        <button className={styles.menuButton}>Սկսել</button>
        <button className={styles.menuButton}>Հաշիվ</button>
        <button className={styles.menuButton}>Ինֆո</button>
    </div>
  )
}

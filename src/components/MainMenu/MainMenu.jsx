import React from 'react'
import styles from './MainMenu.module.css'
import MenuLogo from '../../assets/images/kid.jpg'
import { useNavigate } from 'react-router-dom'

export default function MainMenu() {
    const navigate = useNavigate("")
    function start(){
        navigate("/play")
    }
    function score(){
        navigate("/score")
    }
    function info(){
        navigate("/info")
    }
    function SignInUp(){
        navigate("/signInUp")
    }
  return (
    <div className={styles.menuContainer}>
        <img src={MenuLogo}  className={styles.menuLogo}/>
        <button className={styles.menuButton} onClick={start}>Սկսել</button>
        <button className={styles.menuButton} onClick={score}>Հաշիվ</button>
        <button className={styles.menuButton} onClick={info}>Ինֆո</button>
        <button className={styles.menuButton} onClick={SignInUp}>Մուտք / Գրանցում</button>
    </div>
  )
}

import styles from './Header.module.css'
import rocket from '../assets/rocket.svg.svg'

export function Header( ){
    return(
        <article className={styles.header}>
            <img src={rocket} alt="foguete" className={styles.imgRocket}/>
            <span>to</span>
            <span>do</span>
            
        </article>
    )
}
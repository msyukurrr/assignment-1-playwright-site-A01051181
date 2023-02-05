import styles from '../styles/Home.module.css'

export default function Arrows({
    up="/",
    down="/"
}){
    return(
        <div style={{position:'fixed', marginTop:'35%', marginLeft:'85%'}}>
            <a href={up}>
                <span className={styles.arrowCont}>
                    <img src='/icons/upwardArrow.png' style={{height: 45, width: 35, marginBottom: 55}}/>
                </span>
            </a>

            <a href={down}>
                <span className={styles.arrowCont}>
                    <img src='/icons/downwardArrow.png' style={{height: 45, width: 35}}/>
                </span>
            </a>
            
        </div>
    )
}
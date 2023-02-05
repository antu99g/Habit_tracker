import {Link} from 'react-router-dom';
import styles from '../styles/navbar.module.css';

// Navbar component
export default function Navbar() {
   return (
      <div className={styles.nav}>
         <h1>Habit Tracker</h1>

         <Link to="/" className={styles.link}>
            <span className={styles.navElement}>Home</span>
         </Link>

         <Link to="/weekview" className={styles.link}>
            <span className={styles.navElement}>
               Week View
               <img
                  src="https://cdn-icons-png.flaticon.com/512/55/55281.png"
                  alt="calender"
               />
            </span>
         </Link>
      </div>
   );
}
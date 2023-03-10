import { useSelector } from "react-redux";
import moment from 'moment';
import {Calender} from '../components';
import styles from "../styles/weekview.module.css";


// Week-view Page
export default function WeekView() {
   // List of all habits in state
   const allHabits = useSelector(state => state.habits);
   // Current month
   const month = moment().format("MMM, YYYY");

   return (
      <div className={styles.weekContainer}>
         <h2>{month}</h2>
         {allHabits.map((habit, index) => {
            return (
               <Calender
                  statusList={habit.statusList}
                  habitIndex={index}
                  title={habit.title}
                  key={index}
               />
            );
         })}
      </div>
   );
}
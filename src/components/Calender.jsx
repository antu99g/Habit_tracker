import moment from "moment";
import styles from '../styles/weekview.module.css';
import Day from "./Day";


// List of 7 days in each habit
export default function Calender({ statusList, habitIndex, title }) {

   // Array of last 7 days (in backwards)
   const week = [];
   for (let i = 0; i < 7; i++) {
      let day = moment().subtract(i, "days").format("ddd");
      week.push(day);
   }

   return (
      <div className={styles.eachHabit}>
         <h4>{title}</h4>
         <div className={styles.calender}>
            {week.map((day, index) => {
               const record = index < statusList.length;
               const props = { statusList, habitIndex, index, day, record };
               return <Day {...props} key={index} />;
            })}
         </div>
      </div>
   );
}

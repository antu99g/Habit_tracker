import styles from "../styles/listview.module.css";

// Component for each habit in home-page
export default function Habit({ habit, index }) {

   // Function to check consistancy
   const checkConsistency = (array) => {
      let consistancy = 0;
      for (let i = 1; i < array.length; i++) {
         if (array[i] === "done") {
            consistancy++;
         } else {
            break;
         }
      }
      return consistancy;
   };


   return (
      <div key={index} className={styles.eachHabit}>
         <span>
            <h4 className={styles.habitName}>{habit.title}</h4>
            <p>{checkConsistency(habit.statusList)} day streak</p>
         </span>
         <small>Created on: {habit.createdOn}</small>
      </div>
   );
}

import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNewHabit, addTodayStatus, changeDate } from "../actions";
import styles from '../styles/listview.module.css';
import {Habit} from '../components';
import moment from "moment";

// Home Page
export default function ListView() {
   // List of all habits in state
   const allHabits = useSelector((state) => state.habits);
   // Current-date stored in state
   const lastUpdate = useSelector((state) => state.updatedOn);
   const dispatch = useDispatch();

   // Today's date
   const today = moment().format("DD MMM, YYYY");
   // State for input in new-habit-form
   const [titleInput, setTitleInput] = useState("");


   // Hook to detect change of current date
   useEffect(() => {
      // if date from state doesn't match with current date
      if (today !== lastUpdate) {

         dispatch(changeDate(today)); // change current-date in state

         // If atleast one habit exists
         if (lastUpdate !== "" && allHabits.length > 0) {
            // Adding none status to each habit when date changes
            let newHabits = allHabits.map((habit) => {
               habit.statusList.unshift("none");
               return habit;
            });
            dispatch(addTodayStatus(newHabits));
         }
      }
   }, [today]);


   // Adding new habit to redux-state
   const handleFormSubmit = (e) => {
      e.preventDefault();
      e.target.reset();
      let newHabit = {
         title: titleInput,
         statusList: ["none"],
         createdOn: today,
      };
      dispatch(addNewHabit(newHabit));
   };

   
   return (
      <div className={styles.listContainer}>
         <h2>{lastUpdate}</h2>

         <form onSubmit={handleFormSubmit}>
            <h3>Add new habit</h3>
            <input
               type="text"
               name="title"
               placeholder="Type here.."
               onChange={({ target }) => {
                  setTitleInput(target.value);
               }}
            />
            <button type="submit">Add Habit</button>
         </form>

         {allHabits.length > 0 ? (
            <div className={styles.habitList}>
               {allHabits.map((habit, index) => {
                  return <Habit habit={habit} index={index} key={index} />;
               })}
            </div>
         ) : (
            <h2 className={styles.nohabit}>Add a Habit...</h2>
         )}
      </div>
   );
}
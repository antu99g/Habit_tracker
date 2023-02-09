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
   const updatedOn = useSelector((state) => state.updatedOn);

   const dispatch = useDispatch();

   // State for input in new-habit-form
   const [titleInput, setTitleInput] = useState("");

   // Today's date
   const today = moment().format("DD MMM, YYYY");


   // Hook to detect change of current date
   useEffect(() => {

      // if date from state doesn't match with current date
      if (today !== updatedOn) {

         dispatch(changeDate(today)); // change current-date in state

         // If atleast one habit exists
         if (updatedOn !== "" && allHabits.length > 0) {
            
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
      let statusList = [];
      for(let i=0; i<7; i++){
         statusList.push('none');
      }
      let newHabit = {
         title: titleInput,
         statusList,
         createdOn: today,
      };
      dispatch(addNewHabit(newHabit));
   };

   
   return (
      <div className={styles.listContainer}>
         <h2>{updatedOn}</h2>

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
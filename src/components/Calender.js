import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import styles from '../styles/weekview.module.css';
import { changeStatus } from "../actions";


// List of 7 days in each habit
export default function Calender({ statusList, habitIndex }) {
   const [editing, setEditing] = useState(false);
   const dispatch = useDispatch();

   // Array of last 7 days (in backwards)
   const week = [];
   for (let i = 0; i < 7; i++) {
      let day = moment().subtract(i, "days").format("ddd");
      week.push(day);
   }

   // Function for dispatching status-change
   const handleStatusChange = (target, index) => {
      if (target.value !== "select") {
         setEditing(false); 
         dispatch(changeStatus(habitIndex, index, target.value));
      }
   };

   return (
      <div className={styles.calender}>
         {week.map((day, index) => {
            if (index < statusList.length) {
               return (
                  <span className={styles.calenderDate} key={index}>
                     <small className={index === 0 && styles.today}>
                        {day}
                     </small>
                     {editing ? (
                        <select
                           onChange={({ target }) =>
                              handleStatusChange(target, index)
                           }
                        >
                           <option value="select">-Select-</option>
                           <option value="none">None</option>
                           <option value="notDone">Not Done</option>
                           <option value="done">Done</option>
                        </select>
                     ) : (
                        <img
                           src="https://cdn-icons-png.flaticon.com/512/1828/1828270.png"
                           className={styles.editBtn}
                           onClick={() => {
                              setEditing(true);
                           }}
                           alt="edit"
                        />
                     )}
                     <div className={styles.statusImg}>
                        {statusList[index] === "done" && (
                           <img src='https://cdn-icons-png.flaticon.com/512/1828/1828643.png' alt='status' />
                        )}

                        {statusList[index] === "notDone" && (
                           <img src='https://cdn-icons-png.flaticon.com/512/1828/1828665.png' alt='status' />
                        )}
                     </div>
                  </span>
               );
            } else {
               return (
                  <span className={styles.calenderDate} key={index}>
                     <small>{day}</small>
                  </span>
               );
            }
         })}
      </div>
   );
}

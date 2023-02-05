import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeStatus } from "../actions";
import styles from "../styles/weekview.module.css";

export default function Day (props) {
   const { statusList, habitIndex, index, day, record } = props;
   const [editing, setEditing] = useState(false);
   const [status, setStatus] = useState(statusList[index] || 'none');
   const dispatch = useDispatch();

   // Function for dispatching status-change
   const handleStatusChange = (target, index) => {
      if (target.value !== "select") {
         setEditing(false);
         setStatus(target.value);
         if(record){
            dispatch(changeStatus(habitIndex, index, target.value));
         }
      }
   };

   return (
      <span className={styles.calenderDate}>
         <small className={index === 0 && styles.today}>{day}</small>
         {editing ? (
            <select
               onChange={({ target }) => {
                  handleStatusChange(target, index);
               }}
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
            {status === "done" && (
               <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828643.png"
                  alt="status"
               />
            )}

            {status === "notDone" && (
               <img
                  src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
                  alt="status"
               />
            )}
         </div>
      </span>
   );
}

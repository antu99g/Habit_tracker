// Action types
export const ADD_HABIT = "ADD_HABIT";
export const TODAY_STATUS = "TODAY_STATUS";
export const UPDATE_STATUS = "UPDATE_STATUS";
export const CHANGE_DATE = "CHANGE_DATE";

// Action creators

// Action for adding new habit
export function addNewHabit(habit) {
   return {
      type: ADD_HABIT,
      habit,
   };
}

// Action for adding 'none' status to each habit when date changes
export function addTodayStatus(habits) {
   return {
      type: TODAY_STATUS,
      habits,
   };
}

// Action for changing status of a habit
export function changeStatus (habitIndex, statusIndex, newStatus) {
   return {
      type: UPDATE_STATUS,
      habitIndex,
      statusIndex,
      newStatus,
   };
}

// Action for changing current date
export function changeDate (date) {
   return {
      type: CHANGE_DATE,
      date
   };
}
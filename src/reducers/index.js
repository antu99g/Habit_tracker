import { ADD_HABIT, TODAY_STATUS, UPDATE_STATUS, CHANGE_DATE } from "../actions";

const initialState = {
   habits: [],  // List of all habits
   updatedOn: '',  // Current date
};


// Reducer
export default function habit(state = initialState, action) {
   switch (action.type) {
      case ADD_HABIT:   // Reducer for adding new habit
         return {
            ...state,
            habits: [action.habit, ...state.habits],
         };

      case TODAY_STATUS:   // Reducer for for adding 'none' status to each habit when date changes
         return {
            ...state,
            habits: [action.habits],
         };

      case UPDATE_STATUS:  // Reducer for changing status of a habit
      
         const clone = JSON.parse(JSON.stringify(state.habits));
         const newHabits = clone.map((habit, currentIndex) => {
            if (currentIndex === action.habitIndex) {
               habit.statusList.splice(action.statusIndex, 1, action.newStatus);
            }
            return habit;
         });
         return {
            ...state,
            habits: newHabits,
         };

      case CHANGE_DATE:   // Reducer for changing current date
         return {
            ...state,
            updatedOn: action.date,
         };

      default:
         return state;
   }
}
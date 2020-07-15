export const initialState = [
  {
    task: "Organize Garage",
    completed: false,
    id: 1528817077286,
  },
  {
    task: "Bake Cookies",
    completed: false,
    id: 1528817084358,
  },
];

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state, {
        task: action.payload,
        completed: false,
        id: new Date()
      }];
    case "REMOVE_TASK":
      return state.filter(task => !task.completed)
    case "TOGGLE_TASK":
      return state.map((item) => {
          if (item.id === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          } 
            return item;
        })
    default:
      return state;
  }
};



// Action value
const ADD_TODO = "todos/ADD_TODO";
const DELETE_TODO = "todos/DELETE_TODO";

// Action Creator
// *action creator마다 payload 콘솔 찍으면 다 다른 값이 출력됨

// Todo를 추가하는 action creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

// Todo를 삭제하는 action creator
export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};


// 초기값
const initialState = [
  { id: 1, title: "고양이", body: "저는 고양이입니다.", isDone: false },
  { id: 2, title: "세령이", body: "어떤가요 제가 잘 만들었나요", isDone: false },
  { id: 3, title: "짱구", body: "울라울라..", isDone: false },
];

// Reducer: todos
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = [...state, action.payload];
      return newTodo;

    case DELETE_TODO:
      const remainedTodo = state.filter((todo) => todo.id !== action.payload);
      return remainedTodo;
  
    default:
      return state;
  }
};

// 모듈에서 reducer를 export default
export default todos;
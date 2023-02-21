import React from "react";
import styled from "styled-components";

import { useSelector } from "react-redux"; //useSelector 훅 임포트, state값을 조회한다
import { useDispatch } from "react-redux"; //useDispatch 훅 임포트, 액션명령을 주고 받는다
import { updateTodo, deleteTodo } from "../redux/modules/todos"; // 액션객체 임포트
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 useNavigate훅 임포트

function List() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todoStore = useSelector((state) => state.todos); //store 연결확인

  // dispatch로 명령 전달
  const onDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  const onToggle = (id) => {
    dispatch(updateTodo(id));
  };

  return (
    <StListContainer>

      <h1>TEXT MESSAGE</h1>

      <StListBox>
        {todoStore.map((todo) => {
          if (todo.isDone === false) {
            return (
              <StTodoBox key={todo.id}>
                
                <h2>{todo.title}</h2>
                <p>{todo.body}</p>

                <StBtnBox>
                  <StBtn onClick={() => onDelete(todo.id)}>삭 제</StBtn>
                </StBtnBox>
                
              </StTodoBox>
            );
          } 
          else {
            return null;
          }
        })}
      </StListBox>

    </StListContainer>
  );
}

export default List;

const StListContainer = styled.div`
  padding: 25px;
  color: #ffa6b5;
`;

const StListBox = styled.div`
  box-sizing: border-box;
  display: flex;
  /* flex-item요소들을 가능한 영역 내에서 벗어나지 않고 여러 행으로 표현 */
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
`;
const StTodoBox = styled.div`
  width: 160px;
  height: 230px;
  border: solid 2px #1b1b1b;
  border-radius: 9px;
  // 배경색만 투명도 조절(만약 전체 투명도 조절하고 싶으면 opacity: 0.5;)
  background-color: #fc002a;
  background: url("https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcvGeIc%2Fbtr0dpMYMzq%2FcxPkbYdT6HFBRBWM1b9Ilk%2Fimg.png");
  color: white;
  font-size: 1.1rem;
  padding: 20px 25px 0px 25px;
`;

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
`;

const StBtn = styled.button`
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  width: 90px;
  height: 35px;
  cursor: pointer;

  font-size: 1rem;
  &:first-of-type {
    background-color: #0e0e0e;
    color: white;
    font-weight: bold;
    &:hover {
    background-color: #ff7c7c;  
    color: black;
    font-weight: bold;
  }
  }
`;
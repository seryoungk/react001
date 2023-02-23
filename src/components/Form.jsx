import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos"; //액션객체 임포트

function Form() {

  const dispatch = useDispatch();
  // dispatch 생성
  // 명령을 담아 dispatch로 올려보내려고 있는 것임.

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
  });
  // todo의 초기값을 이렇게 정해준다.
  // input을 통해 들어오는 변화값을 받는 state

  const nextId = useRef(4);
  // id값 주기

  // input의 onChange 이벤트 핸들러
  const onChange = (e) => {
    const { name, value } = e.target;
    // 입력이 들어온다면 그 입력이 들어온 곳이 title(제목)인지 body(내용)인지를 name에 넣고, 뭐라고 적혔는지를 value에 넣는다. 
    setTodo({ ...todo, [name]: value, id: nextId.current });
    // todo에 새 값을 부여해준다. 불변성을 유지하기 위해서, 
    // 원래 있던 todo들에다가, 제목인지 내용인지와 뭐라고 적혀있었는지를 저장하고, id는 nextId.current로 해준다.
  };
  

  // form의 onSubmit 이벤트 핸들러. 클릭하면 form에서 나온 변화(명령)를 dispatch에 담아서 올려보낸다!
  const onSubmit = (e) => {
    // 추가하기 버튼을 누를 시,
    e.preventDefault();
    nextId.current++; //submit 버튼을 누를 때 아이디 값을 하나씩 증가시킴
    // console.log(nextId)
    //dispatch에 액션을 담아서 리듀서로 보낸다. 여기서 보낸 값이 액션객체의 payload에 들어감
    dispatch(addTodo({ ...todo }));
    setTodo({ id: 0, title: "", body: ""}); //이벤트(클릭)이 끝날 때 초기화-> input창을 빈칸으로 만들어 주는 역할!
  };

  return (
    
    <StForm onSubmit={onSubmit}> 
    {/* 추가하기 버튼을 누르면 onSubmit 함수를 실행해라 */}
      <StInputGroup>

        <StInput
          type="text"
          name="title"
          value={todo.title}
          //  useState의 객체todo의 title(키)를 value로 가져온다
          onChange={onChange}
          // 입력값에 변화가 생긴다면 onChange함수를 실행하라는 뜻
          placeholder="이름을 입력하세요"
          required
        />
        {/* 제목에 들어오는 내용은 text 타입, title이라는 이름을 가지고, todo의 title을 value로 만든다는 뜻 */}

        <StInput
          type="text"
          name="body"
          value={todo.body}
          // useState의 객체todo의 body(키)를 value로 가져온다 
          onChange={onChange}
          // 입력값에 변화가 생긴다면 onChange함수를 실행하라는 뜻
          placeholder="내용을 입력하세요"
          required
        />
        {/* 내용에 들어오는 내용은 text 타입, body라는 이름을 가지고, todo의 body를 value로 만든다는 뜻 */}
        
        <StButton>전송</StButton>

      </StInputGroup>
    </StForm>
  );
}

export default Form;



const StForm = styled.form`
 /* 백그라운드 사진이 있는 곳의 크기 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 300px;
  box-sizing: border-box;
  padding: 25px;
  background-color: #000000;
  background: url("https://img.wattpad.com/userbg/the-way-i-see-things.49589.jpg");
  opacity: 0.85;
`;

const StInputGroup = styled.div`
/* 핸드폰모양 */
  align-items: center;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
  padding: 23px 7px 15px 7px;
  height: 200px;
  /* background-color: rgb(255, 169, 169); */
  border-radius: 7px;
`;

const StButton = styled.button`
/* 전송 버튼 */
border: none;
  border-radius: 7px;
  background-color: white;
  width: 60px;
  height: 35px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  color: black;
  margin-left: 118px;
  margin-top:15px;
  /* 버튼에 마우스 올릴 때 반응 */
  &:hover {
    width: 60px;
    background-color: black;
    color: white;
  }
`;

const StInput = styled.input`
  /* 입력창 */
  box-sizing: border-box;
  border-radius: 7px;
  border: none;
  width: 180px;
  height: 35px;
  color: black;
  padding-left: 15px;
  /* 첫번째 요소에만 오른쪽 여백 */
  
  /* 두번째 요소의 크기만 증가 */
  &:nth-of-type(2) {
    height: 110px;
  }
`;
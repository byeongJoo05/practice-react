import React, { useState, useRef } from 'react'

export const InputSample_Ref = () => {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    })

    const nameInput = useRef();

    const {name , nickname} = inputs;

    const onChange = (e) => {
        const {value, name} = e.target; // 우선 e.target 에서 name 과 value 를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사한 후 
            [name]: value // name 키를 가진 값을 value 로 설정
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        });
        nameInput.current.focus();
    }

  return (
    <div>
        <input
            name="name"
            placeholder="이름"
            onChange={onChange}
            value={name}
            ref={nameInput}
        />
        <input
            name="nickname"
            placeholder='닉네임'
            onChange={onChange}
            value={nickname}
        />
        <button onClick={onReset}>초기화</button>
        <div>
            <b>값: </b>
            {name} ({nickname})
        </div>
    </div>
  )
}

export default InputSample_Ref;
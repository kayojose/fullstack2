import React from 'react';
import { InputBox } from "./styles";

type TInputText = {
  label: string,
  name: string,
  placeholder: string,
  type: string,
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  value: string
}

const InputText = ({ 
  label, 
  name, 
  placeholder, 
  type,
  handleOnChange, 
  value }: TInputText) => {


  return (
    <InputBox>
      <label htmlFor={name}>{label}</label>
      <input 
        type={type} 
        name={name} 
        id={name} 
        placeholder={placeholder} 
        onChange={handleOnChange}
        value={value}
      />
    </InputBox>
  )
}

export default InputText;
import styled from "styled-components";

const Input = styled.input`
    padding: 8px 12px;
    width: 500px;
    border: 1px solid #fff;
    border-radius: 10px;
    background: transparent;
    outline: none;
    font-size: 1rem;

    &::placeholder {
      color: #fff;
    }

    &[type="text"] {
      color: #fff;
    }
`

const Bio = styled.textarea`
  padding: 8px 12px;
  width: 700px;
  height: 150px;
  border: 1px solid #fff;
  border-radius: 10px;
  background: transparent;
  outline: none;
  font-size: 1rem;
  resize: none;

  &::placeholder {
    color: #fff;
  }

  &[type="text"] {
    color: #fff;
  }
`

export { Input, Bio };
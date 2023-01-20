import styled from "@emotion/styled";

export const InputStyle = styled.input`
  width: 100%;
  height: 40px;
  border: 1px solid #ddd;
  border-radius: 10px;
  font-size: 1.5rem;
  padding: 0px 20px;
  outline-color: #8da4d0;
  ::placeholder {
    color: #ccc;
    font-size: 1.5rem;
  }
`;

export default function LoginSignUpInput(props) {
  return (
    <>
      <InputStyle
        type={props.type}
        placeholder={props.placeholder}
        {...props.register}
      />
    </>
  );
}

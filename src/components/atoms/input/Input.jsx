import styled from "styled-components";

export const Input = (props) => {
  const { placeholder = "" } = props;

  return <SInput type="text" placeholder={placeholder} />;
};

const SInput = styled.input`
  padding: 8px 16px;
  border: solid #dddddd 1px;
  border-radius: 99999px;
  outline: none;
`;

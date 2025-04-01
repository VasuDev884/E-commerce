import styled from "styled-components";

export const FlexWrapper = styled.div`
  display: flex;
  justify-content: ${({ content }) => content || "center"};
  align-items: center;
`;
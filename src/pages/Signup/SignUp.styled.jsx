import styled from "styled-components";

export const SignUpData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  padding: 0 10px;
`;

export const BlackText = styled.p`
  color: var(--main-color);
  text-align: center;
  font-family: Lato;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.58;
`;
export const HaveAccountBlock = styled(BlackText)`
  margin-left: 40px;
  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

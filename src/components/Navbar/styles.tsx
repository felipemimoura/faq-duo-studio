import styled from "styled-components";
import { SignIn } from "../Buttons/SingInButton";

export const SignInButton = styled(SignIn)`
  @media (max-width: 950px) {
    display: none;
  }
`;

export const Container = styled.nav`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.8rem;

  .wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 1.6rem;
    padding: 1.4rem;
    border-bottom-right-radius: 2.4rem;
    background-color: var(--purple-100);
  }
`;

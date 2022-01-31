import styled, { css } from "styled-components";

interface ButtonProps {
  backgroundColor: string;
}
export const Button = styled.button<ButtonProps>`
  padding: 0.8rem;
  min-width: 24rem;

  border-radius: 2.8rem;

  height: 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;

  background: ${(props) => props.backgroundColor};
  color: var(--white);
`;

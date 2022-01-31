import styled from "styled-components";

interface ButtonProps {
  isOpen: boolean;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.2rem;
  padding: 0.8rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--purple-300);
  font-size: 3rem;
`;

export const Button = styled.button<ButtonProps>`
  transition: transform 0.25s linear;
  transform: ${(props) => (props.isOpen ? "rotateZ(180deg)" : "")};
`;

export const Answer = styled.div`
  font-size: 2rem;
  font-weight: 200;
  width: 80%;
`;

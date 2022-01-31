import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: 140rem;

  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 12.5%;

  h1 {
    color: var(--yellow-200);
    font-size: 3.2rem;
    font-weight: bold;
  }

  p {
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 2.4rem;

    a {
      color: var(--purple-300);
      font-weight: bold;
    }
  }
`;

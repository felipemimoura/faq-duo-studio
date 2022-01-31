import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  position: relative;

  .content {
    position: absolute;
    top: 50%;

    width: 20%;
    margin-left: 16rem;

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

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
  }
`;

export const Navbar = styled.nav`
  position: absolute;
  top: 0;
  width: 100%;

  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .container {
    width: 80rem;
    background-color: var(--purple-100);
    border-bottom-right-radius: 2.4rem;

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 1.4rem;

    .buttons {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.4rem;

      > button:first-child {
        margin-left: 24rem;
      }
    }
  }
  .signButton {
    top: 0;
    position: absolute;
    right: 10rem;
  }
`;

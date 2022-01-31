import { HTMLAttributes } from "react";
import LoginIcon from "../../../public/icons/area_restrita.png";
import EditIcon from "../../../public/icons/editar.png";
import ConsultorIcon from "../../../public/icons/seja_consultor.png";
import { Navbutton } from "../Buttons/Navbutton";
import * as Styled from "./styles";

export interface Navbarprops extends HTMLAttributes<HTMLDivElement> {}

export function Navbar({ ...rest }) {
  return (
    <Styled.Container {...rest}>
      <Styled.Content>
        <div className="wrapper">
          <Navbutton
            image={EditIcon}
            text="Seja um franqueado"
            backgroundColor="#E1A607"
          />
          <Navbutton
            image={ConsultorIcon}
            text="Seja um franqueado"
            backgroundColor="#7928B7"
          />
          <Navbutton text="Quero comprar" backgroundColor="#0FB3D3" />
        </div>

        <Styled.SignInButton
          text="Área restrita"
          Icon={LoginIcon}
          className="signButton"
        />
      </Styled.Content>
    </Styled.Container>
  );
}

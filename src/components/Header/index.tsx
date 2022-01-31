import Image from "next/image";
import LoginIcon from "../../../public/icons/area_restrita.png";
import EditIcon from "../../../public/icons/editar.png";
import ConsultorIcon from "../../../public/icons/seja_consultor.png";
import HeaderImage from "../../../public/images/header.png";
import { Navbutton } from "../Buttons/Navbutton";
import { SignIn } from "../Buttons/SingInButton";
import * as Styled from "./styles";

export function Header() {
  return (
    <Styled.Header>
      <Image
        src={HeaderImage}
        alt="Imagem de uma mulher asiática pensando"
        layout="responsive"
        objectFit="cover"
      />
      <Styled.Navbar>
        <div className="container">
          <div className="buttons">
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
        </div>
        <SignIn text="Área restrita" Icon={LoginIcon} className="signButton" />
      </Styled.Navbar>

      <div className="content">
        <h1>Dúvidas</h1>
        <p>
          <strong>Listamos aqui algumas dúvidas frequentes,</strong>
          <br></br>
          caso a sua dúvida não esteja aqui você pode entrar em contato{" "}
          <a href="#">clicanco aqui</a>
        </p>
      </div>
    </Styled.Header>
  );
}

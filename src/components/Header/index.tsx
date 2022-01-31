import Image from "next/image";
import HeaderImage from "../../../public/images/header.png";
import { Faq } from "../Faq";
import * as Styled from "./styles";

export function Header() {
  return (
    <Styled.Header>
      <Image
        src={HeaderImage}
        alt="Imagem de uma mulher asiática pensando"
        layout="responsive"
      />
      <Styled.NavbarCustom />
      <Faq />
    </Styled.Header>
  );
}

import Image from "next/image";
import * as Styled from "./styles";

interface NavbuttonProps {
  text: string;
  backgroundColor: string;
  image?: StaticImageData;
}

export function Navbutton({ text, backgroundColor, image }: NavbuttonProps) {
  return (
    <Styled.Button backgroundColor={backgroundColor}>
      {image && (
        <Image src={image} alt="Icone de editar" width={16} height={16} />
      )}
      {text}
    </Styled.Button>
  );
}

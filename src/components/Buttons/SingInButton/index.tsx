import * as Styled from "./styles";

import Image from "next/image";
import { ButtonHTMLAttributes } from "react";

interface SignInProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  Icon: StaticImageData;
}
export function SignIn({ text, Icon, ...rest }: SignInProps) {
  return (
    <Styled.SignButton {...rest} type="button">
      <Image
        src={Icon}
        alt="Icone de um cadeado mostrando que o acesso é restrito"
        width={14}
        height={16}
      />
      {text}
    </Styled.SignButton>
  );
}

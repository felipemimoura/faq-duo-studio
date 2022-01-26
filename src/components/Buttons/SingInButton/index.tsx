import * as Styled from "./styles";

import Image from "next/image";

interface SignInProps {
  text: string;
  Icon: StaticImageData;
}
export function SignIn({ text, Icon }: SignInProps) {
  return (
    <Styled.SignButton type="button">
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

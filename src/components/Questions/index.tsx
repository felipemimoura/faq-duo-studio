import Image from "next/image";
import { useState } from "react";
import Arrow from "../../../public/icons/seta.png";
import * as Styled from "./styles";

interface QuestionsProps {
  title: string;
  description: string;
}

export function Questions({ title, description }: QuestionsProps) {
  const [openAnswer, setOpenAnswer] = useState(false);
  function handleOpenAnswer() {
    setOpenAnswer((state) => !state);
  }

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Title>{title}</Styled.Title>

        <Styled.Button
          type="button"
          onClick={handleOpenAnswer}
          isOpen={openAnswer}
        >
          <Image
            src={Arrow}
            alt="Seta para abrir o menu"
            width={30}
            height={17}
          />
        </Styled.Button>
      </Styled.Content>

      {openAnswer && <Styled.Answer>{description}</Styled.Answer>}
    </Styled.Container>
  );
}

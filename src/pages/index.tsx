import axios from "axios";
import type { GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Questions } from "../components/Questions";

type List = {
  id: number;
  titulo: string;
  descricao: string;
};
type HomeData = {
  data: List[];
};

const Home = ({ data }: HomeData) => {
  const [questions, setQuestions] = useState<List[]>([]);
  console.log(data);

  useEffect(() => {
    setQuestions(data);
  }, [data]);
  return (
    <>
      {questions &&
        questions.map((question) => (
          <Questions
            key={question.id}
            title={question.titulo}
            description={question.descricao}
          />
        ))}
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get("http://localhost:3000/api");
  console.log(data);

  return {
    props: {
      data,
    },
    revalidate: 60 * 60 * 24,
  };
};

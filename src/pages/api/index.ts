// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type List = {
  id: number;
  titulo: string;
  descricao: string;
};
type Data = {
  lista_tarefas: List[];
};

export default (request: NextApiRequest, response: NextApiResponse) => {
  const lista = [
    {
      id: 1,
      titulo: "O catálogo é grátis?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 2,
      titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 3,
      titulo: "Como funciona o pagamento dos produtos?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 4,
      titulo: "O PagOk é seguro?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 5,
      titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 6,
      titulo: "Como funciona o pagamento dos produtos?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 7,
      titulo: "O PagOk é seguro?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 8,
      titulo: "Tenho que pagar alguma taxa para ser consultor(a)?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 9,
      titulo: "Como funciona o pagamento dos produtos?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
    {
      id: 10,
      titulo: "O PagOk é seguro?",
      descricao:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a ligula risus. Quisque sagittis nunc ut diam sagittis tempor. Etiam mollis, felis a consectetur volutpat,",
    },
  ];
  return response.json(lista);
};

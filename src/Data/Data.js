const data = [
  {
    produtos: [
      {
        name: "Pote de Mel",
        id: 1,
        value: 50,
        quantity: 200,
      },
      {
        name: "Própolis",
        id: 2,
        value: 20,
        quantity: 100,
      },
      {
        name: "Shampoo de Mel",
        id: 3,
        value: 30,
        quantity: 80,
      },
      {
        name: "Condicionador de Mel",
        id: 4,
        value: 30,
        quantity: 20,
      },
    ],
  },
  {
    vendas: [
      {
        name: "Ricardo Gusi",
        data: "26/08/2020",
        total: 150.0,
        produtos: {
          name: "Pote de mel",
          value: 50,
          quantity: 3,
        },
      },
      {
        name: "Fernando Oliveira",
        data: "26/08/2020",
        total: 180.0,
        produtos: {
          name: "Shampoo de mel",
          value: 30,
          quantity: 6,
        },
      },
      {
        name: "Talita Arboleya",
        data: "27/08/2020",
        total: 100.0,
        produtos: {
          name: "Própolis",
          value: 20,
          quantity: 5,
        },
      },
      {
        name: "Rafael Tobaru",
        data: "28/08/2020",
        total: 60,
        produtos: {
          name: "Condicionador de Mel",
          value: 30,
          quantity: 2,
        },
      },
      {
        name: "Sueli Gusi",
        data: "28/08/2020",
        total: 180,
        produtos: {
          name: "Condicionador de Mel",
          value: 30,
          quantity: 6,
        },
      },
    ],
  },
];

export default data;

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStyle } from "./styles/global";

import { createServer, Model } from "miragejs";

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 6000,
          createdAt: new Date("2021-02-12 09:00:00"),
        },
        {
          id: 2,
          title: "Aluguel",
          type: "withdraw",
          category: "Casa",
          amount: 1200,
          createdAt: new Date("2021-02-15 11:00:00"),
        },
        {
          id: 3,
          title: "Freelance de website",
          type: "deposit",
          category: "Dev",
          amount: 600,
          createdAt: new Date("2021-06-20 04:45:58"),
        },
        {
          id: 4,
          title: "Curso",
          type: "withdraw",
          category: "Estudo",
          amount: 4200,
          createdAt: new Date("2022-06-15 11:00:00"),
        },
      ],
    });
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });
    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);

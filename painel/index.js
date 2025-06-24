
import React from "react";
import { createRoot } from "react-dom/client";

function Painel() {
  return React.createElement("h1", null, "Painel OrçaFácil carregado com sucesso!");
}

createRoot(document.getElementById("root")).render(React.createElement(Painel));

import React from "react";
import OportunityHome from "../shared/OportunityHome/OportunityHome";
import SalesHome from "../shared/SalesHome/SalesHome";
import AlquilerHome from "../shared/AlquilerHome/AlquilerHome";

const ContainerCardsMain = () => {
  return (
    <section className="pt-8 bg-bg-slate-100">
      <OportunityHome />
      <SalesHome />
      <AlquilerHome />
    </section>
  );
};

export default ContainerCardsMain;

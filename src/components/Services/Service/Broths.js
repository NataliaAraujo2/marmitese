import React from "react";
import desserts from "../../../images/Desserts/sobremesas2.png";
import broths from "../../../images/Broths/caldos.jpg";
import Service from "./Service";

const Broths = () => {
  return (
    <div>
      <Service
        data={[
          { id: "1", image: broths },
          { id: "2", image: desserts },
          { id: "3", image: broths },
          { id: "4", image: desserts },
          { id: "7", image: broths },
          { id: "8", image: desserts },
          { id: "9", image: broths },
          { id: "10", image: desserts },
        ]}
        title="Caldos e Sopas"
        subtitle="É com grande satisfação que introduzimos a vocês o nosso serviço de Caldos e Sopas Especiais, uma experiência gastronômica que combina sabor, nutrição e o prazer acolhedor de um prato quente. Seja em um dia frio que pede algo reconfortante ou como uma opção saudável para variar o seu cardápio, estamos aqui para levar até você uma seleção cuidadosamente preparada de sabores excepcionais."
        section1Title="O Que Nos Torna Especiais"
        section1={
          <ol>
            <li>
              <b>Variedade Deliciosa:</b> Dos clássicos aos mais ousados,
              oferecemos uma gama diversificada de caldos e sopas, cada um com
              uma personalidade única.
            </li>
            <li>
              <b>Ingredientes Frescos: </b> Utilizamos ingredientes frescos e
              sazonais para garantir o sabor autêntico e a qualidade nutricional
              em cada colherada.
            </li>
          </ol>
        }
        section2Title="Motivos para Experimentar o Nosso Serviço"
        section2={
          <ol>
            <li>
              <b>Sabor Incomparável: </b> Nossas receitas são criadas por chefs
              experientes, resultando em caldos e sopas que não apenas
              alimentam, mas também encantam o paladar.
            </li>
            <li>
              <b>Conforto Instantâneo: </b> A experiência de degustar um prato
              quente e saboroso é como um abraço para o estômago, proporcionando
              conforto em cada colherada.
            </li>
            <li>
              <b>Entrega Conveniente: </b> Comodidade é primordial. Entregamos
              diretamente na sua porta para que você possa desfrutar sem sair de
              casa.
            </li>
            <li>
              <b>Compromisso com a Saúde: </b> Oferecemos opções saudáveis e
              equilibradas, proporcionando a você uma refeição nutritiva sem
              sacrificar o sabor.
            </li>
          </ol>
        }
      />
    </div>
  );
};

export default Broths;

import React from "react";
import desserts from "../../../images/Desserts/sobremesas2.png";
import pocket from "../../../images/Pockets/marmita2.jpg";
import Service from "./Service";

const Desserts = () => {
  return (
    <Service
      data={[
        { id: "1", image: pocket },
        { id: "2", image: desserts },
        { id: "3", image: pocket },
        { id: "4", image: desserts },
        { id: "7", image: pocket },
        { id: "8", image: desserts },
        { id: "9", image: pocket },
        { id: "10", image: desserts },
      ]}
      title="Sobremesas"
      subtitle="Seja para satisfazer os desejos após uma refeição, para impressionar convidados em um evento especial ou para presentear alguém querido, nossas Sobremesas Irresistíveis estão prontas para encantar. É com grande entusiasmo que apresentamos a vocês o nosso serviço de Sobremesas Irresistíveis, uma experiência que transformará cada refeição em um momento de celebração. Nossas criações cuidadosamente elaboradas não são apenas doces, são pequenas obras de arte culinárias que encantam os olhos e satisfazem os desejos mais exigentes."
      section1Title="O Que Tornará as Nossas Sobremesas Inesquecíveis"
      section1={
        <ol>
          <li>
            <b>Variedade Excepcional:</b> Nossa abordagem equilibrada oferece
            uma ampla gama de opções, desde as receitas tradicionais que evocam
            memórias até criações inovadoras low carb e fit, garantindo que cada
            cliente encontre sua combinação perfeita.
          </li>
          <li>
            <b>Ingredientes Premium: </b>Selecionamos cuidadosamente os
            ingredientes frescos e nutritivos para cada prato. Utilizamos
            produtos naturais e orgânicos sempre que possível, priorizando a
            qualidade e o sabor em cada garfada.
          </li>
          <li>
            <b>Apresentação Sofisticada:</b> Acreditamos que comida saudável não
            precisa ser monótona. Nossos chefs talentosos estão sempre
            explorando novos sabores e técnicas culinárias para criar pratos que
            deleitam o paladar e nutrem o corpo.
          </li>
        </ol>
      }
      section2Title="Motivos para Experimentar o Nosso Serviço"
      section2={
        <ol>
          <li>
            <b> Paixão pela Doçura: </b> Nossa equipe de confeiteiros
            apaixonados se dedica a transformar os ingredientes em sobremesas
            que trazem alegria e satisfação.
          </li>
          <li>
            <b>Celebração Instantânea: </b>Cada sobremesa é uma celebração em si
            mesma, perfeita para marcar momentos especiais ou simplesmente para
            adicionar alegria ao seu dia.
          </li>
          <li>
            <b>Entrega Conveniente: </b> Levamos a doçura até você. Desfrute das
            nossas sobremesas no conforto da sua casa, escritório ou evento.
          </li>
          <li>
            <b>Compromisso com a Qualidade: </b> Nosso compromisso é fornecer
            sobremesas de excelência, garantindo que cada mordida seja uma
            experiência memorável.
          </li>
        </ol>
      }
    />
  );
};

export default Desserts;

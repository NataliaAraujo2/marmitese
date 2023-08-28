import React from "react";
import desserts from "../../../images/Desserts/sobremesas2.png";
import coffee from "../../../images/Coffee/coffe-break.png";
import Service from "./Service";

const Coffee = () => {
  return (
    <Service
      data={[
        { id: "1", image: coffee },
        { id: "2", image: desserts },
        { id: "3", image: coffee },
        { id: "4", image: desserts },
        { id: "7", image: coffee },
        { id: "8", image: desserts },
        { id: "9", image: coffee },
        { id: "10", image: desserts },
      ]}
      title="Coffee-Break"
      subtitle="É com prazer que apresentamos a vocês o nosso serviço de Coffee Break Empresarial, projetado para transformar as suas reuniões e eventos corporativos em momentos verdadeiramente especiais. Sabemos que cada detalhe importa quando se trata de impressionar clientes, colaboradores e parceiros, e é por isso que estamos empenhados em oferecer uma experiência que vai além das expectativas."
      section1Title="O Que Você Pode Esperar:"
      section1={
        <ol>
          <li>
            <b>Variedade Excepcional:</b> Nossa seleção de alimentos e bebidas é
            pensada para agradar a todos os paladares, com opções desde pães
            frescos a aperitivos gourmet.
          </li>
          <li>
            <b>Bebidas: </b>Oferecemos uma gama de cafés e chás, preparados por
            baristas experientes para garantir uma experiência de degustação
            memorável.
          </li>
          <li>
            <b>Toque de Sofisticação:</b> Nossas sobremesas e doces são
            preparados com maestria, adicionando um toque de elegância ao seu
            evento.
          </li>
          <li>
            <b>Opções Saudáveis: </b> Reconhecemos a importância de opções
            saudáveis, e por isso incluímos alternativas nutritivas que atendem
            a diferentes preferências alimentares.
          </li>
        </ol>
      }
      section2Title="Razões para Optar pelo Nosso Serviço:"
      section2={
        <ol>
          <li>
            <b>Atendimento Personalizado:</b> Adaptamos nossos menus de acordo com as suas necessidades e preferências específicas, garantindo uma experiência totalmente personalizada.
          </li>
          <li>
            <b>Eficiência e Pontualidade: </b>Sabemos que o tempo é valioso. Nossa equipe experiente garante a entrega pontual e a configuração organizada, sem interrupções.
          </li>
          <li>
            <b>Qualidade Garantida: </b> Utilizamos ingredientes frescos e de alta qualidade, priorizando sabores excepcionais e apresentações impecáveis.
          </li>
          <li>
            <b>Profissionalismo: </b> Fornecemos serviços para empresas, compreendemos as nuances de eventos corporativos e nos esforçamos para superar as expectativas.
          </li>
          <li>
            <b>Sustentabilidade: </b>  Estamos comprometidos com práticas sustentáveis, utilizando embalagens eco-friendly e apoiando produtos locais sempre que possível.
          </li>
        </ol>
      }
    />
  );
};

export default Coffee;

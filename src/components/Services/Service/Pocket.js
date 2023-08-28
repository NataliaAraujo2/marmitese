import React from "react";
import Service from "./Service";
//images
import pocket from "../../../images/Pockets/marmita2.jpg";
import pocket1 from "../../../images/Pockets/carne.jpg";
import pocket2 from "../../../images/Pockets/carnecomabobrinha.jpg";
import pocket3 from "../../../images/Pockets/dadinho.jpg";
import pocket4 from "../../../images/Pockets/torta.jpg";
const Pocket = () => {
  return (
    <div>
      <Service
        data={[
          { id: "1", image: pocket },
          { id: "2", image: pocket1 },
          { id: "3", image: pocket2 },
          { id: "4", image: pocket3 },
          { id: "7", image: pocket4 },
          { id: "8", image: pocket },
          { id: "9", image: pocket1 },
          { id: "10", image: pocket2 },
        ]}
        title="Marmitas"
        subtitle="Na Marmite-se, estamos empenhados em redefinir a experiência da alimentação saudável e saborosa. 
      Somos apaixonados por nutrição e bem-estar, e nossa missão é proporcionar refeições que combinem perfeitamente o 
      sabor reconfortante das tradicionais com a leveza e os benefícios das opções low carb e fit. "
        section1Title="O Que Nos Torna Especiais"
        section1={
          <ol>
            <li>
              <b>Variedade Sem Compromisso:</b> Nossa abordagem equilibrada
              oferece uma ampla gama de opções, desde as receitas tradicionais
              que evocam memórias até criações inovadoras low carb e fit,
              garantindo que cada cliente encontre sua combinação perfeita.
            </li>
            <li>
              <b>Ingredientes de Qualidade: </b>Selecionamos cuidadosamente os
              ingredientes frescos e nutritivos para cada prato. Utilizamos
              produtos naturais e orgânicos sempre que possível, priorizando a
              qualidade e o sabor em cada garfada.
            </li>
            <li>
              <b>Sabor que Surpreende:</b> Acreditamos que comida saudável não
              precisa ser monótona. Nossos chefs talentosos estão sempre
              explorando novos sabores e técnicas culinárias para criar pratos
              que deleitam o paladar e nutrem o corpo.
            </li>
            <li>
              <b>Apoio à Saúde:</b> Sabemos que cada pessoa tem necessidades
              diferentes, e é por isso que trabalhamos em estreita colaboração
              com nutricionistas para garantir que nossas refeições se alinhem
              com metas de saúde e condicionamento físico.
            </li>
            <li>
              <b>Conveniência Valorizada:</b> Entendemos a agitação do dia a dia
              e a importância de uma alimentação rápida e saudável. Com a
              Marmite-se, você não precisa sacrificar sua saúde por
              conveniência. Entregamos diretamente à sua porta, proporcionando
              uma solução prática e nutritiva
            </li>
            <li>
              <b>Satisfação do Cliente em Primeiro Lugar:</b> Seu prazer e
              bem-estar são nossa principal prioridade. Estamos comprometidos em
              oferecer um atendimento excepcional e garantir que cada refeição
              exceda suas expectativas.
            </li>
          </ol>
        }
        section2Title="Nossas Linhas de Produtos"
        section2={
          <ol>
            <li>
              <b>Tradições Revisitadas:</b> Nossa abordagem equilibrada oferece
              uma ampla gama de opções, desde as receitas tradicionais que
              evocam memórias até criações inovadoras low carb e fit, garantindo
              que cada cliente encontre sua combinação perfeita.
            </li>
            <li>
              <b>Low Carb, Alto Sabor: </b>Selecionamos cuidadosamente os
              ingredientes frescos e nutritivos para cada prato. Utilizamos
              produtos naturais e orgânicos sempre que possível, priorizando a
              qualidade e o sabor em cada garfada.
            </li>
            <li>
              <b>Fit e Energizante:</b> Acreditamos que comida saudável não
              precisa ser monótona. Nossos chefs talentosos estão sempre
              explorando novos sabores e técnicas culinárias para criar pratos
              que deleitam o paladar e nutrem o corpo.
            </li>
          </ol>
        }
      />
    </div>
  );
};

export default Pocket;

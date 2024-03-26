import React from "react";
import { NoticiaIndividual } from "@/components/templates/NoticiaIndividual";

export default async function Noticia() {
  const NoticiaProps = {
    id: 1,
    type: "Cultura",
    title: "Curitiba/PR é a cidade mais inteligente para PCD do mundo!",
    paragraph:
      "Curitiba/PR foi coroada como a cidade mais inteligente do mundo pelo World Smart City Award e reconhecida internacionalmente, demonstrando suas capacidades em inovação e tecnologia. Entre os dias 20 e 22 de março, Curitiba/SP terá mais uma vez a honra de ser o palco da SmartCity Expo Curitiba 2024.",
    date: "14 março 2024",
    hour: "11h04",
    image: "/temp/todas-noticias/IMAGE-1.png",
    resume: "A acessibilidade é essencial para o avanço de uma cidade!",
    content:
      "Curitiba/PR foi coroada como a cidade mais inteligente do mundo pelo World Smart City Award e reconhecida internacionalmente, demonstrando suas capacidades em inovação e tecnologia. Entre os dias 20 e 22 de março, Curitiba/SP terá mais uma vez a honra de ser o palco da SmartCity Expo Curitiba 2024. O evento reunirá especialistas, empresas e governos para discutir e apresentar soluções, que têm por objetivo tornar as cidades mais sustentáveis, eficientes e habitáveis. \n Uma cidade não pode ser considerada inteligente se ela não for acessível, por este motivo o próprio evento fez parceria com várias empresas da área de diversidade e inclusão, entre elas a empresa Sister, que será lançada oficialmente durante o evento, seguindo a trilha de inclusão e acessibilidade da sua empresa-mãe, a Broder. Esta organização pioneira, a Sister, tem a missão de promover o voluntariado empresarial, conectando empresas de todos os tamanhos e segmentos, com organizações de serviço voluntário. É possível organizar tudo de forma mais eficiente, não desperdiçando o tempo de nenhuma das partes e dando às empresas um selo humanitário por seus serviços à sociedade. \n A integração entre as duas entidades oferece várias vantagens: o sistema de organização da Sister será empregado para otimizar o fluxo dos voluntários, juntamente com uma avaliação de acessibilidade no evento, para garantir uma experiência adequada para todos os participantes. Além disso, será promovida uma atividade denominada “Troca de Sapatos”, que incluirá diversas dinâmicas para sensibilizar os participantes sobre as experiências de pessoas com deficiência e neurodivergentes. \n Por exemplo, atividades como o uso de bicicletas duplas, em que uma pessoa guia enquanto a outra pedala vendada, ou a utilização de realidade virtual para simular a experiência de ser uma criança autista em um shopping lotado. \n Com a parceria estabelecida, as centenas de empresas líderes em soluções tecnológicas urbanas que estarão presentes em Curitiba/PR, terão a oportunidade única de explorar novas abordagens para contribuir significativamente para a sociedade. Através de workshops e painéis conduzidos por especialistas, serão abordados temas como a integração do voluntariado empresarial nas políticas de responsabilidade social das empresas, destacando a importância do capital humano e social no contexto do desenvolvimento de cidades inteligentes. \n Saiba mais no link: https://sistervol.com/",
  };

  return (
    <section>
      <NoticiaIndividual
        type={NoticiaProps.type}
        title={NoticiaProps.title}
        paragraph={NoticiaProps.paragraph}
        date={NoticiaProps.date}
        hour={NoticiaProps.hour}
        image={NoticiaProps.image}
        resume={NoticiaProps.resume}
        content={NoticiaProps.content}
      />
    </section>
  );
}

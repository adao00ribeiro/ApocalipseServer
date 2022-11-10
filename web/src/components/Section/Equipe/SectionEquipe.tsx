
import { CardEquipe } from "../../CardEquipe/CardEquipe";
import styles from "./styles.module.scss";


export function SectionEquipe() {
  return (

    <>
      <section id="equipe"  >
        <div className={styles.divEquipe}>
          <h1 >Equipe</h1>
          <div className={styles.grid}>
            <CardEquipe
              id={"0"}
              url={"/DAVID.jpeg"}
              nome={"David Robson"}
              funcao={"Líder de equipe"}
            />
            <CardEquipe
              id={"1"}
              url={"/Henri.jpg"}
              nome={"Henrique"}
              funcao={"Vice Líder de equipe"}
            />
            <CardEquipe
              id={"2"}
              url={"/Henri figueiredo.jpg"}
              nome={"Henrique Figueiredo"}
              funcao={"Programador"}
            />
            <CardEquipe
              id={"3"}
              url={"/adao.jpg"}
              nome={"Adão Ribeiro"}
              funcao={"Programador"}
            />
            <CardEquipe
              id={"4"}
              url={"/yasminreis.jpg"}
              nome={"Yasmin Reis"}
              funcao={"Dubladora"}
            />
            <CardEquipe
              id={"5"}
              url={"/th.jpg"}
              nome={"Th"}
              funcao={"Programador"}
            />
            <CardEquipe
              id={"6"}
              url={"/sergioluiz.jpg"}
              nome={"Sergio Luiz"}
              funcao={"Modelador"}
            />
            <CardEquipe
              id={"7"}
              url={"/pedroluiz.jpg"}
              nome={"Perdro Luiz"}
              funcao={"Designer"}
            />
            <CardEquipe
              id={"8"}
              url={"/lucas.jpg"}
              nome={"Lucas Wellington"}
              funcao={"Animador"}
            />


          </div>
        </div>
      </section>
    </>
  )
}
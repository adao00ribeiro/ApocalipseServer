
import { CardEquipe } from "../../CardEquipe/CardEquipe";
import styles from "./styles.module.scss";


export function SectionEquipe(){
    return(

        <>
        <section >
          <div className={styles.divSection}>
            <h1 >Equipe</h1>
            <div className={styles.grid}>
              <CardEquipe />
              <CardEquipe />
              <CardEquipe />
              <CardEquipe /> 
              <CardEquipe />

            </div>
          </div>
        </section>
        </>
    )
}
import { CardProject } from "../../CardProject/CardProject";
import styles from "./styles.module.scss";


export function SectionProjetos(){
    return(

        <>
         <section  >
          <div className={styles.divProjeto}>
            <h1 >Projetos</h1>
            <div className={styles.grid}>
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
              <CardProject />
            </div>
          </div>
        </section>
        </>
    )
}
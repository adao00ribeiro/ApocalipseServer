import { CardProject } from "../../CardProject/CardProject";
import styles from "./styles.module.scss";


export function SectionProjetos() {
  return (
    <section id="projetos"  >
      <div className={styles.divProjeto}>
        <h1 >Projetos</h1>
        <div className={styles.grid}>

          <CardProject />


        </div>
      </div>
    </section>

  )
}
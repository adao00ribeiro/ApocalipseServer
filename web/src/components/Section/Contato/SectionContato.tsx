
import styles from "./styles.module.scss";


export function SectionContato() {
  return (
    <>
      <section id="contato">
        <div className={styles.divcontato}>
          <h1 >Contato</h1>
          <form className={styles.form}>
            <div className={styles.divinput} >
              <input className={styles.input} type="text" placeholder='Email'></input>
              <input className={styles.input} type="text" placeholder='Nome'></input>
            </div>
            <div >
              <textarea className={styles.input} placeholder='Mensagem'></textarea>
            </div>
            <button className={styles.buttonEnviar} type="submit">
              Enviar
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
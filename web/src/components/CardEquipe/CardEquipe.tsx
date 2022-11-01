import styles from "./styles.module.scss";
export function CardEquipe() {
    return (

        <div className={styles.Card}>
            <img src="https://overworld.qodeinteractive.com/wp-content/uploads/2019/10/rooster-img-2.jpg"></img>
            <div className={styles.CardInformacao}>
                <strong>Nome</strong>
                <span>Função</span>
            </div>
        </div>
    )
}
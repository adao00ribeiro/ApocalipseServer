import Image from "next/image";
import { ICardEquipe } from "../../interfaces/ICardEquipe";
import styles from "./styles.module.scss";

export function CardEquipe(props: ICardEquipe) {

    return (
        <div className={styles.Card}>
            <Image src={props.url} alt={""} fill />
            <div className={styles.CardInformacao}>
                <strong>{props.nome}</strong>
                <span className={styles.colorViceLider}>{props.funcao}</span>
            </div>
        </div>
    )
}


function test(funcao: string) {

    if (funcao == "Líder de equipe") {
        return styles.colorLider;
    }
    else if (funcao == "Vice Líder de equipe") {
        return styles.colorViceLider;
    }
    else if (funcao == "Modelador") {
        return styles.colormodelador;
    }
    else if (funcao == "Programador") {
        return styles.colorProgramador;
    }
    else if (funcao == "Dubladora") {
        return styles.colorDubladora;
    }
}
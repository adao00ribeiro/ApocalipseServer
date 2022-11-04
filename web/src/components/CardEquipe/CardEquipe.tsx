import Image from "next/image";
import { ICardEquipe } from "../../interfaces/ICardEquipe";
import styles from "./styles.module.scss";

export function CardEquipe(props: ICardEquipe) {
    const classfuncao = test(props.funcao);

    console.log(classfuncao);
    return (
        <div className={styles.Card}>

            <Image src={props.url} alt={""}></Image>
            <div className={styles.CardInformacao}>
                <strong>{props.nome}</strong>
                <span className={classfuncao}>{props.funcao}</span>
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
    else if (funcao == "modelador") {
        return styles.colormodelador;
    }
    else if (funcao == "Programador") {
        return styles.colorProgramador;
    }


}
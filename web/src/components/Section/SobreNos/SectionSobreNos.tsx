import styles from "./styles.module.scss";
import { SiBlender, SiUnity, SiUnrealengine } from 'react-icons/si';
export function SectionSobreNos() {
  return (

    <>
      <section id="sobrenos">
        <div className={styles.divsobrenos}>
          <h1>Sobre Nos</h1>
          <div className={styles.divinfo}>
            <strong>Desenvolvimento de jogos Indie para pessoa fisica ou empresas</strong>
            <strong>Nosso Objectivo é entregar o projeto na melhor qualidade possivel no menor tempo possivel</strong>
          </div>
          <div className={styles.ContainerProgram}>
            <div className={styles.divProgram}>
              <SiUnity color="#FFF" size={80} />
              <h2>Unity</h2>
              <p>O Unity 3D se apresenta como um Game Engine, ou motor de jogo, mas na realidade é muito mais do que isso.A ferramenta possui um estilo de programação e organização dos projetos todo especial, além de muito simples..</p>
            </div>
            <div className={styles.divProgram}>
              <SiBlender color="#FFF" size={80} />
              <h2>Blender</h2>
              <p>O Blender é uma ferramenta que permite a criação de vastos conteúdos de 3D.</p>
            </div>
            <div className={styles.divProgram}>
              <SiUnrealengine color="#FFF" size={80} />
              <h2>Unreal Engine</h2>
              <p>Unreal Engine é o nome de uma tecnologia criada pela produtora Epic Games para, basicamente, gerar gráficos de jogos eletrônicos. O nome técnico é “motor de jogo”, mas é possível entender seu funcionamento em detalhes, origens e onde é usado.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
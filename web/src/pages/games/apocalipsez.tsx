import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../../components/footer/footer'
import { Header } from '../../components/Header/Header'
import styles from '../../styles/apocalipse.module.scss'

export default function Apocalipsez() {
    return (
        <>
            <Head>
                <title>Apocalipse Z</title>
            </Head>
            <Header />

            <div className={styles.divImage}>
                <div></div>
                <Image src="/fundomenu.jpg" alt={''} fill={true} ></Image>
            </div>

            <div className={styles.divCentralized}>
                <div className={styles.divMain}>
                    <h1>Apocalipse Z</h1>
                </div>
                <section >
                    <div className={styles.DivDetalhes}>
                        <div className={styles.divDetalhesLeft}>

                            <p> O ApocalipseZ é um jogo de Múltiplos jogadores, se passa no século
                                21.</p>

                            <h5>Objetivo Principal</h5>
                            <p> Sobrevivência é a característica principal, para sobreviver a um Apocalipse Z o jogador
                                precisará suprir suas necessidades a qual será inevitável ter sede e fome tendo que se arriscar
                                em um mundo com vários zumbis, o jogador precisará procurar em lugares comerciais e
                                residenciais para achar suprimentos, procurar medicamentos para a saúde do personagem,
                                busca por armas de fogo, munições e armas brancas para combater aos outros jogadores que
                                querem o matar para roubar seus recursos de sobrevivente e combater mais facilmente os
                                zumbis para conseguir recursos com mais rapidez e eficiência, coletes e capacetes serão
                                essenciais para proteção contra os zumbis e contra os outros jogadores, conseguir cofres com
                                senhas os dará vantagem territorial para guardar seus itens, porém de forma bem limitada
                                mas que os dará a segurança de ter seus itens salvos enquanto estiver dentro do cofre, coletar
                                mochilas melhores para carregar mais itens e mais peso, os acessórios para as armas são uma
                                boa forma de melhorar seus equipamentos de combate para ter melhor proveito em situações
                                onde até os mínimos detalhes farão a diferença, explorar o mundo e correr seus riscos tendo
                                em mente que o incerto da sobrevivência é constante, procurar outros sobreviventes para
                                formar uma equipe e ter mais chance de sobrevivência e também ir a procura de outros
                                sobreviventes em uma caça para os matar e conseguir conquistar mais recursos facilmente e
                                por fim também evitar inimigos que possam oferecer com certeza riscos graves
                                comprometendo a sobrevivência por conta do despreparo e falta de recursos momentâneos.</p>
                            <p>The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word “and” and the Little Blind Text should turn around and return to its own, safe country.</p>

                            <div className={styles.divDetalhesImage}>
                                <Image src="/fundomenu.jpg" alt="" fill />
                            </div>

                            <h5>Gameplay</h5>
                            <p>Sobreviver é o objetivo base, se passa no século 21, FPS 1° Pessoa, Tiro, lutas com
                                armas brancas, online, mundo aberto, 3D, Sobrevivência,
                                monstros épicos, super Zumbi, boss e wold boss, gráficos "realistas", rpg em níveis e para
                                computadores. </p>
                            <p>(Com alterações de mapa, relevo, nas cidades, estruturas em cada temporada,
                                uma temporada a cada um ano e meio).</p>

                        </div>
                        <div className={styles.divDetalhesRight}>
                            <div className={styles.emDesenvolvimento}>
                                <span>Em Desenvolvimento</span>
                            </div>

                            <div className={styles.divDetalhesRightInfo}>
                                <h2>PLATFORMS</h2>
                                <p>U U U U U</p>
                            </div>

                        </div>
                    </div>
                </section>
            </div >
            <Footer />
        </>
    )
}

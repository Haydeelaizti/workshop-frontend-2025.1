import s from './inicio.module.scss'
import pokemon from '../../assets/pokemon.jpeg'

export default function Inicio(){
    return (
        <main>
         <section>
        <h1 className={s.boasVindas}>Seja bem-vindo ao Pokemon TCG!</h1>
       
            <p><b>Pokémon TCG</b>, ou <b>Pokémon Trading Card Game</b>, é um jogo de cartas colecionáveis baseado na franquia Pokémon. </p>
            <p>O jogo foi desenvolvido pela Creatures Inc. e publicado pela primeira vez em 1996.</p>
            <p>O Pokémon TCG está disponível em versão física e digital. A versão física requer a compra de cartas e pacotes temáticos. Já a versão digital é gratuita, mas com compras opcionais. Aqui vocês conseguem vizualizar algumas cartas disponíveis, basta clicar na opção acima <b>CARTAS</b>.</p>
        </section>
        <img src={pokemon} alt="" className={s.imagem}/>
        </main>
    )

}
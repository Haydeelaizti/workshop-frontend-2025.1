import s from './cartas.module.scss'
import axios from 'axios'
import {useState, useEffect} from 'react'


export default function Cartas(){

    const [info, setInfo] = useState([])

    const pegarDados = async () => {
        const dados = await axios.get('https://api.pokemontcg.io/v2/cards')
        setInfo(dados.data.data)
    }

    useEffect(()=>{
        pegarDados()
    },[])

    
    return (
        <main>
            <h1>CARTAS DISPONÍVEIS:</h1>
            <section>
                {
                    info.map((item)=>(
                        <article>
                            <h2>Nome: {item.name}</h2>
                            <h3>Tipo: {item.types}</h3>
                            <img src={item.images.large} alt="" />
                        </article>
                    ))
                }
            </section>
        </main>
    )
}
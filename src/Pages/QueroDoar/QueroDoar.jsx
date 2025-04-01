import s from './querodoar.module.scss'
import livro from '../../assets/simbolo_livro.png'
import axios from 'axios'
import { useState } from 'react';



const {titulo, setTitulo} = useState("")

const capturaTitulo = (e) => {
    setTitulo(e.target.value)
    }

const {categoria, setCategoria} = useState("")

const capturaCategoria = (e) => {
    setCategoria(e.target.value)
    }

const {autor, setAutor} = useState("")

const capturaAutor = (e) => {
    setAutor(e.target.value)
    }

    
const {url, setUrl} = useState("")

const capturaUrl = (e) => {
    setUrl(e.target.value)
        }
    
const enviarDados = async() => {
    const urlApi = ""
    const dadosEnviar = {
    titulo,
    categoria,
    autor,
    imagem_url
    }
    const envioApi = await axios.post(urlApi, dadosEnviar)

    alert('Livro Enviado')

    setTitulo("")
}

export default function QueroDoar(){

    return(
        <main className={s.main}>
        <section className={s.section1}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
        </section>
        <form action="" className={s.section2} onSubmit={(e)=> e.preventDefault()}>
        <section className={s.sectionimg}>
                <img src={livro} alt="" />
                <h1>Informações do Livro</h1>
        </section>
        <section className={s.section3}>
            <div>
                <input type="text" name='' id='' placeholder='Título' onChange={capturaTitulo} value={titulo} />
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Categoria' onChange={capturaCategoria} value={categoria}/>
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Autor' onChange={capturaAutor} value={autor}/>
            </div>
            <div>
                <input type="text" name='' id='' placeholder='Link da Imagem' onChange={capturaUrl} value={url}/>
            </div>
        </section>
        <section className={s.section4}>
            <button type='Submit' onClick={enviarDados}>Doar</button>
        </section>
        </form>
        </main>
    );

}
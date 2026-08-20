import tomateImg from '../assets/tomate.png';
import fogoImg from '../assets/fogo.png';
import queijoImg from '../assets/queijo.png';
import relampagoImg from '../assets/relampago.png'

const listaDiferenciais = [
    {
        id: 1,
        imagem: tomateImg,
        alt: "Tomate",
        texto: "algo vermelho"
    },
    {
        id: 2,
        imagem: fogoImg,
        alt: "fogo",
        texto: "pegando fogo"
    },
    {
        id: 3,
        imagem: queijoImg,
        alt: "quijo",
        texto: "o rato come"
    },
    {
        id: 4,
        imagem: relampagoImg,
        alt: "relampago",
        texto: "cabuuuummmmmmmmmmmm"
    }   
];

export default function Diferenciais(){
    return(
        <section className='diferenciais' id='diferenciais'>
            <h2> nossos diferenciais</h2>
            <div className='cards'>
                {listaDiferenciais.map((item) =>(
                    <div className="card" key={item.id}>
                        <img src={item.imagem} alt={item.alt} />
                        <p>{item.texto}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
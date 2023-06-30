import Perfil from './imagens/perfil.png'
import './AreaPerfil.css'

export default function AreaPerfil(){
    return(
        <div className='area_pf'>
                <div className='pf_image'>
                    <img src={Perfil} alt='perfil'/>
                </div>

                <div className='pf_texto'>
                    <span className='user'>theeux.sz</span>
                    <span className='nome'>Vinícius Matheus</span>
                </div>

                <div className='pf_botao'>
                    <span className='botao_mudar'>Mudar</span>
                </div>
            </div>
    )
}
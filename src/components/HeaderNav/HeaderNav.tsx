import logo from '../../imgs/playstation-icon.svg';
import keyboard from '../../imgs/keyboard.svg';
import pesquisar from '../../imgs/pesquisar.svg';

export const HeaderNav = () => {
    return (
        <nav className='flex'>
            <img src={logo} alt="" className='w-10' />
            <ul className='flex justify-center'>
                <li className='flex'><a href="#">Jogos</a> <img src={keyboard} alt="" className='w-2' /></li>

                <li className='flex'><a href="#">Hardware </a><img src={keyboard} alt="" className='w-2' /></li>

                <li className='flex'><a href="#">Serviços</a> <img src={keyboard} alt="" className='w-2' /></li>

                <li className='flex'><a href="#">Notícias</a><img src={keyboard} alt="" className='w-2' /></li>

                <li className='flex'><a href="#">Loja</a> <img src={keyboard} alt="" className='w-2' /></li>

                <li className='flex'><a href="#">Suporte</a> <img src={keyboard} alt="" className='w-2' /></li>
            </ul>
            <button className='bg-sky-600 text-white '>Iniciar sessão</button>
            <img src={pesquisar} alt="" className='w-10' />

        </nav>
    )
}
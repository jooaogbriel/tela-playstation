import logo from '../../imgs/playstation-icon.svg';
import keyboard from '../../imgs/keyboard.svg';
import pesquisar from '../../imgs/pesquisar.svg';

export const HeaderNav = () => {
    return (
        <nav className='flex justify-center items-center w-ful h-16'>
            <img src={logo} alt="" className='w-9 p-4.5 m-4'/>
            <ul className='flex justify-start w-full'>
                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Jogos</a> 
                    <img src={keyboard} alt="" className='w-2 h-6 ' />
                </li>

                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Hardware </a>
                    <img src={keyboard} alt="" className='w-2 h-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Serviços</a> 
                    <img src={keyboard} alt="" className='w-2 h-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Notícias</a
                    ><img src={keyboard} alt="" className='w-2 h-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Loja</a> 
                    <img src={keyboard} alt="" className='w-2 h-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5'>
                    <a className=' mr-1' href="#">Suporte</a> 
                    <img src={keyboard} alt="" className='w-2 h-6' />
                </li>
            </ul>
            <button className='bg-sky-700 text-white rounded-xl w-36  '>Iniciar sessão</button>
            <img src={pesquisar} alt="" className='w-6 m-6' />

        </nav>
    )
}
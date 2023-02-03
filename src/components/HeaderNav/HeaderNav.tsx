import logo from '../../imgs/playstation-icon.svg';
import keyboard from '../../imgs/keyboard.svg';
import pesquisar from '../../imgs/pesquisar.svg';

export const HeaderNav = () => {
    return (
        <nav className='flex justify-center items-center w-ful h-12'>
            <img src={logo} alt="" className='w-9 p-4.5 m-4 cursor-pointer'/>
            <ul className='flex justify-start w-full '>
                <li className='flex   flex-row p-1.5 hover:text-blue-500 justify-center'>
                    <a className=' mr-1 text-sm' href="#">Jogos</a> 
                    <img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5  hover:text-blue-500'>
                    <a className=' mr-1 text-sm ' href="#">Hardware </a>
                    <img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5  hover:text-blue-500'>
                    <a className=' mr-1 text-sm' href="#">Serviços</a> 
                    <img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5  hover:text-blue-500'>
                    <a className=' mr-1 text-sm' href="#">Notícias</a
                    ><img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5  hover:text-blue-500'>
                    <a className=' mr-1 text-sm' href="#">Loja</a> 
                    <img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>

                <li className='flex justify-center flex-row p-1.5  hover:text-blue-500'>
                    <a className=' mr-1 text-sm' href="#">Suporte</a> 
                    <img src={keyboard} alt="" className='w-2 h-6 cursor-pointer mr-6' />
                </li>
            </ul>
            <button className='bg-blue-600 text-white rounded-xl w-36 hover:bg-blue-900  '>Iniciar sessão</button>
            <img src={pesquisar} alt="" className='w-6 m-6 cursor-pointer ' />

        </nav>
    )
}
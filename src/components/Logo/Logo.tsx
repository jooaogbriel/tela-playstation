import logo from '../../imgs/logo.svg';

export const Logo = () => {
    return (
        <header className=' bg-black w-full h-7 flex justify-end  '>
            <img  className=' w-14 h-7 mr-2 cursor-pointer' src={logo} alt=""></img>
        </header>
    )
}
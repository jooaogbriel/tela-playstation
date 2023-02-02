import logo from '../../imgs/logo.svg';

export const Logo = () => {
    return (
        <header className=' bg-black w-full h-9 flex justify-end  '>
            <img  className=' w-20 h-9 mr-2' src={logo} alt=""></img>
        </header>
    )
}
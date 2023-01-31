import logo from '../../imgs/sony.png';

export const Logo = () => {
    return (
        <header className=' bg-black w-full h-9 flex justify-end  '>
            <img  className=' w-24 h-9' src={logo} alt=""></img>
        </header>
    )
}
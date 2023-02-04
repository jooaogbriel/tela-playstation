import show from '../../imgs/deadspace.jpeg'
import logo from '../../imgs/logodead.webp'

export const DeadSpace = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end bg-gradient-to-r bg-regal-blue'>
                 <div className='w-full h-[33rem] ' >
                <img className='h-full mr-48 flex w-full ' src={show} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-end content-end w-[82%] ml-32 '>
                    <img src={logo} className='w-96' alt="" />
                    <h2 className='text-4xl font-thin pt-5 pb-2'>A humanidade termina aqui</h2>
                    <p className=' text-sm w-1/3 font-light'>O clássico jogo de terror e sobrevivência no espaço está de volta, reformulado para oferecer uma experiência ainda mais profunda e imersiva, já disponível no PS5</p>
                    <button className='text-black mt-6  bg-white rounded-full w-32 h-8 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
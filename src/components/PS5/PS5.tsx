import ps5 from '../../imgs/playstation-5.webp'
import icon from '../../imgs/icon.png'

export const PS5 = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end '>
                 <div className='w-full h-[33rem] flex justify-end  ' >
                <img className='h-full mr-48 bg-red-500  flex justify-end ' src={ps5} alt="" />
                </div> 
                <div className=' mb-14 text-black absolute flex flex-col items-start content-end w-[36%] ml-14 '>
                    <h1 className='font-semibold  text-4xl flex items-end absolute mt-1'>LIVE FROM<p className='mb-2 text-xs'>™</p> </h1>
                    <img className='w-30 h-40' src={icon} alt="" />
                    <h2 className='text-5xl font-normal'>Trazendo o extraordinário até você</h2>
                    <p className='mt-6'>Explore mundos incríveis e experimente o inesperado. Inicie hoje mesmo sua história.</p>
                    <button className='text-white mt-10 bg-black rounded-full w-32 h-10 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
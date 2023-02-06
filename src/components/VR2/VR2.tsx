import control from '../../imgs/last.jpeg'
import logo from '../../imgs/logoo.webp'

export const VR2 = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end  '>
                 <div className='w-full h-[33rem]  justify-end' >
                <img className='h-full mr-48 w-full' src={control} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-start content-end w-[37%] ml-14 '>
                    <img className='w-80' src={logo} alt="" />
                    <p className='mt-10 font-thin text-lg w-3/4'>Resista e sobreviva. Reviva o aclamado jogo que deu início a tudo, totalmente reconstruído do zero para o console PlayStation®5.</p>
                    <button className='text-black mt-10 bg-white rounded-full w-32 h-10 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
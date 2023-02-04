import control from '../../imgs/vr2bg.png'

export const VR2 = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end'>
                 <div className='w-full bg-gradient-to-r from-blue to-bg h-[33rem]  justify-end ' >
                <img className='h-full mr-48' src={control} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-start content-end w-[37%] ml-14 '>
                    <h1 className='font-semibold  text-5xl flex items-start'>DUALSENSE EDGE<p className='mt-1 text-xs'>™</p> </h1>
                    <h2 className='text-4xl font-normal'>WIRELESS CONTROLLER</h2>
                    <p className='mt-10'>Jogue do seu jeito com seu novo controle de PS5 de alto desempenho, já disponível.</p>
                    <button className='text-black mt-10 bg-white rounded-full w-32 h-10 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
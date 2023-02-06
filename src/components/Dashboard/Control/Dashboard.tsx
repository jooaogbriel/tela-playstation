import control from '../../../imgs/pc.png'
export const Dashboard = () => {
    
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end'>
                 <div className='w-full bg-gradient-to-r from-black to-dash h-[33rem] flex  justify-end ' >
                <img className='h-full mr-48' src={control} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-start content-end w-[37%] ml-32'>
                    <h1 className='font-semibold  text-4xl flex items-start leading-6 '>DUALSENSE EDGE</h1>
                    <h2 className='text-3xl font-normal'>WIRELESS CONTROLLER</h2>
                    <p className='mt-10 text-base font-thin leading-5'>Jogue do seu jeito com seu novo controle de PS5 de alto desempenho, já disponível.</p>
                    <button className='text-black mt-10 bg-white rounded-full w-32 h-10 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
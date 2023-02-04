import fors from '../../imgs/fors.jpeg'

export const Forspoken = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end bg-gradient-to-r bg-regal-blue'>
                 <div className='w-full h-[33rem] ' >
                <img className='h-full mr-48 flex w-full ' src={fors} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-start content-end w-[37%] ml-32 '>
                    <h2 className='text-4xl font-thin'>Controle o jogo. Domine The Show™.</h2>
                    <p className=' text-sm '>MBL® The Show™ 23 deixa você mais perto do que nunca de realizar seus sonhos no campo de beisebol. Em breve no PS4 e PS5.</p>
                    <button className='text-black mt-6  bg-white rounded-full w-32 h-8 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
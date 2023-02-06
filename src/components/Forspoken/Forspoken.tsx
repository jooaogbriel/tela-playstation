import fors from '../../imgs/hog.webp'
import login from '../../imgs/login.png'

export const Forspoken = () => {
    return (
        <main>
            <div className='flex flex-col h-4/6 justify-end bg-gradient-to-r bg-regal-blue'>
                 <div className='w-full h-[33rem] ' >
                <img className='h-full mr-48 flex w-full ' src={fors} alt="" />
                </div> 
                <div className=' mb-14 text-white absolute flex flex-col items-start content-end w-[37%] ml-32 '>
                   <img className='w-96 mb-10' src={login} alt="" />
                    <p className=' text-sm font-thin '>Embarque em uma jornada por locais familiares e novos enquanto explora e descobre criaturas mágicas, personaliza seu personagem e cria poções, domina feitiços, melhora talentos e se torna o bruxo que você sempre quis ser.</p>
                    <button className='text-black mt-6  bg-white rounded-full w-32 h-8 font-semibold'>Saiba mais</button>
                </div>
            </div>
        </main>
    )
}
import control from '../../imgs/control.png'
import play from '../../imgs/play.png'
import show from '../../imgs/show.png'
import deadspace from '../../imgs/deadspace.png'
import vr2 from '../../imgs/logo us.webp'
import forspoken from '../../imgs/logohog.avif'

export const Cards = () => {
    return (
        <div className='flex items-center justify-around mt-9 ml-10 mr-10 mb-5'>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={control} alt="" ></img>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={play} alt="" ></img>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={show} alt="" ></img>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={deadspace} alt="" ></img>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={vr2} alt="" ></img>
            <img className='w-52 h-30 rounded-xl opacity-70 hover:opacity-100 hover:-translate-y-2 duration-200 hover:shadow-[0_20px_20px_-15px_rgba(0,0,0,0.7)]' src={forspoken} alt="" ></img>
        </div>
    )
}
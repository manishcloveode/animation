import Spline from '@splinetool/react-spline/next';
import { Plus } from 'lucide-react';
export default function Hero() {
    return (
        <div className=" relative w-full h-screen px-5 flex flex-col justify-center items-center text-center">
            <div className="flex flex-col container mx-auto w-full items-center">
                <h1 className="text-4xl font-normal max-w-xl mb-8 mt-[-100px] text-start">
                    We help brands create digital experiences that connect with  audience
                </h1>
                <div className="w-full h-[70vh] rounded-lg overflow-hidden bg-gray-200">
                    <Spline scene="https://prod.spline.design/jcV6V6nAvLCa6htb/scene.splinecode" />
                </div>
            </div>

            <div className=" bottom-6 w-full flex justify-between items-center gap-10 text-xl text-black tracking-widest">
                <Plus className='h-6 w-6' />
                <Plus className='h-6 w-6' />
                <span className="text-sm tracking-widest">SCROLL TO EXPLORE</span>
                <Plus className='h-6 w-6' />
                <Plus className='h-6 w-6' />
            </div>
        </div>

    );
}
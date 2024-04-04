
import Image from 'next/image'



const Card = async () => {

    return (
        <div className='mx-4 max-w-md max-sm:mx-auto'>
            <div className='flex flex-col justify-center items-center'>
                <div className='relative w-full h-60'>
                    <Image src="/tia.png" alt='blog-image' layout="fill"  className='rounded-lg' />
                </div>
                <div className='p-4 bg-white rounded-b-lg '>
                    <div className='font-bold text-2xl mb-2'>Buraya Başlık Gelir</div>
                    <div className='text-lg text-[#565656] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci repudiandae ipsum itaque delectus eos rem minima eum dignissimos neque accusantium.</div>
                    <div className='flex items-center'>
                        <Image src="/profile.png" alt='profile' width={40} height={40} className='rounded-full' />
                        <div className='ml-2 font-medium'>
                            <p>Erkan Demir</p>
                            <p className='text-[#636363]'>23.03.2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Card
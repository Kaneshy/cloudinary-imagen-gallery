import { useRouter } from 'next/router'
import { CldImage } from 'next-cloudinary';
import { useEffect, useState } from 'react';


const ImgTarjet = () => {
    const router = useRouter()
    const [preloadingA, setpreloadingA] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setpreloadingA(true)
        }, 50);
    }, [])

    return (
        <>
            {preloadingA && (
                <div className='it-container flex justify-center ' >
                    <div className=' max-w-2xl it-b-container w-full flex justify-center max-h-screen  p-4' >
                        <CldImage
                            width="1000"
                            height="800"
                            src={router.query.id}
                            sizes='90vh'
                            alt="Description of my image"
                            priority={true}
                            className=' '
                        />
                    </div>
                </div>
            )}
            <div onClick={() => router.back()} className='fixed top-2 left-2 p-2  text-lg font-bold bg-neutral-800 text-white rounded-md' >
                back
            </div>
        </>

    )
}

export default ImgTarjet
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
                <div className='it-container' >
                    <div className='it-b-container' >
                        <CldImage
                            width="1000"
                            height="800"
                            src={router.query.id}
                            sizes="90vh"
                            alt="Description of my image"
                            priority={true}
                        />
                    </div>
                </div>
            )}
            <div onClick={() => router.back()} className='fixed top-2 left-2 p-2 bg-white text-black rounded-md' >
                back
            </div>
        </>

    )
}

export default ImgTarjet
import { useRouter } from 'next/router'

const ImgTarjet = () => {
    const router = useRouter()

    return (
        <>
            <div className='tj-container-img '>
                <h1>WELCOME!</h1>
                <img src={router.query.id} alt="" />
            </div>
            <div onClick={() => router.back()} className='fixed top-2 left-2 p-2 bg-white text-black rounded-md' >
                back
            </div>
        </>

    )
}

export default ImgTarjet
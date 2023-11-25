import Link from 'next/link'


const FloatTarjet = () => {
    return (
        <>
            <section id="tarjet_options">
                <div id="option-container" >
                    <Link href={'/home'} className="option">
                        <img className="icon-tarjet" src='https://i.ibb.co/h87CbNG/art.png' alt="Home" />
                    </Link>
                    <Link href={'/home'} className="option" >
                        <img className="icon-tarjet" src='https://i.ibb.co/LJnfmng/camera.png' alt="" />
                    </Link>
                    <Link href={'/home'} className="option">
                        <img className="icon-tarjet" src='https://i.ibb.co/YXKZkK0/hogar2.png' alt="" />
                    </Link>
                    <Link href={'/home'} className="option1">
                        <img className="icon-tarjet" src='https://i.ibb.co/tBP5TqJ/movie2.png' alt="" />
                    </Link>
                    <Link href={'/home'} className="option1">
                        <img className="icon-tarjet" src='https://i.ibb.co/b65tymj/musical-note.png' alt="" />
                    </Link>
                    <Link href={'/home'} className="option1">
                        <img className="icon-tarjet" src='https://i.ibb.co/RhmK7n0/picture.png' alt="" />
                    </Link>
                    <Link href={'/home'} className="option1">
                        <img className="icon-tarjet" src='https://i.ibb.co/PD55HNv/sad-face.png' alt="" />
                    </Link>


                    <Link href={'/home'} className="option2">
                        <img className="icon-tarjet" src='https://i.ibb.co/pRxk8cP/unsave.png' alt="" />
                    </Link>
                    
                </div>
            </section>
        </>
    )
}

export default FloatTarjet

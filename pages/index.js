import Link from "next/link"

function Home() {


  return (
    <section className='containerMP' >
      <div className='cinfoMainpage' >
        <div className='info' >
          <h1>PIXELART WITH CLOUDINARY</h1>
          <p >Using cloudinary we get and upload images to the cloudinary store</p>
          <Link href='/home' className='btn' >GET STARTED</Link>
        </div>
        <div>
          <img src="https://i.ibb.co/cvwtwmc/jiggly.webp" alt="jiggly" border="0" />
        </div>
      </div>
    </section>
  )
}

export default Home



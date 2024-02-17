import Footer from '@/components/Footer';
import UploadImg from '@/components/UploadImg';
import cloudinary from 'cloudinary'
import Link from 'next/link';
import FloatTarjet from '@/components/FloatTarjet';
import { CldImage } from 'next-cloudinary';

export const getServerSideProps = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.API_SECRET,
  });

  try {
    const results = await cloudinary.v2.search
      // you can add also AND tags=shirt AND uploaded_at>1d AND bytes>1m
      .expression('resource_type:image AND folder=my-uploads')
      .sort_by('uploaded_at', 'desc')
      .max_results(80)
      .execute();
    const publicId = results.resources.map(resource => resource.public_id);
    return {
      props: {
        publicId // Pasar secureUrls como propiedad al componente homePage
      }
    }

  } catch (error) {
    console.error('Error al obtener los resultados de Cloudinary:', error);
    throw error;
  }

}

function homePage({ publicId }) {

  return (
    <>
      <UploadImg />
      <section className='hp-container' >
        <div className='flex flex-row p-6 justify-center font-bold mb-10 text-center' >
          <h1  >GALLERY</h1>
        </div>
        <div className='pm-grid-container' >
          {publicId && publicId.map((pId, index) => (
            <Link  href={{
              pathname: '/images/[slug]',
              query: { slug: pId },
            }}  key={index} className='img-content'   >
              {/* <img loading='lazy' src={url} alt={`Imagen ${index}`} /> */}
              <CldImage
                    width="250"
                    height="300"
                    src={pId}
                    alt="Description of my image"
                    priority={false}
                />
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default homePage
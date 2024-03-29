import Footer from '@/components/Footer';
import UploadImg from '@/components/UploadImg';
import cloudinary from 'cloudinary'
import Link from 'next/link';
import FloatTarjet from '@/components/FloatTarjet';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';
import Navbar from '@/components/Default';

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
      .next_cursor()
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
      <Navbar />
      
      <section className='hp-container  mt-36' >
        <div className='pm-grid-container' >
          {publicId && publicId.map((pId, index) => (
            <Link href={{
              pathname: '/images/[slug]',
              query: { slug: pId },
            }} key={index} className='img-content'   >
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
import React from 'react';
import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className='w-full mx-auto'>
      <Image className='border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8' src="/images/jaehyeon.png" width={200} height={200} alt='Jaehyeon' priority={true}></Image>
    </section>
  )
}

export default MyProfilePic
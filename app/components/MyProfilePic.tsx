import React from 'react';
import Image from 'next/image';

const MyProfilePic = () => {
  return (
    <section className=''>
      <Image className='' src="/images/jaehyeon.png" width={200} height={200} alt='Jaehyeon' priority={true}></Image>
    </section>
  )
}

export default MyProfilePic
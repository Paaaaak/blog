import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import Jaehyeon from '@/public/images/jaehyeon.png';
import Profile from '@/public/images/profile.jpg';
import Image from 'next/image';

const Namecard = () => {
  return (

<div>
<div className='name-card-container'>
  <div className="spinner-box">
    <div className="circle-border">
    </div>
    <div className="circle-core" >
      {/* <img src='https://via.placeholder.com/140x140' alt='selfie'></img> */}
      
      <Image src={Profile} alt="Jaehyeon" width={140} height={140} />
    </div>
  </div>
  <div className='name-card-introduction'>
    <span><b>Jaehyeon </b><b style={{ color: '#D4AF37' }}>Park</b></span>
    <span>
      I deliver useful <b>Frontend</b> and <b>UX</b> tips
      and maintain this blog as a reminder to myself.
    </span>
    <div className='name-card-icons'>
      <a href="https://github.com/JaehyeonPaak" target="_blank" rel='noopener noreferrer'><GitHubIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
      <a href="/"><InstagramIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
      <a href="mailto:wogus392@gmail.com"><MailOutlineIcon style={{ fontSize: '1.8rem', cursor: 'pointer' }} /></a>
    </div>
  </div>
</div>
<div className='post-border' style={{ height: '1px', marginBottom: '30px' }}></div>
</div>
  )
}

export default Namecard
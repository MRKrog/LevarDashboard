import React from 'react';
import loadingImage from '../../assets/images/loading/logo.svg';

const Loading = () => {
  return (
    <div className='Loading'>
      <img src={loadingImage} className='Loading-logo' alt='loading' />
    </div>
  )
}

export default Loading;

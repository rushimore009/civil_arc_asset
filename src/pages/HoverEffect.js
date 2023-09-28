import React from 'react';
import { MDBRipple } from 'mdb-react-ui-kit';

export default function Hover() {
  return (
    <MDBRipple rippleTag='div' className='bg-image hover-overlay hover-zoom hover-shadow'>
      <img src='https://mdbootstrap.com/img/new/fluid/city/113.webp' className='w-100' />
      <a href='#!'>
        <div className='mask' style={{ backgroundColor: 'rgba(57, 192, 237, 0.2)' }}></div>
      </a>
    </MDBRipple>
  );
}
import React from 'react'
import FooterTop from './FooterTop';

export default function Footer() {
  return (
    <>
      <FooterTop />
      <div className="w-full py-10">
        <p className="text-center text-gray-500 text-base">
          © {new Date().getFullYear()}. All rights reserved by Prem S N
        </p>
      </div>
    </>
  );
}

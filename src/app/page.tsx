'use client';

import React, { useState, useEffect } from 'react';
import MobileFooter from './components/Mobile_footer';
import Image from 'next/image';
import Header from './components/Header';

export default function Home({children} : {
  children: React.ReactNode,
}): React.JSX.Element {


  return (
    <div className=' relative flex flex-col w-full '>
      <Header/>
      <main>
        {children}
      </main>
      <MobileFooter />
    </div>
  )
}
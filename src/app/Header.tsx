import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ToggleMode = (): React.JSX.Element =>{

  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggleMode = ()=>{
    setIsDarkMode(!isDarkMode);
  }

  useEffect(()=>{
    const toggleModes= () =>{
      
      isDarkMode ? localStorage.setItem('theme', "dark"): localStorage.setItem('theme', 'light');

      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

    }
    toggleModes();

  }, [isDarkMode])

  return(
    <button onClick={handleToggleMode}>
      {isDarkMode ? (<Image width={24} height={24} src={'/DarkMode.svg'} alt='Dark Mode' />)
      :(<Image height={24} width={24} src={'/LightMode.svg'} alt=''/>)}
    </button>
  )
}

const Menu = (): React.JSX.Element =>{

  return(
    <div className='sm:none'>

    </div>
  )
}

const MobileMenuCard = ({title, link}: {
  title: string,
  link: string,
}): React.JSX.Element =>{

  return(
    <div className=' w-11/12 border-b-2 '>
      <a href={link}>{title}</a>
    </div>
  )
}

const MobileMenu = () =>{

  useEffect(()=>{
    const handleHideMenu = ()=>{
      const menu = document.getElementById('mobile-menu');
      if(menu)
        menu.addEventListener('focusout', ()=>{
          
        })
    }
    handleHideMenu();
  }, [])

  return(
    <div id='mobile-menu' className='flex flex-col items-center p-1 border-gray-700 border-2 rounded-md shadow-lg '>
      <MobileMenuCard title='Manga' link='/' />
      <MobileMenuCard title='Figures' link='/' />
      <MobileMenuCard title='Merchindise' link='/' />
    </div>
  )
}


const Header = () =>{

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleMenus = () =>{
    setShowMobileMenu(!showMobileMenu);
  }

  return(
    <header className="flex flex-col">

      <div className=' flex justify-between'>
        <button onClick={()=>handleMenus()}>
          <Image width={24} height={24} src={'/hamburger-lg.svg'} alt='' />
        </button>

        <h1 className=' text-3xl p-3 font-bold '>ZenTokyo</h1>
        <ToggleMode />
      </div>

      {showMobileMenu ? <MobileMenu /> : null}
      <Menu/>
    </header>
  )
}

export default Header;
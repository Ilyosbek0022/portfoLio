'use client'
import Image from 'next/image'
import { FaInstagram, FaTelegramPlane, FaGithub, FaFacebookF } from 'react-icons/fa'
import React, { useEffect } from 'react'

const page = () => {
  useEffect(() => {
  const light = document.querySelector('.cursor-light')

  const move = (e) => {
    if (!light) return
    light.style.left = e.clientX + 'px'
    light.style.top = e.clientY + 'px'
  }

  window.addEventListener('mousemove', move)
  return () => window.removeEventListener('mousemove', move)
}, [])

  return (
    <div>
<div className="all">
 
  <header>
<div className="container">
  <div className="between">
    <div className="logo">
   <Image
      src="/logo.png"
      alt="Landscape picture"
      width={800}
      height={500}
    />
    <h1>Ilyosbek</h1>
    </div>

<div className="links">
  <a href="#">about</a><a href="#">smth</a><a href="#">about</a><a href="#">contact</a><a href="#">My device</a>
</div>

<div className="social">
  

  <div className="social-icons">
    <a href="#" aria-label="Instagram"><FaInstagram /></a>
    <a href="#" aria-label="Telegram"><FaTelegramPlane /></a>
    <a href="#" aria-label="GitHub"><FaGithub /></a>
    <a href="#" aria-label="Facebook"><FaFacebookF /></a>
  </div>
</div>

  </div>
</div>
  </header>
   <div className="container">
<main>
  <div className="part1"><h1>Back-end</h1> <p>Ive no idea what Back-end is</p></div>
  <div className="part2">
  <img className="tilt-img" src="/me.png" alt="" />
</div>

  <div className="part3"><h1>Front-end</h1> <p>Ive no idea what Front-end is</p></div>
</main>
  </div>
 
</div>
<div className="cursor-light"></div>

    </div>
  )
}

export default page
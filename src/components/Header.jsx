import React, { useEffect, useRef } from 'react'

function Header() {
	const videoRef = useRef()
	useEffect(()=>{
	if(videoRef.current) videoRef.current.playbackRate = 2
	},[])


  return (
	<section id='hero'>
	  <div>
		<h1>MacBook Pro</h1>
		<img src="/title.png" alt="" />
	  </div>
	  <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline></video>
	  <button type="">Buy</button>
	  <p>From $1599 or $133/mo for 12 months</p>
	</section>
  )
}

export default Header

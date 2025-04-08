import React from 'react'
import ProfileCard from '../components/profilecard'
import Aboutpage from '../About/page'
import Education from '../components/education'
import Skills from '../components/skills'
import Projectpage from '../Projects/page'


const Namepage = () => {
  return (
    <div>
      <ProfileCard/>
      <Aboutpage/>
      <Education/>
      <Skills/>
      <Projectpage/>
    
    </div>
  )
}

export default Namepage

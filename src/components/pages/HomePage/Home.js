import React from 'react'
import HeroSection from '../../HeroSection'
import {homeObjOne} from './Data'

function Home() {
    return (
        <>
        {/* object with all the props passed in 'Data' */}
        <HeroSection {...homeObjOne} />
        </>
    )
}

export default Home

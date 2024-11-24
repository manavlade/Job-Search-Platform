import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './categorycarousel'
import LatestJobCard from './JobCard'
import Footer from './shared/Footer'

const Home = () => {
    return (
        <>
            <div>
                <Navbar />
                <HeroSection />
                <CategoryCarousel />
                <LatestJobCard/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
import Category from '@/components/Category'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import React from 'react'

const Home = () => {
  return (
    <div>
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <Hero/>
      {/* Category Section */}
      <Category/>
    </div>
  )
}

export default Home
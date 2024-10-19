import Category from '@/components/Category'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import PopularDestination from '@/components/PopularDestination'
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
      {/* Popular Destination */}
      <PopularDestination/>
      {/* Info Section */}
      <Info/>
      {/* Contact Form */}
      <ContactForm/>
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default Home
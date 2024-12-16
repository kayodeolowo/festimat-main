"use client"
import React, { useState } from 'react'
import { Container } from './Container'
import Image from 'next/image'
import { PrimaryButton } from './PrimaryButton'
import { WhiteButton } from './WhiteButton'
import { FiMenu, FiX } from 'react-icons/fi'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0, 
      y: "-100%",
      transition: {
        duration: 0.3
      }
    },
    visible: { 
      opacity: 1, 
      y: "0%",
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section className="bg-[#2B293D] relative">
      <Container>
        <div className='pt-4 pb-4 text-white flex items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center space-x-2'>
            <Image 
              alt='logo' 
              src="/assets/icons/logo.png" 
              width={40} 
              height={30}
            />
            <h1 className='text-xl font-bold'>FESTIMAT</h1>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:flex space-x-4 items-center'>
            <p className='cursor-pointer hover:text-purple-300 transition'> Home </p>
            <p className='cursor-pointer hover:text-purple-300 transition'> Events </p>
            <PrimaryButton>Login</PrimaryButton>
            <WhiteButton>Sign up</WhiteButton>
          </div>

          {/* Mobile Menu Toggle */}
          <div className='md:hidden'>
            <button 
              onClick={toggleMobileMenu} 
              className='text-white text-2xl focus:outline-none'
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={mobileMenuVariants}
              className='absolute top-full left-0 w-full bg-[#2B293D] md:hidden z-50'
            >
              <div className='flex flex-col items-center space-y-4 py-6'>
                <p className='cursor-pointer hover:text-purple-300 transition text-white'> Home </p>
                <p className='cursor-pointer hover:text-purple-300 transition text-white'> Events </p>
                <div className='flex space-x-4'>
                  <PrimaryButton>Login</PrimaryButton>
                  <WhiteButton>Sign up</WhiteButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}

export default Header
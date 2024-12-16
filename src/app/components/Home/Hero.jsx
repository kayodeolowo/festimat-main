import React from 'react'
import { Container } from '../Layouts/Container'
import { IoSearchSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <section>
        <div className="bg-[url('/assets/images/hero.png')]  bg-cover h-[24rem]" >
            <Container>
           
            <h1 className='text-2xl  md:text-4xl pt-12 pb-10 font-bold text-white'> Dont miss out! <br/>
            Explore the vibrant events happening locally and globally.</h1>

<div className='mt-10 bg-white w-[80%]  mx-auto py-2 flex justify-between rounded-md  mb-16 items-center px-4 '>
  <p> Search Events... </p>
<IoSearchSharp className='text-2xl text-gray-400 ' />
</div>
       
            </Container>
        </div>

    </section>

  )
}

export default Hero
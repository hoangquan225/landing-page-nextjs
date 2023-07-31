"use client"
import Engineer from '@/components/Engineer'
import Hero from '@/components/Hero'
import ProductTeams from '@/components/Product'
import SignupForm from '@/components/SignupForm'
import Testimonial from '@/components/Testimonial'
import WhyQubly from '@/components/WhyQubly'
import Footer from "@/components/Footer";
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <link href="https://fonts.cdnfonts.com/css/metropolis-2" rel="stylesheet"></link>
      <Header />
      <Hero />
      <WhyQubly />
      <ProductTeams />
      <Engineer />
      <Testimonial />
      <SignupForm />
      <Footer />
    </>
  )
}

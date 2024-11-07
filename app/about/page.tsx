import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
export const metadata: Metadata = {
  title: 'Juya Amir',
  description: 'Generated by Juya Amir'
}
const About = () => {
  return (
    <div>About
      <h2><Link href='/products'>products</Link></h2>
    </div>
  )
}

export default About
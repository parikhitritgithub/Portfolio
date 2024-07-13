'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import SkillsCard from './SkillsCard'
import { Button } from "@/components/ui/button"


export default function Skillhero() {

  const router = useRouter()
  return (

    <div className=''>

      <div className='flex justify-center items-center mt-[8rem] py-5'>
        <h1 className='text-5xl'>Skills</h1>
      </div>
 

      <section className='py-10'>
      <SkillsCard  />
      </section>

      <div>

      </div>
      <Button variant="outline">Outline</Button>

    </div>
  )
}

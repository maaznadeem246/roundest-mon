import { getOptionsForVote } from '@/utils/getRandomPokemon'
import { trpc } from '@/utils/trpc'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [first, second] = getOptionsForVote();

  const [state, setState] = useState({
    first:0, second:0,
  })

  useEffect(()=>{
    setState((prev)=>({
      ...prev,
      first, second
    }))
  },[])
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-middle items-center">
      <div className='text-2xl text-center'>
          Which Pokemon is rounded
      </div>
      <div className='p-2' />
      <div className='border rounded p-8 flex justify-between items-center max-w-2xl text-center  '>
        <div className='w-16 h-16 bg-red-800'>{state.first}</div>
        <div className='p-8'>Vs</div>
        <div className='w-16 h-16 bg-red-800'>{state.second}</div>
      </div> 
    </div>
  )
}

export default Home

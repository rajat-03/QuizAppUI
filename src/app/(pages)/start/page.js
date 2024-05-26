"use client"
import CountdownTimer from '@/components/CountdownTimer';
import { useRouter } from 'next/navigation';
import React from 'react'

const CountDownPage = () => {
    const router = useRouter();

    const handleCountdownFinish = () => {
      // Navigate to the quiz page once the countdown timer finishes
      router.push('/quiz');
    };
  
    return (
      <div className='flex flex-col items-center justify-center min-h-screen py-2 text-gray-200'>
        <CountdownTimer onFinish={handleCountdownFinish} />
      </div>
    );
  };

export default CountDownPage
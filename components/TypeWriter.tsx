'use client'
import React from 'react';
import Typewriter from 'typewriter-effect';
type Props = {}

export const TypeWriter = (props: Props) => {
  return (
    <div>
        <Typewriter
        onInit={(typewriter) => {
          typewriter
          .typeString("🚀 Supercharged Productivity.")
          .pauseFor(1000)
          .deleteAll()
          .typeString("🤖 AI-Powered Insights.")
          .start();
          }}
          
        />
    </div>
  )
}
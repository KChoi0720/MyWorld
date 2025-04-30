// components
'use client'

import About from '@/components/About';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Form from '@/components/Form';
import { sendGTMEvent } from '@next/third-parties/google'




export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Work />

      <button
        onClick={() => sendGTMEvent({ event: 'buttonClicked', value: 'xyz' })}
      >
        Send Event
      </button>
      
    </main>
  );
}

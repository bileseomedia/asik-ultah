'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { useAudio } from './hooks/useAudio'

import PINScreen from './components/PINScreen'
import StartScreen from './components/StartScreen'
import MiniGame1 from './components/MiniGame1'
import MiniGame2 from './components/MiniGame2'
import MiniGame3 from './components/MiniGame3'
import MiniGame4 from './components/MiniGame4'
import VideoScene from './components/VideoScene'
import Ending from './components/Ending'

export default function Home() {
  const [currentScene, setCurrentScene] = useState('pin')
  const { isPlaying, isMuted, togglePlay, toggleMute } = useAudio('/audio/backburner.mp3')

  const scenes = {
    pin: 0,
    start: 1,
    game1: 2,
    game2: 3,
    game3: 4,
    game4: 5,
    video: 6,
    ending: 7,
  }

  const renderScene = () => {
    switch (currentScene) {
      case 'pin':
        return <PINScreen onSuccess={() => setCurrentScene('start')} />
      case 'start':
        return <StartScreen onStart={() => {
          togglePlay()
          setCurrentScene('game1')
        }} />
      case 'game1':
        return <MiniGame1 onComplete={() => setCurrentScene('game2')} />
      case 'game2':
        return <MiniGame2 onComplete={() => setCurrentScene('game3')} />
      case 'game3':
        return <MiniGame3 onComplete={() => setCurrentScene('game4')} />
      case 'game4':
        return <MiniGame4 onComplete={() => setCurrentScene('video')} />
      case 'video':
        return <VideoScene onComplete={() => setCurrentScene('ending')} />
      case 'ending':
        return <Ending />
      default:
        return null
    }
  }

  return (
    <div className="relative min-h-screen">
      <AnimatePresence mode="wait">
        {renderScene()}
      </AnimatePresence>

      {/* Mute Button */}
      {currentScene !== 'pin' && (
        <button
          onClick={toggleMute}
          className="fixed top-4 right-4 z-50 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white/90 transition-colors"
        >
          {isMuted ? (
            <svg className="w-5 h-5 text-[#8C3A3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-[#B76E79]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

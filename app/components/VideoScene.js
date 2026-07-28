'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function VideoScene({ onComplete }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(e => console.log('Autoplay prevented'))
    }

    const timer = setTimeout(() => {
      onComplete()
    }, 8000) // Auto proceed after video

    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-black/10">
            <video
              ref={videoRef}
              src="/video/birthday.mp4"
              className="w-full h-full object-cover"
              playsInline
              muted
              loop={false}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="text-white text-sm bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                🎬 romantisan nih
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

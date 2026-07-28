'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const photos = [
  { id: 1, text: "jaman jamet" },
  { id: 2, text: "moment pramuka bjir" },
  { id: 3, text: "gembel banget sial" },
  { id: 4, text: "trip pertama nih" },
  { id: 5, text: "trip kemana lagi ini" },
  { id: 6, text: "ulahraga kali ah" },
  { id: 7, text: "angjay baju sma" },
  { id: 8, text: "fotobox nih gayanya" },
]

export default function MiniGame3({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    if (currentIndex < photos.length - 1) {
      setCurrentIndex(currentIndex + 1)
    } else {
      onComplete()
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      // Auto advance after 3 seconds
      if (currentIndex < photos.length - 1) {
        setCurrentIndex(currentIndex + 1)
      } else {
        onComplete()
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [currentIndex])

  const currentPhoto = photos[currentIndex]
  const progress = ((currentIndex + 1) / photos.length) * 100

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          {/* Progress bar */}
          <div className="w-full h-1 bg-[#F5E6DA] rounded-full mb-6 overflow-hidden">
            <motion.div
              className="h-full bg-[#B76E79] rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#F5E6DA]">
                <Image
                  src={`/images/${currentPhoto.id}.jpg`}
                  alt={`Memory ${currentPhoto.id}`}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-center text-[#8C3A3A] font-light text-lg">
                {currentPhoto.text}
              </p>
            </motion.div>
          </AnimatePresence>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="w-full mt-6 py-3 bg-[#B76E79] text-white rounded-lg hover:bg-[#A05D68] transition-colors"
          >
            {currentIndex === photos.length - 1 ? 'lanjut dah ✨' : 'Next →'}
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function MiniGame2({ onComplete }) {
  const [revealed, setRevealed] = useState(false)

  const handleReveal = () => {
    setRevealed(true)
    setTimeout(() => {
      onComplete()
    }, 2500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-medium text-[#8C3A3A] text-center mb-4">
            Klik gambarnya yuk!
          </h3>
          
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleReveal}
            className="relative aspect-square w-full rounded-xl overflow-hidden cursor-pointer bg-[#F5E6DA]"
          >
            <div className="relative w-full h-full">
              <Image
                src={`/images/1.jpg`}
                alt="memory"
                fill
                className={`object-cover transition-all duration-700 ${
                  revealed ? 'brightness-100' : 'brightness-0 blur-2xl'
                }`}
              />
              {!revealed && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#8C3A3A] text-lg font-light">tap buka ✨</span>
                </div>
              )}
            </div>
          </motion.div>

          {revealed && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-sm text-[#B76E79] mt-4"
            >
              ada apa ya? 🤔
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

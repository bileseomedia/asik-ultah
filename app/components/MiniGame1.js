'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const responses = {
  A: [
    "hahaha pinter lu pilih itu! 😄",
    "lah, milih yang itu lu?",
    "interesting choice! lanjut yuk~",
  ],
  B: [
    "goblok, seriusan pilih itu? 😂",
    "nah bener nih ege!",
    "not bad lah, not bad lah!",
  ]
}

export default function MiniGame1({ onComplete }) {
  const [selected, setSelected] = useState(null)
  const [response, setResponse] = useState('')

  const handleChoice = (choice) => {
    const randomResponse = responses[choice][Math.floor(Math.random() * responses[choice].length)]
    setResponse(randomResponse)
    setSelected(choice)
    
    setTimeout(() => {
      onComplete()
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <div className="w-full max-w-md">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <h3 className="text-xl font-medium text-[#8C3A3A] text-center mb-6">
            Kalo lagi marah, biasanya kamu...
          </h3>

          <div className="space-y-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleChoice('A')}
              disabled={selected !== null}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selected === 'A' 
                  ? 'border-[#B76E79] bg-[#B76E79]/10' 
                  : selected !== null
                  ? 'border-gray-200 opacity-50'
                  : 'border-[#B76E79]/30 hover:border-[#B76E79]'
              }`}
            >
              <span className="text-[#8C3A3A]">diem aja sampe reda</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleChoice('B')}
              disabled={selected !== null}
              className={`w-full p-4 rounded-lg border-2 transition-all ${
                selected === 'B' 
                  ? 'border-[#B76E79] bg-[#B76E79]/10' 
                  : selected !== null
                  ? 'border-gray-200 opacity-50'
                  : 'border-[#B76E79]/30 hover:border-[#B76E79]'
              }`}
            >
              <span className="text-[#8C3A3A]">ngomongin masalahnya langsung</span>
            </motion.button>
          </div>

          <AnimatePresence>
            {response && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 p-4 bg-[#F5E6DA] rounded-lg text-center"
              >
                <p className="text-[#8C3A3A] text-sm">{response}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}

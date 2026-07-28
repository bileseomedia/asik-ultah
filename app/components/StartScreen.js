'use client'

import { motion } from 'framer-motion'

export default function StartScreen({ onStart }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md text-center"
      >
        <div className="mb-12">
          <div className="w-24 h-24 mx-auto mb-6 bg-[#B76E79] rounded-full flex items-center justify-center">
            <span className="text-4xl">🎮</span>
          </div>
          <h2 className="text-2xl font-light text-[#8C3A3A] mb-2">
            main game dulu kita
          </h2>
          <p className="text-[#B76E79] text-sm">
            santai gampang ko
          </p>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onStart}
          className="w-full py-4 bg-[#B76E79] text-white rounded-lg hover:bg-[#A05D68] transition-colors font-medium text-lg"
        >
          Mulai
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

'use client'

import { motion } from 'framer-motion'

export default function Ending() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md text-center"
      >
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
            className="w-24 h-24 mx-auto mb-6 bg-[#B76E79] rounded-full flex items-center justify-center"
          >
            <span className="text-4xl">🎂</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-3xl font-light text-[#8C3A3A] mb-4"
          >
            Happy Birthday! 🎉
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="space-y-3 text-[#B76E79]"
          >
            <p>tengcu yak dah main, seru ora?</p>
            <p>tahun ini semoga jadi ci i o</p>
            <p>bekawan terus sampe punya cicit kita</p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-sm text-[#8C3A3A]/50"
          >
            dari orang terimut sehidup lu, dan besti orokan
          </motion.p>
        </div>
      </motion.div>
    </motion.div>
  )
}

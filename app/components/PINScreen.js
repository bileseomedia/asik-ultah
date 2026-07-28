'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PINScreen({ onSuccess }) {
  const [pin, setPin] = useState('')
  const [error, setError] = useState(false)
  const CORRECT_PIN = '28072007'

  const handleSubmit = (e) => {
    e.preventDefault()
    if (pin === CORRECT_PIN) {
      setError(false)
      onSuccess()
    } else {
      setError(true)
      setPin('')
      setTimeout(() => setError(false), 2000)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#F5E6DA] to-[#E8D5CC]"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <div className="w-20 h-20 mx-auto mb-6 bg-[#B76E79] rounded-full flex items-center justify-center">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-[#8C3A3A] mb-2">
            akses ke kenangan ini dikunci
          </h1>
          <p className="text-[#B76E79] text-sm">
            buka dah
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className={`w-full px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border-2 focus:outline-none focus:border-[#B76E79] transition-colors text-center text-lg tracking-widest
                ${error ? 'border-red-400 shake' : 'border-transparent'}`}
              placeholder="••••••••"
              maxLength={8}
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-[#B76E79] text-white rounded-lg hover:bg-[#A05D68] transition-colors font-medium"
          >
            Buka
          </button>
        </form>

        <AnimatePresence>
          {error && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-red-400 text-sm text-center mt-4"
            >
              pin salah, coba lagi yaa
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
        .shake {
          animation: shake 0.3s ease-in-out;
        }
      `}</style>
    </motion.div>
  )
}

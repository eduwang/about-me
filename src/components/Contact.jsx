import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github } from 'lucide-react'
import { trackExternalLink } from '../utils/analytics.js'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
          {/* Email */}
          <motion.a
            href="mailto:eduwang1010.dev@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto md:flex-1 max-w-md"
            whileHover={{ y: -5 }}
            onClick={() => trackExternalLink('mailto:eduwang1010.dev@gmail.com', 'Email')}
          >
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              <Mail className="w-7 h-7 text-blue-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
              <p className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
                eduwang1010.dev@gmail.com
              </p>
            </div>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/eduwang"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 w-full md:w-auto md:flex-1 max-w-md"
            whileHover={{ y: -5 }}
            onClick={() => trackExternalLink('https://github.com/eduwang', 'GitHub')}
          >
            <div className="w-14 h-14 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
              <Github className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">GitHub</h4>
              <p className="text-gray-600 hover:text-gray-800 transition-colors duration-300">
                github.com/eduwang
              </p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact 
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Github } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact</h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육 연구나 협업에 관심이 있으시다면 언제든 연락해 주세요. 
            함께 수학교육의 미래를 만들어가고 싶습니다.
          </p> */}
        </motion.div>

        <div className="flex justify-center items-center space-x-8">
          {/* Email */}
          <motion.a
            href="mailto:eduwang1010.dev@gmail.com"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center space-x-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Email</h4>
              <p className="text-blue-600">eduwang1010.dev@gmail.com</p>
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
            className="flex items-center space-x-3 p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-gray-800" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">GitHub</h4>
              <p className="text-gray-600">github.com/eduwang</p>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default Contact 
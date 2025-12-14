import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, ExternalLink } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: 'Doctor of Philosophy in Mathematics Education',
      school: 'Seoul National University',
      period: '2019 Mar. - 2025 Feb.',
      description: 'Development of Design Principles for Embodied Cognition-Based Augmented Reality Mathematics Learning Environments: Focusing on Augmented Paper Technology',
      thesisUrl: 'https://hdl.handle.net/10371/222294',
      Advisor: 'Prof. Yunjoo Yoo'
    },
    {
      degree: 'Master of Science in Mathematics Education',
      school: 'Seoul National University',
      period: '2017 Mar. - 2019 Feb.',
      description: 'Evaluation of Item-level Model Fit in Cognitive Diagnosis Assesment',
      thesisUrl: 'https://hdl.handle.net/10371/151202',
      Advisor: 'Prof. Yunjoo Yoo'
    },
    {
      degree: 'Bachelor of Science in Mathematics Education',
      school: 'Seoul National University',
      period: '2011 Mar. - 2017 Feb.',
      description: 'Major in Mathematics Education'
    }
  ]

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
        </motion.div>

        {/* Education List */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Academic Background</h3>
          <div className="max-w-4xl mx-auto space-y-6">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900">{item.degree}</h4>
                        <p className="text-sm text-blue-600 font-medium">{item.school}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 ml-14 mb-2">{item.description}</p>
                    {item.Advisor && (
                      <p className="text-sm text-gray-600 ml-14 mb-2">
                        <span className="font-medium">Advisor: </span>{item.Advisor}
                      </p>
                    )}
                    <span className="text-sm text-gray-500 ml-14">{item.period}</span>
                  </div>
                  {item.thesisUrl && (
                    <a
                      href={item.thesisUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium ml-4 flex-shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Thesis</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">지속적인 학습</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              수학교육의 최신 트렌드와 기술을 습득하기 위해 끊임없이 학습하고 있습니다. 
              온라인 강의, 학술대회 참여, 연구 네트워크 활동을 통해 
              전문성을 지속적으로 향상시키고 있습니다.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Education 
import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const education = [
    {
      degree: '수학교육학 박사',
      school: '서울대학교',
      period: '2018 - 2022',
      description: '수학교육에서 디지털 기술 활용에 관한 연구',
      achievements: ['우수논문상', '교육부장관상']
    },
    {
      degree: '수학교육학 석사',
      school: '서울대학교',
      period: '2016 - 2018',
      description: '수학 학습에서 시각화 도구의 효과성 연구',
      achievements: ['우수졸업생상']
    },
    {
      degree: '수학교육학 학사',
      school: '서울대학교',
      period: '2012 - 2016',
      description: '수학교육 전공, 컴퓨터공학 부전공',
      achievements: ['우등졸업', '장학금 수혜']
    }
  ]

  const certifications = [
    {
      name: '수학교사 자격증',
      issuer: '교육부',
      year: '2016',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      name: '교육과정 전문가',
      issuer: '한국교육과정평가원',
      year: '2020',
      icon: <Award className="w-5 h-5" />
    },
    {
      name: '교육연구 전문가',
      issuer: '한국교육개발원',
      year: '2021',
      icon: <GraduationCap className="w-5 h-5" />
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">학력 및 자격</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육 분야에서의 체계적인 학습과 전문성을 인정받은 자격을 보유하고 있습니다.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">학력 사항</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-200"></div>
            
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="text-sm text-blue-600 font-medium">{item.period}</span>
                    </div>
                    
                    <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.degree}</h4>
                    <p className="text-lg font-medium text-blue-600 mb-3">{item.school}</p>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    
                    <div className="space-y-1">
                      {item.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">자격 및 인증</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h4>
                <p className="text-gray-600 mb-2">{cert.issuer}</p>
                <span className="text-sm text-blue-600 font-medium">{cert.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}

export default Education 
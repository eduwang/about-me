import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, BookOpen, Users } from 'lucide-react'

const Teaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const courses = [
    {
      title: '수학교육학 개론',
      institution: '서울대학교',
      period: '2023 - 현재',
      level: '학부',
      description: '수학교육의 기본 개념과 이론을 다루는 입문 강의',
      students: '60명',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: '수학 학습 심리학',
      institution: '서울대학교',
      period: '2022 - 현재',
      level: '대학원',
      description: '수학 학습 과정에서의 인지적, 정의적 측면을 연구하는 강의',
      students: '25명',
      icon: <Users className="w-5 h-5" />
    },
    {
      title: '교육 연구 방법론',
      institution: '서울대학교',
      period: '2021 - 2023',
      level: '대학원',
      description: '수학교육 연구를 위한 양적 및 질적 연구 방법론',
      students: '30명',
      icon: <GraduationCap className="w-5 h-5" />
    }
  ]

  return (
    <section id="teaching" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Teaching</h2>
        </motion.div>

        {/* Courses */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">강의 과목</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <div className="text-purple-600">
                      {course.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-purple-600 font-medium">{course.period}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h4>
                <p className="text-lg font-medium text-purple-600 mb-2">{course.institution}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
                  {course.level}
                </span>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <Users className="w-4 h-4" />
                  <span>{course.students} 수강</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teaching


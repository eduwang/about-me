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
      title: 'Basic Programming for Integrated Education',
      titleKorean: '융합교육을 위한 기초 프로그래밍',
      institution: 'Seoul National University',
      period: '2025 Fall',
      level: 'Graduate course',
      description: 'Department of AI Integrated Education',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Teaching Materials and Teaching Techniques of Mathematics',
      titleKorean: '수학 교재연구 및 지도법',
      institution: 'Sookmyung Women`s University',
      period: '2025 Fall',
      level: 'Undergraduate course',
      description: 'Department of Mathematics',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Logic and Logical Writing in Mathematics',
      titleKorean: '논리 및 논술(수학)',
      institution: 'Sookmyung Women`s University',
      period: '2025 Fall',
      level: 'Undergraduate course',
      description: 'Department of Mathematics',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Trends and Issues of AI Convergence Education',
      titleKorean: 'AI융합교육 동향과 이슈',
      institution: 'Sookmyung Women`s University',
      period: '2025 Fall',
      level: 'Graduate course',
      description: 'Graduate School of Education',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Integrated Perspectives on Modern Mathematics',
      titleKorean: '현대수학의 융합적 이해',
      institution: 'Cheongju National University of Education',
      period: '2025 Fall',
      level: 'Undergraduate course',
      description: '',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Teaching Models of Mathematics',
      titleKorean: '수학교육론',
      institution: 'Sookmyung Women`s University',
      period: '2025 Spring',
      level: 'Undergraduate course',
      description: 'Department of Mathematics',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Trends and Issues of AI Convergence Education',
      titleKorean: 'AI융합교육 동향과 이슈',
      institution: 'Sookmyung Women`s University',
      period: '2025 Spring',
      level: 'Graduate course',
      description: 'Graduate School of Education',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Artificial Intelligence and Data Science',
      titleKorean: '인공지능과 데이터 사이언스',
      institution: 'Sookmyung Women`s University',
      period: '2025 Spring',
      level: 'Graduate course',
      description: 'Graduate School of Education',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      title: 'Mathematics Teaching Methods for Classroom Practice',
      titleKorean: '현장교육을 위한 수학교수론',
      institution: 'Korea University',
      period: '2025 Spring',
      level: 'Undergraduate course',
      description: 'Department of Mathematics Education',
      icon: <BookOpen className="w-5 h-5" />
    },
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
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12"></h3>
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
                
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h4>
                <p className="text-sm text-gray-500 mb-3">{course.titleKorean}</p>
                <p className="text-lg font-medium text-purple-600 mb-2">{course.institution}</p>
                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full mb-4">
                  {course.level}
                </span>
                <p className="text-gray-600 mb-4">{course.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Teaching


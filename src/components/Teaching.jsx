import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BookOpen, ChevronDown } from 'lucide-react'

const courses = [
  // 2026 Fall
  {
    title: 'Basic Programming for Integrated Education',
    titleKorean: '융합교육을 위한 기초 프로그래밍',
    institution: 'Seoul National University',
    period: '2026 Fall',
    level: 'Graduate course',
    description: 'Department of AI Integrated Education',
  },
  {
    title: 'Teaching Materials and Teaching Techniques of Mathematics',
    titleKorean: '수학 교재연구 및 지도법',
    institution: 'Sookmyung Women`s University',
    period: '2026 Fall',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Logic and Logical Writing in Mathematics',
    titleKorean: '논리 및 논술(수학)',
    institution: 'Sookmyung Women`s University',
    period: '2026 Fall',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Trends and Issues of AI Convergence Education',
    titleKorean: 'AI융합교육 동향과 이슈',
    institution: 'Sookmyung Women`s University',
    period: '2026 Fall',
    level: 'Graduate course',
    description: 'Graduate School of Education',
  },
  {
    title: 'Teaching Materials and Teaching Techniques of Mathematics',
    titleKorean: '수학 교재연구 및 지도법',
    institution: 'Incheon National University',
    period: '2026 Fall',
    level: 'Undergraduate course',
    description: 'Department of Mathematics Education',
  },
  {
    title: 'Integrated Perspectives on Modern Mathematics',
    titleKorean: '현대수학의 융합적 이해',
    institution: 'Cheongju National University of Education',
    period: '2026 Fall',
    level: 'Undergraduate course',
    description: 'General Education Course',
  },

  // 2026 Spring
  {
    title: 'Teaching Models of Mathematics',
    titleKorean: '수학교육론',
    institution: 'Sookmyung Women`s University',
    period: '2026 Spring',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Artificial Intelligence and Data Science',
    titleKorean: '인공지능과 데이터 사이언스',
    institution: 'Sookmyung Women`s University',
    period: '2026 Spring',
    level: 'Graduate course',
    description: 'Graduate School of Education',
  },
  {
    title: 'Teaching Models of Mathematics',
    titleKorean: '수학교과교육론',
    institution: 'Incheon National University',
    period: '2026 Spring',
    level: 'Undergraduate course',
    description: 'Department of Mathematics Education',
  },
  {
    title: 'Logic and Logical Writing in Mathematics',
    titleKorean: '수학 논리 및 논술에 관한 교육',
    institution: 'Incheon National University',
    period: '2026 Spring',
    level: 'Undergraduate course',
    description: 'Department of Mathematics Education',
  },
  {
    title: 'Integrated Perspectives on Modern Mathematics',
    titleKorean: '현대수학의 융합적 이해',
    institution: 'Cheongju National University of Education',
    period: '2026 Spring',
    level: 'Undergraduate course',
    description: 'General Education Course',
  },
  // 2025 Fall
  {
    title: 'Basic Programming for Integrated Education',
    titleKorean: '융합교육을 위한 기초 프로그래밍',
    institution: 'Seoul National University',
    period: '2025 Fall',
    level: 'Graduate course',
    description: 'Department of AI Integrated Education',
  },
  {
    title: 'Teaching Materials and Teaching Techniques of Mathematics',
    titleKorean: '수학 교재연구 및 지도법',
    institution: 'Sookmyung Women`s University',
    period: '2025 Fall',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Logic and Logical Writing in Mathematics',
    titleKorean: '논리 및 논술(수학)',
    institution: 'Sookmyung Women`s University',
    period: '2025 Fall',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Trends and Issues of AI Convergence Education',
    titleKorean: 'AI융합교육 동향과 이슈',
    institution: 'Sookmyung Women`s University',
    period: '2025 Fall',
    level: 'Graduate course',
    description: 'Graduate School of Education',
  },
  {
    title: 'Integrated Perspectives on Modern Mathematics',
    titleKorean: '현대수학의 융합적 이해',
    institution: 'Cheongju National University of Education',
    period: '2025 Fall',
    level: 'Undergraduate course',
    description: 'General Education Course',
  },
  // 2025 Spring
  {
    title: 'Teaching Models of Mathematics',
    titleKorean: '수학교육론',
    institution: 'Sookmyung Women`s University',
    period: '2025 Spring',
    level: 'Undergraduate course',
    description: 'Department of Mathematics',
  },
  {
    title: 'Trends and Issues of AI Convergence Education',
    titleKorean: 'AI융합교육 동향과 이슈',
    institution: 'Sookmyung Women`s University',
    period: '2025 Spring',
    level: 'Graduate course',
    description: 'Graduate School of Education',
  },
  {
    title: 'Artificial Intelligence and Data Science',
    titleKorean: '인공지능과 데이터 사이언스',
    institution: 'Sookmyung Women`s University',
    period: '2025 Spring',
    level: 'Graduate course',
    description: 'Graduate School of Education',
  },
  {
    title: 'Mathematics Teaching Methods for Classroom Practice',
    titleKorean: '현장교육을 위한 수학교수론',
    institution: 'Korea University',
    period: '2025 Spring',
    level: 'Undergraduate course',
    description: 'Department of Mathematics Education',
  },
]

const periodOrder = (period) => {
  const [year, term] = period.split(' ')
  return Number(year) * 2 + (term === 'Fall' ? 1 : 0)
}

const Teaching = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const coursesByPeriod = useMemo(() => {
    const grouped = courses.reduce((acc, course) => {
      if (!acc[course.period]) acc[course.period] = []
      acc[course.period].push(course)
      return acc
    }, {})

    return Object.entries(grouped).sort(
      ([a], [b]) => periodOrder(b) - periodOrder(a)
    )
  }, [])

  const [openPeriods, setOpenPeriods] = useState(() =>
    coursesByPeriod.length > 0 ? { [coursesByPeriod[0][0]]: true } : {}
  )

  const togglePeriod = (period) => {
    setOpenPeriods((prev) => ({
      ...prev,
      [period]: !prev[period]
    }))
  }

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

        <div className="space-y-4">
          {coursesByPeriod.map(([period, periodCourses], periodIndex) => {
            const isOpen = !!openPeriods[period]

            return (
              <motion.div
                key={period}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: periodIndex * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => togglePeriod(period)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-semibold text-gray-900">{period}</span>
                    <span className="text-sm text-purple-600 bg-purple-50 px-3 py-1 rounded-full font-medium">
                      {periodCourses.length} {periodCourses.length === 1 ? 'course' : 'courses'}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`${period}-content`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 grid lg:grid-cols-3 gap-6">
                        {periodCourses.map((course, index) => (
                          <motion.div
                            key={`${period}-${course.title}-${course.institution}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="bg-gray-50 p-6 rounded-2xl hover:shadow-md transition-all duration-300"
                            whileHover={{ y: -6, scale: 1.01 }}
                          >
                            <div className="flex items-center space-x-3 mb-4">
                              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                                <div className="text-purple-600">
                                  <BookOpen className="w-5 h-5" />
                                </div>
                              </div>
                            </div>

                            <h4 className="text-xl font-semibold text-gray-900 mb-1">{course.title}</h4>
                            <p className="text-sm text-gray-500 mb-3">{course.titleKorean}</p>
                            <p className="text-lg font-medium text-purple-600 mb-2">{course.institution}</p>
                            <span className="inline-block px-3 py-1 bg-white text-gray-700 text-sm rounded-full mb-4">
                              {course.level}
                            </span>
                            {course.description && (
                              <p className="text-gray-600">{course.description}</p>
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Teaching

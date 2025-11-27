import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { School, Briefcase } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      position: 'Lecturer',
      company: 'Sookmyung Women`s University',
      period: 'Mar. 2025 - Present',
      description: 'Teaching Mathematics Education Courses and AI Integrated Education Courses',
      achievements: [
        <span key="ai-course">Teaching Models of Mathematics<br />수학교육론</span>,
        <span key="ai-course">Teaching Materials and Teaching Techniques of Mathematcs<br />수학 교재연구 및 지도법</span>,
        <span key="ai-course">Logic and Logical Writing in Mathematics<br />논리 및 논술(수학)</span>,
        <span key="ai-course">Artificial Intelligence and Data Science<br />인공지능과 데이터 사이언스 </span>,
        <span key="ai-course">Trends and Issues of AI Convergence Education<br />AI융합교육 동향과 이슈</span>,
      ],
      icon: <School className="w-5 h-5" />
    },
    {
      position: 'Lecturer',
      company: 'Seoul National University',
      period: 'Sep. 2025 - Present',
      description: 'Teaching AI Integrated Education Courses',
      achievements: [
        <span key="ai-course">Basic Programming for Integrated Education<br />융합교육을 위한 기초 프로그래밍</span>,
      ],
      icon: <School className="w-5 h-5" />
    },
    {
      position: 'Lecturer',
      company: 'Cheongju National University of Education',
      period: 'Sep. 2025 - Present',
      description: 'Teaching General Education Course',
      achievements: [
        <span key="ai-course">Integrated Perspectives on Modern Mathematics<br />현대수학의 융합적 이해</span>,
      ],
      icon: <School className="w-5 h-5" />
    },
    {
      position: 'Lecturer',
      company: 'Korea University',
      period: 'Mar. 2025 - Aug. 2025',
      description: 'Teaching Mathematics Education Course',
      achievements: [
        <span key="ai-course">Mathematics Teaching Methods for Classroom Practice<br />현장교육을 위한 수학교수론</span>,
      ],
      icon: <School className="w-5 h-5" />
    },
    {
      position: 'Administrative Assistant',
      company: 'Korea Society of Educational Studies in Mathematics',
      period: 'Mar. 2018 - Feb. 2022',
      description: 'Administrative Assistant of KSESM',
      achievements: [
        <span key="ai-course">Handled administrative tasks for the academic society<br />학회 사무간사 업무 수행</span>,
      ],
      icon: <Briefcase className="w-5 h-5" />
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>

        </motion.div>

        {/* Experience Cards */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-3 gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <div className="text-blue-600">
                      {exp.icon}
                    </div>
                  </div>
                  <div>
                    <span className="text-sm text-blue-600 font-medium">{exp.period}</span>
                  </div>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{exp.position}</h4>
                <p className="text-lg font-medium text-blue-600 mb-4">{exp.company}</p>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{achievement}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience 
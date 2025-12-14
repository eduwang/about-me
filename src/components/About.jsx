import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, Target, Heart, Lightbulb, Calculator, Laptop, Database, Code, Brain } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skills = [
    { 
      name: 'Mathematics Education', 
      icon: <Calculator className="w-8 h-8" />,
      color: 'bg-blue-100 text-blue-600'
    },
    { 
      name: 'Educational Technology', 
      icon: <Laptop className="w-8 h-8" />,
      color: 'bg-purple-100 text-purple-600'
    },
    { 
      name: 'Data Science Education', 
      icon: <Database className="w-8 h-8" />,
      color: 'bg-green-100 text-green-600'
    },
    { 
      name: 'Web-Application Development for Teachers', 
      icon: <Code className="w-8 h-8" />,
      color: 'bg-orange-100 text-orange-600'
    },
    { 
      name: 'AI Integrated Education', 
      icon: <Brain className="w-8 h-8" />,
      color: 'bg-red-100 text-red-600'
    }
  ]

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: '교육 혁신',
      description: '수학 교육의 새로운 방법과 도구를 개발하여 학생들의 학습 효과를 극대화합니다.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: '학생 중심',
      description: '모든 연구와 개발이 학생들의 수학 학습 경험 향상에 초점을 맞춥니다.'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: '창의적 사고',
      description: '수학적 사고력을 기르고 창의적 문제 해결 능력을 개발하는 교육을 추구합니다.'
    }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          As a mathematics education researcher, I am interested in technology-enhanced learning environments and data science education in school mathematics.          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">About Me</h3>
                  <p className="text-gray-600">Mathematics Education Researcher & EdTech Developer</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              I am a researcher dedicated to advancing mathematics education through 
              innovative approaches and the integration of new technologies. 
              My work explores ways to enhance learning beyond traditional mathematics instruction.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
              I am particularly interested in developing web-based mathematics 
              learning tools and augmented reality environments that can be used 
              directly in classroom settings. My work aims to create learning experiences 
              that help students visually explore mathematical concepts and engage in interactive 
              practice.
              In addition, I am exploring effective ways to integrate data science education into school mathematics to enrich students' problem-solving and analytical thinking.
              </p>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className={`w-16 h-16 ${skill.color} rounded-lg flex items-center justify-center mb-3`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center leading-tight">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">연구 가치</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default About 
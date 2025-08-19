import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, Users, BookOpen, Code } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      position: '수학교육 연구원',
      company: '한국교육개발원',
      period: '2022 - 현재',
      description: '수학교육 정책 연구 및 교육과정 개발',
      achievements: [
        '수학교육과정 개정 연구 참여',
        '디지털 교과서 개발 프로젝트 주도',
        '교사 연수 프로그램 기획 및 운영'
      ],
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      position: '수학교사',
      company: '서울시교육청',
      period: '2016 - 2022',
      description: '중학교 수학 교과 지도 및 교육 연구',
      achievements: [
        '수학 학습 부진 학생 지도 프로그램 개발',
        'ICT 활용 수학 수업 모델 연구',
        '교내 수학 동아리 지도'
      ],
      icon: <Users className="w-5 h-5" />
    },
    {
      position: '교육 연구 보조원',
      company: '서울대학교 수학교육과',
      period: '2018 - 2022',
      description: '박사 과정 중 교육 연구 및 강의 보조',
      achievements: [
        '수학교육 연구 프로젝트 참여',
        '대학원 강의 보조 및 학생 지도',
        '학술 논문 작성 및 발표'
      ],
      icon: <Code className="w-5 h-5" />
    }
  ]

  const skills = [
    {
      category: '교육 연구',
      items: ['교육과정 개발', '교수법 연구', '학습 평가', '교육 통계']
    },
    {
      category: '기술 개발',
      items: ['웹 애플리케이션', '교육용 소프트웨어', '데이터 시각화', 'API 개발']
    },
    {
      category: '프로젝트 관리',
      items: ['연구 프로젝트 기획', '팀 리더십', '예산 관리', '성과 평가']
    }
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">경력 및 경험</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육 현장에서의 실무 경험과 연구 활동을 통해 
            이론과 실천을 연결하는 전문성을 쌓아왔습니다.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">주요 경력</h3>
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

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">전문 역량</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{skill.category}</h4>
                </div>
                
                <div className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">경력 하이라이트</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-blue-100">년간 교육 현장 경험</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">개 연구 프로젝트 참여</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">명의 학생 지도</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 
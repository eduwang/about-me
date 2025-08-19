import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Award, Users, Globe } from 'lucide-react'

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const publications = [
    {
      title: '디지털 기술을 활용한 수학 개념 학습의 효과성 연구',
      journal: '수학교육학연구',
      year: '2023',
      authors: '본인 외 2명',
      impact: 'KCI 등재지',
      category: '학술논문'
    },
    {
      title: '수학 학습에서 시각화 도구의 활용 방안',
      journal: '수학교육',
      year: '2022',
      authors: '본인 외 1명',
      impact: 'KCI 등재지',
      category: '학술논문'
    },
    {
      title: 'ICT 활용 수학 수업 모델 개발 및 적용',
      journal: '교육과정평가연구',
      year: '2021',
      authors: '본인',
      impact: 'KCI 등재지',
      category: '학술논문'
    }
  ]

  const conferences = [
    {
      title: '2023 한국수학교육학회 정기학술대회',
      event: '한국수학교육학회',
      date: '2023.11',
      type: '구두발표',
      topic: '수학 학습에서 AI 활용 방안'
    },
    {
      title: '2022 국제수학교육학회(ICME)',
      event: 'ICME-15',
      date: '2022.07',
      type: '포스터발표',
      topic: '디지털 교과서 활용 효과성'
    },
    {
      title: '2021 수학교육 연구방법론 워크샵',
      event: '한국수학교육학회',
      date: '2021.08',
      type: '워크샵',
      topic: '교육 연구 방법론'
    }
  ]

  const projects = [
    {
      title: '수학교육 디지털 전환 연구',
      funding: '한국연구재단',
      period: '2023-2025',
      role: '연구책임자',
      budget: '50M',
      status: '진행중'
    },
    {
      title: 'AI 기반 수학 학습 도구 개발',
      funding: '교육부',
      period: '2022-2024',
      role: '공동연구원',
      budget: '30M',
      status: '완료'
    },
    {
      title: '수학 학습 부진 학생 지도 프로그램',
      funding: '서울시교육청',
      period: '2021-2022',
      role: '연구원',
      budget: '15M',
      status: '완료'
    }
  ]

  return (
    <section id="research" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">연구 실적</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육 분야에서의 학술 연구와 실용적 개발을 통해 
            교육의 질 향상에 기여하고 있습니다.
          </p>
        </motion.div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">학술 논문</h3>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                      {pub.category}
                    </span>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{pub.year}</span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h4>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{pub.authors}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{pub.journal}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Award className="w-4 h-4" />
                    <span>{pub.impact}</span>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">학술대회 참여</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conf, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="w-4 h-4 text-purple-600" />
                  </div>
                  <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded-full font-medium">
                    {conf.type}
                  </span>
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{conf.title}</h4>
                <p className="text-blue-600 font-medium mb-2">{conf.event}</p>
                <p className="text-gray-600 text-sm mb-3">{conf.date}</p>
                <p className="text-gray-700">{conf.topic}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">연구 프로젝트</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.2 }}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === '진행중' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-lg font-bold text-purple-600">{project.budget}M</span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">연구기관:</span>
                    <span className="font-medium">{project.funding}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">연구기간:</span>
                    <span className="font-medium">{project.period}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">역할:</span>
                    <span className="font-medium">{project.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">연구 성과</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-blue-100">학술 논문</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8+</div>
                <div className="text-blue-100">학술대회 발표</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100">연구 프로젝트</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">인용 횟수</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Research 
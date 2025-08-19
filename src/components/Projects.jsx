import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Play, Code, Smartphone, Globe } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', name: '전체' },
    { id: 'education', name: '교육용' },
    { id: 'interactive', name: '인터랙티브' },
    { id: 'data', name: '데이터 시각화' }
  ]

  const projects = [
    {
      id: 1,
      title: '수학 개념 시각화 도구',
      description: '기하학적 개념을 인터랙티브하게 학습할 수 있는 웹 애플리케이션',
      category: 'education',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'TypeScript', 'Three.js', 'Framer Motion'],
      features: ['3D 기하학 모델링', '실시간 조작', '학습 진도 추적', '교사 대시보드'],
      demoUrl: 'https://math-visualization.demo',
      githubUrl: 'https://github.com/username/math-viz',
      status: '완료',
      impact: '500+ 학생들이 사용, 학습 효과 30% 향상'
    },
    {
      id: 2,
      title: '수학 학습 분석 대시보드',
      description: '학생들의 수학 학습 데이터를 분석하고 시각화하는 관리자 도구',
      category: 'data',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      features: ['실시간 데이터 분석', '학습 패턴 시각화', '성취도 예측', '리포트 생성'],
      demoUrl: 'https://math-analytics.demo',
      githubUrl: 'https://github.com/username/math-analytics',
      status: '진행중',
      impact: '교사들의 학생 지도 효율성 40% 향상'
    },
    {
      id: 3,
      title: '수학 퀴즈 게임',
      description: '게임화를 통해 수학 학습을 재미있게 만드는 모바일 친화적 웹앱',
      category: 'interactive',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'PWA', 'Canvas API', 'IndexedDB'],
      features: ['다양한 퀴즈 유형', '진행도 저장', '리더보드', '오프라인 지원'],
      demoUrl: 'https://math-quiz.demo',
      githubUrl: 'https://github.com/username/math-quiz',
      status: '완료',
      impact: '학생들의 수학 학습 시간 50% 증가'
    },
    {
      id: 4,
      title: '수학 문제 생성기',
      description: 'AI를 활용하여 개인 맞춤형 수학 문제를 자동으로 생성하는 도구',
      category: 'education',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'TensorFlow', 'FastAPI'],
      features: ['난이도별 문제 생성', '개인 맞춤형', '다양한 문제 유형', '해답 및 해설'],
      demoUrl: 'https://math-generator.demo',
      githubUrl: 'https://github.com/username/math-generator',
      status: '개발중',
      impact: '교사들의 문제 출제 시간 70% 단축'
    },
    {
      id: 5,
      title: '수학 학습 커뮤니티',
      description: '학생들이 수학 문제를 공유하고 토론할 수 있는 온라인 플랫폼',
      category: 'interactive',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Firebase', 'Real-time DB', 'Authentication'],
      features: ['실시간 채팅', '문제 공유', '해답 투표', '학습 그룹'],
      demoUrl: 'https://math-community.demo',
      githubUrl: 'https://github.com/username/math-community',
      status: '완료',
      impact: '1000+ 활성 사용자, 학습 동기 부여 증대'
    },
    {
      id: 6,
      title: '수학 성취도 예측 모델',
      description: '머신러닝을 활용하여 학생들의 수학 성취도를 예측하는 웹 서비스',
      category: 'data',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Python', 'Scikit-learn', 'Flask'],
      features: ['성취도 예측', '학습 전략 제안', '개입 시점 알림', '성과 분석'],
      demoUrl: 'https://math-prediction.demo',
      githubUrl: 'https://github.com/username/math-prediction',
      status: '완료',
      impact: '예측 정확도 85%, 조기 개입으로 성적 향상'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">개발 프로젝트</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육을 위한 다양한 웹 애플리케이션을 개발하여 
            실제 교육 현장에서 활용할 수 있는 도구들을 만들고 있습니다.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="flex space-x-2 bg-gray-100 p-2 rounded-xl">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
              whileHover={{ y: -10 }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-blue-100 to-purple-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl text-blue-600 opacity-20">수학</div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === '완료' 
                      ? 'bg-green-100 text-green-800' 
                      : project.status === '진행중'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 기능:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-5 h-5 bg-blue-100 rounded-full flex items-center justify-center">
                      <Code className="w-3 h-3 text-blue-600" />
                    </div>
                    <span className="text-sm font-semibold text-blue-800">교육적 영향</span>
                  </div>
                  <p className="text-sm text-blue-700">{project.impact}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Play className="w-4 h-4" />
                    <span>데모 보기</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-4 h-4" />
                    <span>코드</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Development Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-6">개발 역량</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">6+</div>
                <div className="text-indigo-100">웹 애플리케이션</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">10+</div>
                <div className="text-indigo-100">기술 스택</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-indigo-100">사용자</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">85%</div>
                <div className="text-indigo-100">성공률</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 
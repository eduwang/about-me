import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FileText, Globe, Link as LinkIcon, Users, ChevronDown, ChevronUp } from 'lucide-react'

const Research = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  // 각 publication의 인용 표시 상태 관리
  const [expandedCitations, setExpandedCitations] = useState({})

  const toggleCitation = (index) => {
    setExpandedCitations(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const publications = [
    {
      title: 'Exploring Research Trends in Data Science Education and Its Potential Connection to Elementary School Mathematics: Focusing on the 2022 Revised Curriculum in Korea',
      journal: 'Journal of Elementary Mathematics Education in Korea',
      year: '2025',
      category: 'Journal Article',
      language: 'KOR',
      apaCitation: 'Wang, H. & Tak, B. (2025). Exploring research trends in data science education and its potential connection to elementary school mathematics: focusing on the 2022 revised curriculum in Korea. Journal of elementary mathematics education in Korea, 29(3), 309-335.',
      apaCitationKor: '왕효원, 탁병주(2025). 데이터 과학 교육의 연구 동향 및 초등학교 수학과의 연계 가능성 탐색: 2022 개정 교육과정을 중심으로. 한국초등수학교육학회지, 29(3), 309-335.',
      doi: '10.54340/kseme.2025.29.3.6'
    },
    {
      title: 'Exploring the Educational Value of Data Science in School Mathematics: Focusing on Social Network Analysis',
      journal: 'Journal for Philosophy of Mathematics Education',
      year: '2025',
      category: 'Journal Article',
      language: 'KOR',
      apaCitation: 'Wang, H. (2025). Exploring the educational value of data science in school mathematics: focusing on social network analysis. Journal for philosophy of mathematics education, 7(1), 95-109.',
      apaCitationKor: '왕효원(2025). 학교수학에서 데이터 과학 교육의 가치 탐색: 사회 관계망 분석을 중심으로. 수학교육철학연구, 7(1), 95-109.',
      doi: '10.23027/JPME.2025.7.1.6'
    },
    {
      title: 'Mathematical Meaning-Making of the Volume of a Sphere in an Augmented Paper-Based Mathematics Learning Environment from an Embodied Cognition Perspective: A Gesture-Centered Analysis',
      journal: 'Journal of Educational Research in Mathematics',
      year: '2025',
      category: 'Journal Article',
      language: 'ENG',
      apaCitation: 'Wang, H. (2025). Mathematical meaning-making of the volume of a sphere in an augmented paper-based mathematics learning environment from an embodied cognition perspective: A gesture-centered analysis. Journal of educational research in mathematics, 35(3), 667-694.',
      apaCitationKor: 'Wang, H. (2025). Mathematical meaning-making of the volume of a sphere in an augmented paper-based mathematics learning environment from an embodied cognition perspective: A gesture-centered analysis. 수학교육학연구, 35(3), 667-694.',
      doi: '10.29275/jerm.2025.35.3.667'
    },
    {
      title: 'Designing a Mathematics Dashboard for Data-Driven Personalized Instruction: Focusing on the Cognitive Diagnostic Assessment Platform ‘MathCoDi’',
      journal: 'Journal of Educational Technology',
      year: '2025',
      category: 'Journal Article',
      language: 'KOR',
      apaCitation: 'Lim, E., Wang, H., Park, J., Koh, J., Lim, C., & Yoo, Y. (2025). Designing a mathematics dashboard for data-driven personalized instruction: Focusing on the cognitive diagnostic assessment platform ‘MathCoDi’. Journal of educational technology, 41(2), 509-546.',
      apaCitationKor: '임은선, 왕효원, 박주현, 고준보, 임철일, 유연주(2025). 데이터 기반 맞춤형 수업을 위한 수학과 대시보드 설계: 인지진단 평가 플랫폼 ‘MathCoDi’를 중심으로. 교육공학연구, 41(2), 509-546.',
      doi: '10.17232/KSET.41.2.509'
    },
    {
      title: 'Designing Augmented Reality Applications based on Artifact Centric Activity Theory: Focusing on Translation of Quadratic Function Graphs',
      journal: 'Journal for Philosophy of Mathematics Education',
      year: '2023',
      category: 'Journal Article',
      language: 'KOR',
      apaCitation: 'Wang, H. & Kim, J. (2023). Designing augmented reality applications based on artifact centric activity theory: Focusing on translation of quadratic function graphs. Journal for philosophy of mathematics education, 5(2), 155-172.',
      apaCitationKor: '왕효원, 김지영(2023). 인공물 중심 활동 이론 기반 증강현실 애플리케이션 설계. 수학교육철학연구, 5(2), 155-172.',
      doi: '10.23027/JPME.2023.5.2.3'
    },
  ]

  // APA 형식에 맞게 이름을 볼드, 학술지 이름과 권을 이탤릭 처리하는 함수 (영어용)
  const formatCitationWithBoldName = (citation) => {
    let formatted = citation
    
    // 1. 이름을 볼드 처리
    formatted = formatted.replace(/(Wang, H\.)/g, '<strong>$1</strong>')
    
    // 2. 학술지 이름과 권(Volume)을 이탤릭 처리
    // APA 형식: "제목. Journal Name, Volume(Issue), pages"
    // 제목 뒤의 마지막 점을 정확히 찾기 위해:
    // - 연도 뒤의 점 이후에서
    // - 대문자로 시작하는 학술지 이름 앞의 마지막 점을 찾음
    // - 그 점 다음부터 쉼표 전까지가 학술지 이름
    // - 쉼표 뒤 공백 다음 숫자가 권
    
    // 연도 뒤의 점 이후에서, 학술지 이름(대문자로 시작) 앞의 마지막 점 찾기
    const yearMatch = formatted.match(/\((\d{4})\)\./)
    if (yearMatch) {
      const yearIndex = formatted.indexOf(yearMatch[0]) + yearMatch[0].length
      const afterYear = formatted.substring(yearIndex)
      
      // 학술지 이름 패턴: 대문자로 시작하고, 그 뒤에 쉼표와 숫자가 옴
      const journalPattern = /\. ([A-Z][^,]+), (\d+)\(/
      const journalMatch = afterYear.match(journalPattern)
      
      if (journalMatch) {
        // 학술지 이름 앞의 점 위치 찾기
        const journalIndex = afterYear.indexOf(journalMatch[0])
        const beforeJournal = afterYear.substring(0, journalIndex)
        const journalName = journalMatch[1]
        const volume = journalMatch[2]
        const afterJournal = afterYear.substring(journalIndex + journalMatch[0].length)
        
        // 제목 부분은 그대로, 학술지 이름과 권만 이탤릭 처리
        formatted = formatted.substring(0, yearIndex) + 
                    beforeJournal + 
                    '. <em>' + journalName + '</em>, <em>' + volume + '</em>(' + 
                    afterJournal
      }
    } else {
      // 연도 패턴이 없으면 기존 방식 사용
      formatted = formatted.replace(/\. ([A-Z][^,]+), (\d+)\(/g, '. <em>$1</em>, <em>$2</em>(')
    }
    
    return formatted
  }

  // 한국어 인용 형식에 맞게 이름을 볼드, 학술지 이름과 권을 볼드 처리하는 함수
  const formatCitationKorWithBold = (citation) => {
    let formatted = citation
    
    // 1. 이름을 볼드 처리 (왕효원)
    if (formatted.includes('왕효원')) {
      formatted = formatted.replace(/(왕효원)/g, '<strong>$1</strong>')
    } else {
      formatted = formatted.replace(/(Wang, H\.)/g, '<strong>$1</strong>')
    }
    
    // 2. 학술지 이름과 권(Volume)을 볼드 처리
    // 한국어 인용 형식: "제목. 학술지 이름, 권(호), 페이지."
    // 제목 뒤의 마지막 점을 정확히 찾기 위해:
    // - 연도 뒤의 점 이후에서
    // - 학술지 이름 앞의 마지막 점을 찾음
    // - 그 점 다음부터 쉼표 전까지가 학술지 이름
    // - 쉼표 뒤 공백 다음 숫자가 권
    
    // 연도 뒤의 점 이후에서, 학술지 이름 앞의 마지막 점 찾기
    const yearMatch = formatted.match(/\((\d{4})\)\./)
    if (yearMatch) {
      const yearIndex = formatted.indexOf(yearMatch[0]) + yearMatch[0].length
      const afterYear = formatted.substring(yearIndex)
      
      // 학술지 이름 패턴: 한글이나 영문으로 시작하고, 그 뒤에 쉼표와 숫자가 옴
      const journalPattern = /\. ([^,]+), (\d+)\(/
      const journalMatch = afterYear.match(journalPattern)
      
      if (journalMatch) {
        // 학술지 이름 앞의 점 위치 찾기
        const journalIndex = afterYear.indexOf(journalMatch[0])
        const beforeJournal = afterYear.substring(0, journalIndex)
        const journalName = journalMatch[1]
        const volume = journalMatch[2]
        const afterJournal = afterYear.substring(journalIndex + journalMatch[0].length)
        
        // 제목 부분은 그대로, 학술지 이름과 권만 볼드 처리
        formatted = formatted.substring(0, yearIndex) + 
                    beforeJournal + 
                    '. <strong>' + journalName + '</strong>, <strong>' + volume + '</strong>(' + 
                    afterJournal
      }
    } else {
      // 연도 패턴이 없으면 기존 방식 사용
      formatted = formatted.replace(/\. ([^,]+), (\d+)\(/g, '. <strong>$1</strong>, <strong>$2</strong>(')
    }
    
    return formatted
  }

  const conferences = [
    {
      title: '통계적 문제 해결 관점에서 본 고등학생의 사회 관계망 분석 프로젝트 수행 과정 탐구',
      event: '제63회 수학교육학 연구논문 발표대회',
      date: '2025.12',
      type: 'Oral Presentation',
      hostedBy: '대한수학교육학회(Korean Society of Educational Studies in Mathematics)',
      author: '왕효원, 탁병주, 유연주'
    },
    {
      title: '초등학교 수학과 데이터 과학 교육의 연계 가능성 탐색: 2022 개정 교육과정을 중심으로',
      event: '2025 International Conference of the Korean Society of Mathematical Education',
      date: '2025.11',
      type: 'Oral Presentation',
      hostedBy: '한국수학교육학회(Korean Society of Mathematical Education)',
      author: '왕효원, 탁병주'
    },
    {
      title: "The Impact of Pre-Service Mathematics Teachers' Experience Progressing from Web Application Development to Lesson Design on TPACK",
      event: '2025 KMS Annual Meeting',
      date: '2025.10',
      type: 'Oral Presentation',
      hostedBy: '대한수학회(Korean Mathematical Society)',
      author: 'Hyowon WANG & Jiyoung KIM'
    },
    {
      title: 'Designing Augmented Paper-Based Mathematics Learning Environment From an Embodied Cognition Perspective: Application to the Translation of Quadratic Functions',
      event: 'EARCOME 9',
      date: '2025.07',
      type: 'Oral Presentation',
      hostedBy: 'KSME & KSESM',
      author: 'Hyowon WANG & Yun Joo YOO'
    },
    {
      title: '체화된 인지 기반 증강현실 수학 학습지 설계 및 적용: 구의 부피 개념 탐구',
      event: '제62회 수학교육학 연구논문 발표대회',
      date: '2024.12',
      type: 'Oral Presentation',
      hostedBy: '대한수학교육학회(Korean Society of Educational Studies in Mathematics)',
      author: '왕효원, 유연주'
    },
    {
      title: '가상현실 협력학습 기반 융합 교육 콘텐츠 개발',
      event: '2023 Conference of Joint Societies for Mathematics Education: KSESM, KSME',
      date: '2023.12',
      type: 'Oral Presentation',
      hostedBy: 'KSESM & KSME',
      author: '유연주, 김민정, 노하은, 왕효원, 조상연'
    },
    {
      title: '체화된 설계 기반 증강현실 활용 수학 학습 환경 설계 방안 논의',
      event: '2023 Conference of Joint Societies for Mathematics Education: KSESM, KSME',
      date: '2023.12',
      type: 'Oral Presentation',
      hostedBy: 'KSESM & KSME',
      author: '왕효원, 유연주'
    }
  ]

  const projects = [
    {
      title: '중등 수학·과학 영재 표준 교육과정 개발 연구',
      funding: '서울시교육청',
      period: '2025.04-2025.11.',
      role: '공동연구원',
      status: 'Finished'
    },
    {
      title: '디지털 기반 학생 맞춤교육 연구학교 운영 백서 발간 연구',
      funding: '서울시교육청',
      period: '2025',
      role: '공동연구원(신목중학교 담당 연구팀)',
      status: 'Finished'
    },
    {
      title: '2025년 충청남도교육청기초학력지원센터 운영',
      funding: '충청남도교육청교육과정평가원',
      period: '2025',
      role: '공동연구원(난산 실태 연구)',
      status: 'Finished'
    },
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Research</h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            수학교육 분야에서의 학술 연구와 실용적 개발을 통해 
            교육의 질 향상에 기여하고 있습니다.
          </p> */}
        </motion.div>

        {/* Publications */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Publications</h3>
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
                    <div className="flex items-center space-x-2">
                      <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                        {pub.category}
                      </span>
                      {pub.language && (
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full font-medium">
                          {pub.language}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-lg font-bold text-blue-600">{pub.year}</span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{pub.title}</h4>
                
                {/* APA Citation Toggle Button */}
                {(pub.apaCitation || pub.apaCitationKor) && (
                  <div className="mb-4">
                    <button
                      onClick={() => toggleCitation(index)}
                      className="flex items-center space-x-2 text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                      <span>Please cite this article as (APA)</span>
                      {expandedCitations[index] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedCitations[index] && (
                      <div className="mt-2 space-y-3">
                        {/* APA Citation */}
                        {pub.apaCitation && (
                          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <p 
                              className="text-sm text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: formatCitationWithBoldName(pub.apaCitation) 
                              }}
                            />
                          </div>
                        )}
                        
                        {/* APA Citation (Korean) */}
                        {pub.apaCitationKor && (
                          <div className="p-4 bg-gray-50 rounded-lg border-l-4 border-blue-500">
                            <p 
                              className="text-sm text-gray-700 leading-relaxed"
                              dangerouslySetInnerHTML={{ 
                                __html: formatCitationKorWithBold(pub.apaCitationKor) 
                              }}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
                
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{pub.journal}</span>
                  </span>
                  {pub.doi && (
                    <a 
                      href={pub.doi.startsWith('http') ? pub.doi : `https://doi.org/${pub.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                    >
                      <LinkIcon className="w-4 h-4" />
                      <span>DOI: {pub.doi}</span>
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Presentations</h3>
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
                {conf.author && (
                  <p className="text-sm text-gray-600 mb-2">{conf.author}</p>
                )}
                <p className="text-blue-600 font-medium mb-2">{conf.event}</p>
                <p className="text-gray-600 text-sm mb-3">{conf.date}</p>
                {conf.hostedBy && (
                  <p className="text-gray-700">{conf.hostedBy}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Research Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">Research Projects</h3>
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
                <div className="flex items-center justify-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === '진행중' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {project.status}
                  </span>
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
      </div>
    </section>
  )
}

export default Research 
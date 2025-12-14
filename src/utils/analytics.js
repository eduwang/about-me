// Google Analytics 초기화 및 유틸리티 함수

let isInitialized = false

/**
 * Google Analytics 초기화
 * @param {string} measurementId - Google Analytics Measurement ID
 */
export const initAnalytics = (measurementId) => {
  if (!measurementId || measurementId === '') {
    console.warn('Google Analytics Measurement ID가 설정되지 않았습니다.')
    return
  }

  // 이미 초기화되었으면 스킵
  if (isInitialized || window.gtag) {
    return
  }

  // dataLayer 초기화
  window.dataLayer = window.dataLayer || []
  
  // gtag 함수 정의
  function gtag() {
    window.dataLayer.push(arguments)
  }
  window.gtag = gtag
  gtag('js', new Date())
  
  // Google Analytics 스크립트 동적 로드
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  
  script.onload = () => {
    gtag('config', measurementId, {
      page_path: window.location.pathname,
    })
    isInitialized = true
  }
  
  document.head.appendChild(script)
}

/**
 * 환경 변수에서 Measurement ID 가져와서 초기화
 */
export const initAnalyticsFromEnv = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
  if (measurementId) {
    initAnalytics(measurementId)
  }
}

/**
 * 페이지뷰 추적
 * @param {string} path - 페이지 경로 (선택사항, 기본값: 현재 경로)
 */
export const trackPageView = (path = window.location.pathname) => {
  if (!window.gtag) {
    console.warn('Google Analytics가 초기화되지 않았습니다.')
    return
  }

  window.gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
    page_path: path,
  })
}

/**
 * 이벤트 추적
 * @param {string} eventName - 이벤트 이름
 * @param {object} eventParams - 이벤트 파라미터 (선택사항)
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (!window.gtag) {
    console.warn('Google Analytics가 초기화되지 않았습니다.')
    return
  }

  window.gtag('event', eventName, eventParams)
}

/**
 * 섹션 클릭 추적
 * @param {string} sectionName - 섹션 이름
 */
export const trackSectionClick = (sectionName) => {
  trackEvent('section_click', {
    section_name: sectionName,
  })
}

/**
 * 외부 링크 클릭 추적
 * @param {string} url - 링크 URL
 * @param {string} linkText - 링크 텍스트 (선택사항)
 */
export const trackExternalLink = (url, linkText = '') => {
  trackEvent('external_link_click', {
    link_url: url,
    link_text: linkText,
  })
}

/**
 * 프로젝트 링크 클릭 추적
 * @param {string} projectName - 프로젝트 이름
 * @param {string} linkType - 링크 타입 ('demo' 또는 'github')
 */
export const trackProjectLink = (projectName, linkType) => {
  trackEvent('project_link_click', {
    project_name: projectName,
    link_type: linkType,
  })
}


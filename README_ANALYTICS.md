# Google Analytics 설정 가이드

## 1. 환경 변수 설정

프로젝트 루트에 `.env` 파일을 생성하고 Firebase에서 발급받은 Google Analytics Measurement ID를 입력하세요.

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## 2. Firebase에서 Measurement ID 확인 방법

1. [Firebase Console](https://console.firebase.google.com/)에 접속
2. 프로젝트 선택
3. 왼쪽 메뉴에서 **Analytics** > **Analytics 설정** 선택
4. **Google Analytics** 섹션에서 Measurement ID 확인 (형식: `G-XXXXXXXXXX`)

## 3. 사용 방법

### 기본 페이지뷰 추적
앱이 로드되면 자동으로 페이지뷰가 추적됩니다.

### 이벤트 추적
컴포넌트에서 다음과 같이 사용할 수 있습니다:

```javascript
import { trackEvent, trackSectionClick, trackExternalLink, trackProjectLink } from '../utils/analytics.js'

// 일반 이벤트
trackEvent('button_click', { button_name: 'Contact' })

// 섹션 클릭 추적
trackSectionClick('About')

// 외부 링크 클릭 추적
trackExternalLink('https://example.com', 'Example Link')

// 프로젝트 링크 클릭 추적
trackProjectLink('Project Name', 'demo') // 또는 'github'
```

## 4. 개발 환경에서 테스트

개발 환경에서도 Analytics가 작동하지만, Google Analytics 대시보드에서 확인하려면 실제 배포된 사이트에서 테스트하는 것이 좋습니다.

## 5. 주의사항

- `.env` 파일은 `.gitignore`에 포함되어 있으므로 Git에 커밋되지 않습니다.
- 프로덕션 환경에서는 배포 플랫폼(Netlify 등)의 환경 변수 설정에서 `VITE_GA_MEASUREMENT_ID`를 설정해야 합니다.


# 수학교육 연구자 포트폴리오

수학교육 연구자를 위한 개인 포트폴리오 웹사이트입니다. React와 TypeScript를 사용하여 구축되었으며, Netlify를 통해 배포됩니다.

## 🚀 주요 기능

- **반응형 디자인**: 모바일과 데스크톱에서 모두 최적화된 경험
- **인터랙티브 애니메이션**: Framer Motion을 활용한 부드러운 애니메이션
- **현대적인 UI/UX**: Tailwind CSS를 사용한 세련된 디자인
- **SEO 최적화**: 메타 태그와 시맨틱 HTML 구조

## 📱 섹션 구성

1. **Hero**: 소개 및 주요 메시지
2. **About**: 개인 소개 및 전문 분야
3. **Education**: 학력 및 자격 정보
4. **Experience**: 경력 및 실무 경험
5. **Research**: 연구 실적 및 학술 활동
6. **Projects**: 개발 프로젝트 포트폴리오
7. **Contact**: 연락처 및 메시지 폼

## 🛠️ 기술 스택

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Netlify

## 🚀 시작하기

### 개발 환경 설정

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

### 환경 변수

`.env` 파일을 생성하고 필요한 환경 변수를 설정하세요:

```env
VITE_APP_TITLE=수학교육 연구자 포트폴리오
```

## 📦 프로젝트 구조

```
src/
├── components/          # React 컴포넌트
│   ├── Header.tsx      # 네비게이션 헤더
│   ├── Hero.tsx        # 히어로 섹션
│   ├── About.tsx       # 소개 섹션
│   ├── Education.tsx   # 학력 섹션
│   ├── Experience.tsx  # 경력 섹션
│   ├── Research.tsx    # 연구 실적 섹션
│   ├── Projects.tsx    # 프로젝트 섹션
│   ├── Contact.tsx     # 연락처 섹션
│   └── Footer.tsx      # 푸터
├── App.tsx             # 메인 앱 컴포넌트
├── main.tsx            # 앱 진입점
└── index.css           # 전역 스타일
```

## 🌐 배포

### Netlify 배포

1. GitHub 저장소를 Netlify에 연결
2. 빌드 명령어: `npm run build`
3. 배포 디렉토리: `dist`
4. 환경 변수 설정 (필요시)

### 수동 배포

```bash
# 프로젝트 빌드
npm run build

# dist 폴더를 웹 서버에 업로드
```

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.js`에서 색상 팔레트를 수정하세요:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#eff6ff',
        500: '#3b82f6',
        600: '#2563eb',
      }
    }
  }
}
```

### 내용 수정

각 컴포넌트 파일에서 텍스트, 이미지, 링크 등을 수정하세요.

## 📱 반응형 디자인

- **모바일**: 320px 이상
- **태블릿**: 768px 이상
- **데스크톱**: 1024px 이상

## 🔧 개발 도구

- **ESLint**: 코드 품질 관리
- **Prettier**: 코드 포맷팅
- **TypeScript**: 타입 안전성

## 📄 라이선스

MIT License

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 연락처

- **이메일**: researcher@math.edu
- **GitHub**: [@math-education-researcher](https://github.com/math-education-researcher)
- **LinkedIn**: [수학교육 연구자](https://linkedin.com/in/math-education-researcher)

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요! 
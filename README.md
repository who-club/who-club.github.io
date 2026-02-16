# WHO - 전북대학교 컴퓨터인공지능학부 동아리

전북대학교 컴퓨터인공지능학부 동아리 **WHO**의 공식 모집 웹사이트입니다.

## 소개

WHO 동아리의 활동, 비전, 모집 정보를 소개하는 싱글 페이지 웹사이트입니다. 다크 테마 기반의 모던한 UI와 스크롤 애니메이션, 커스텀 커서 등 인터랙티브 요소를 포함하고 있습니다.

## 주요 섹션

- **Hero** - 메인 배너 및 동아리 소개
- **Stats** - 동아리 현황 (50+ 부원, 연례 해커톤, 6개 활동, 핵심 스터디)
- **About** - WHO 동아리 설명
- **Activities** - 주요 활동 소개 (스터디 & 멘토링, 후커톤, 해커톤, 네트워킹, e-스포츠, 1일 1코딩)
- **Vision 2026** - 2026년 전략 목표
- **Join** - 모집 안내 및 가입 정보

## 기술 스택

- **React** 19.2
- **Vite** 7.2
- **ESLint** 9.39

## 프로젝트 구조

```
who-website/
├── public/              # 정적 파일
├── src/
│   ├── assets/          # 이미지 (로고 등)
│   ├── App.jsx          # 메인 컴포넌트
│   ├── App.css          # 스타일시트
│   ├── index.css        # 글로벌 스타일
│   └── main.jsx         # 엔트리 포인트
├── index.html           # HTML 템플릿
├── vite.config.js       # Vite 설정
├── eslint.config.js     # ESLint 설정
└── package.json
```

## 실행 방법

### 사전 요구사항

- [Node.js](https://nodejs.org/) (v18 이상 권장)
- npm (Node.js 설치 시 함께 포함)

### 설치

```bash
# 저장소 클론
git clone https://github.com/who-club/who-club.github.io.git
cd who-website

# 의존성 설치
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

실행 후 `http://localhost:5173` 에서 확인할 수 있습니다. 코드 변경 시 자동으로 반영됩니다 (HMR).

### 프로덕션 빌드

```bash
npm run build
```

빌드 결과물은 `dist/` 폴더에 생성됩니다.

### 빌드 결과 미리보기

```bash
npm run preview
```

### 린트 검사

```bash
npm run lint
```

## 연락처

- Email: jbnuwho25@gmail.com
- KakaoTalk: https://open.kakao.com/o/sjtxEBgi

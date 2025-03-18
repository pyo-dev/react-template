# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.


Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 설치
npm create vite@latest

## react 버전으로 설치가 안될경우 
- --legacy-peer-deps
- ex) npm install chart.js --legacy-peer-deps
## 1. Dependencies: 프로덕션 코드에서 사용되는 패키지들입니다.
### 기본
- "react": "^18.3.1" // React 라이브러리. UI를 구축하기 위한 핵심 라이브러리.
- "react-dom": "^18.3.1" // React의 DOM 관련 기능 제공. React와 DOM 간 상호작용을 처리.
### 추가 설치
- "axios": "^1.7.2" // HTTP 요청을 처리하기 위한 라이브러리. API 호출 및 비동기 데이터 처리를 쉽게 함.
- "chart.js": "^4.4.3" // 차트 생성을 위한 라이브러리. 다양한 그래프와 차트 시각화를 지원.
- "react-chartjs-2": "^5.2.0" // Chart.js를 React에서 쉽게 사용할 수 있도록 해주는 라이브러리. `chart.js`와 함께 사용.
- "recharts": "^2.15.0" // 차트 생성을 위한 라이브러리. 다양한 그래프와 차트 시각화를 지원. `react-chartjs-2` 와 다르게 독립적으로 사용 가능
- "date-fns": "^3.6.0" // 날짜 및 시간 처리를 위한 유틸리티 라이브러리. 경량화되고 간단하게 사용 가능.
- "exceljs": "^4.4.0" // Excel 파일 생성 및 읽기/쓰기를 지원하는 라이브러리. Excel 파일을 다루기 위한 기능 제공.
- "file-saver": "^2.0.5" // 클라이언트에서 파일 다운로드를 쉽게 처리하기 위한 라이브러리. `exceljs`와 함께 사용하여 파일을 다운로드할 수 있음.
- "react-datepicker": "^7.3.0" // React에서 날짜 선택 UI를 구현하기 위한 라이브러리.
- "react-helmet": "^6.1.0" // React 애플리케이션에서 동적으로 `<head>` 태그(메타데이터, 타이틀 등)를 관리.
- "react-sortablejs": "^6.1.4" // React에서 드래그 앤 드롭 UI를 쉽게 구현할 수 있는 라이브러리. 내부적으로 `sortablejs`에 의존하고 있어 `sortablejs`가 필요.
- "sortablejs": "^1.15.2" // 드래그 앤 드롭 UI를 구현하는 핵심 라이브러리. `react-sortablejs`와 함께 사용.
- "recoil": "^0.7.7" // React 상태 관리를 위한 라이브러리. 전역 상태 관리에 유용.
- "recoil-persist": "^5.1.0" // Recoil 상태를 브라우저 스토리지(localStorage 등)에 저장하고 복원하기 위한 라이브러리.
- "suneditor-react": "^3.6.1" // SunEditor WYSIWYG 에디터를 React에서 사용할 수 있도록 해주는 라이브러리.
- "swiper": "^11.1.4" // 슬라이더 및 캐러셀 UI를 구현하기 위한 라이브러리.

## 2. DevDependencies: 개발 환경에서만 사용되는 패키지들입니다.
### 기본
- "@types/react": "^18.3.3" // TypeScript에서 React 타입을 사용하기 위한 타입 정의 파일. React 코드에 타입 안전성을 추가.
- "@types/react-dom": "^18.3.0" // TypeScript에서 ReactDOM 관련 타입을 사용하기 위한 타입 정의 파일.
- "@vitejs/plugin-react": "^4.3.1" // Vite에서 React 프로젝트를 최적화하고 핫 리로드 등을 지원하는 플러그인.
- "eslint": "^8.57.0" // JavaScript 및 TypeScript 코드에서 코드 품질을 유지하고 오류를 방지하기 위한 정적 코드 분석 도구.
- "eslint-plugin-react": "^7.34.2" // React 프로젝트에서 `eslint`를 사용할 때 React 관련 규칙을 추가하는 플러그인.
- "eslint-plugin-react-hooks": "^4.6.2" // React Hooks 관련 규칙을 추가하는 ESLint 플러그인. Hooks 사용 시 올바른 패턴을 강제.
- "eslint-plugin-react-refresh": "^0.4.7" // React Fast Refresh와 관련된 ESLint 규칙을 추가하는 플러그인.
- "sass": "^1.77.6" // Sass를 사용하여 CSS를 더욱 효율적으로 작성할 수 있게 하는 CSS 전처리기.
- "vite": "^5.3.1" // 빠르고 최적화된 빌드 툴. React 및 다른 프레임워크를 위한 개발 서버 및 번들러 역할.
# 기능건설 (웹디자인기능사 F-01 유형 모던 리뉴얼)

본 프로젝트는 웹디자인기능사 F-01(기능건설) 공개 문제를 최신 웹 프론트엔드 트렌드와 사용자 요구 조건에 맞춰 고도화한 반응형 웹사이트입니다.

---

## 🛠 적용 기술 스택

- **HTML5**: 웹 표준 및 시맨틱 마크업, 접근성(ARIA) 준수
- **Tailwind CSS**: 유틸리티 우선 CSS 프레임워크 (CDN 기반 반응형 레이아웃 및 커스텀 테마)
- **Vanilla JavaScript**: React/jQuery 의존성 없이 순수 자바스크립트(ES6+)로 구현
- **Typography**: 
  - 영문: Google Fonts **Plus Jakarta Sans**
  - 한글: 눈누/자바스크립트 델리버 **Pretendard**
- **Icons**: [Lucide Icons](https://lucide.dev) (`<i data-lucide="..."></i>`)
- **Animation & Motion**:
  - **GSAP 3 & ScrollTrigger**: 스크롤 인터랙션, 타이포그래피 모션, 통계 카운터, 모달 트랜지션
  - **Lenis.js**: 부드러운 스크롤 (Smooth Scroll) 제어
- **Carousel Slider**: **Swiper.js 11** (페이드 전환 효과, 커스텀 네비게이션, 오토플레이)
- **배포 플랫폼**: **GitHub Pages** (정적 호스팅 지원)

---

## 📂 파일 구조

```text
F01/
├── css/
│   └── style.css            # 폰트 import, Lenis 및 Swiper 커스텀 스타일
├── images/
│   ├── slide01.png          # 메인 슬라이드 1
│   ├── slide02.png          # 메인 슬라이드 2
│   └── slide03.png          # 메인 슬라이드 3
├── script/
│   ├── jquery-3.7.1.min.js  # 기존 백업 파일
│   └── script.js            # 바닐라 JS (Lenis, GSAP, Swiper, Lucide, Modal, Tab)
├── index.html               # 메인 페이지 마크업
└── README.md                # 프로젝트 안내 및 깃허브 배포 가이드
```

---

## 🚀 GitHub Pages 배포 방법

본 프로젝트는 별도의 빌드 과정(Webpack/Vite 등)이 필요 없는 순수 HTML/CSS/Vanilla JS 정적 사이트이므로, 깃허브 저장소에 푸시 후 클릭 몇 번으로 즉시 무료 배포할 수 있습니다.

### 1단계: Git 커밋 및 푸시
```bash
git add .
git commit -m "feat: F-01 기능건설 모던 인터랙티브 웹사이트 완성"
git branch -M main
git remote add origin https://github.com/사용자아이디/저장소이름.git
git push -u origin main
```

### 2단계: GitHub Pages 활성화
1. GitHub 웹사이트의 해당 저장소(Repository) 페이지로 이동합니다.
2. 상단 탭에서 **Settings**를 클릭합니다.
3. 좌측 사이드바 메뉴 중 **Pages** 항목을 클릭합니다.
4. **Build and deployment** 섹션의 **Source**를 `Deploy from a branch`로 설정합니다.
5. **Branch** 설정에서 `main` 브랜치 및 `/(root)` 폴더를 선택한 뒤 **Save** 버튼을 누릅니다.
6. 약 1~2분 후 상단에 생성된 배포 URL (`https://사용자아이디.github.io/저장소이름/`)을 확인할 수 있습니다.

---

## ✨ 주요 기능 및 특징

1. **와이드 메인 슬라이더 (Swiper.js + GSAP)**
   - 3장의 슬라이드가 부드러운 Fade 효과로 전환되며, 전환 시 슬라이드 내 텍스트와 버튼이 GSAP 애니메이션으로 나타납니다.
2. **슬라이더 오버랩 퀵링크 (F-01 와이어프레임 구조)**
   - 슬라이더 하단과 음수 마진(-mt)으로 겹쳐지는 세련된 4개 바로가기 카드 UI 제공.
3. **부드러운 스크롤 (Lenis.js & ScrollTrigger)**
   - 마우스 휠 스크롤 시 고급스러운 관성 스크롤(Inertia Scroll)을 제공하며, 스크롤 위치에 맞춰 헤더 축소, 카드 진입, 통계 카운터 모션이 동작합니다.
4. **공지사항 & 갤러리 탭 (Vanilla JS)**
   - 순수 바닐라 JS로 탭 전환 시 부드러운 페이드 효과를 구현했습니다.
5. **모달 팝업 레이어 (웹디자인기능사 핵심 요건)**
   - 첫 번째 공지사항 클릭 시 나타나는 팝업 레이어. 닫기 버튼, 외부 배경 클릭, 키보드 ESC 키를 지원하며, 팝업 오픈 시 스크롤 잠금 처리가 적용되어 있습니다.
6. **반응형 웹 디자인 (Responsive Design)**
   - 데스크톱(1340px 기준) 뿐만 아니라 태블릿, 모바일 기기에서도 자연스럽게 정렬되며, 모바일 전용 햄버거 메뉴 및 슬라이드 드로어를 지원합니다.


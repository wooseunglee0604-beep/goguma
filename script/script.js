/**
 * 눈쟁DB - 게이밍 기어 벤치마크 & 추천 데이터베이스
 * 기술 스택: Pure Vanilla JS + Lenis.js + GSAP & ScrollTrigger + Swiper.js + Lucide Icons
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ===================================================
   * 1. Lucide Icons 초기화
   * =================================================== */
  if (window.lucide) {
    lucide.createIcons();
  }

  /* ===================================================
   * 2. Lenis 부드러운 스크롤 & GSAP ScrollTrigger 동기화
   * =================================================== */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  let lenis = null;
  if (typeof Lenis !== 'undefined') {
    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.8,
    });

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      lenis.on('scroll', ScrollTrigger.update);

      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });

      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  /* ===================================================
   * 3. Swiper 띠배너 슬라이더 초기화
   * =================================================== */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.promo-swiper', {
      loop: true,
      speed: 600,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-btn-next',
        prevEl: '.swiper-btn-prev',
      },
      effect: 'slide',
    });
  }

  /* ===================================================
   * 4. 벤치마크 TOP 10 데이터베이스
   * =================================================== */
  const benchDatabase = {
    monitor: {
      '24': [
        { rank: 1, name: '에이수스 ROG Swift PG248QP', tag: '무결점', latency: '0.2ms', price: '1,290,000원', review: '현존 최고 주사율 게이밍 모니터, 완벽한 모션 클리어리티' },
        { rank: 2, name: '벤큐 ZOWIE XL2566K', tag: '무결점', latency: '0.5ms', price: '940,000원', review: 'DyAc+ 탑재로 FPS 프로 선수들이 가장 선호하는 모니터' },
        { rank: 3, name: '한성컴퓨터 TFG24F24T', tag: '무결점', latency: '1.0ms', price: '199,000원', review: '가성비 최고의 240Hz 패널, 입문용 FPS 최강자' },
        { rank: 4, name: '유지코리아 VG245F165', tag: '1티어', latency: '1.2ms', price: '145,000원', review: '10만원대 초반의 경이로운 가성비와 안정적 패널' },
        { rank: 5, name: '에이서 Nitro XV242 F', tag: '1티어', latency: '0.5ms', price: '680,000원', review: '390Hz 오버클럭 지원으로 극한의 부드러움 제공' },
        { rank: 6, name: '델 Alienware AW2524H', tag: '1티어', latency: '0.3ms', price: '1,190,000원', review: 'IPS 500Hz 패널과 화려한 에일리언웨어 디자인' },
        { rank: 7, name: 'LG 울트라기어 24GN600', tag: '2티어', latency: '1.0ms', price: '189,000원', review: '믿고 쓰는 LG IPS 패널의 정확한 색감과 응답속도' },
        { rank: 8, name: '벤큐 ZOWIE XL2546K', tag: '2티어', latency: '0.5ms', price: '690,000원', review: '검증된 240Hz DyAc+ 벤큐 스테디셀러' },
        { rank: 9, name: '알파스캔 에이곤 25G3ZM', tag: '2티어', latency: '0.8ms', price: '269,000원', review: 'VA 고명암비 240Hz로 영상과 게임 둘 다 만족' },
        { rank: 10, name: '삼성 오디세이 G4 S25BG400', tag: '2티어', latency: '1.0ms', price: '249,000원', review: '삼성이 선보이는 25인치 240Hz 표준형 게이밍 모니터' }
      ],
      '27': [
        { rank: 1, name: '에이수스 ROG Swift OLED PG27AQDM', tag: '무결점', latency: '0.03ms', price: '1,390,000원', review: 'WOLED의 압도적 명암비와 즉각적인 0.03ms 픽셀 응답' },
        { rank: 2, name: 'LG 울트라기어 27GS95QE', tag: '무결점', latency: '0.03ms', price: '1,290,000원', review: '2세대 MLA OLED 패널로 밝기까지 정복한 모니터' },
        { rank: 3, name: '삼성 오디세이 OLED G6', tag: '무결점', latency: '0.03ms', price: '1,150,000원', review: 'QHD 360Hz 초고주사율 OLED의 끝판왕' },
        { rank: 4, name: '벤큐 ZOWIE XL2746K', tag: '무결점', latency: '0.5ms', price: '890,000원', review: '27인치 대화면에서 느끼는 DyAc+ 정밀 조준' },
        { rank: 5, name: 'MSI MAG 274UPF 4K', tag: '1티어', latency: '1.0ms', price: '549,000원', review: '4K 해상도와 144Hz의 완벽한 밸런스' },
        { rank: 6, name: '델 Alienware AW2723DF', tag: '1티어', latency: '1.0ms', price: '850,000원', review: 'Fast IPS 280Hz 지원 튼튼한 만듦새' },
        { rank: 7, name: '기가바이트 M27Q X', tag: '2티어', latency: '1.0ms', price: '499,000원', review: 'KVM 스위치와 240Hz를 겸비한 전천후 모니터' },
        { rank: 8, name: '한성 TFG27Q24P', tag: '2티어', latency: '1.0ms', price: '289,000원', review: 'QHD 240Hz를 이 가격에 경험할 수 있는 가성비' },
        { rank: 9, name: '알파스캔 AOC Q27G2SD', tag: '2티어', latency: '1.0ms', price: '319,000원', review: '알파스캔 특유의 화사한 색감과 든든한 AS' },
        { rank: 10, name: '에이수스 TUF VG27AQML1A', tag: '2티어', latency: '1.0ms', price: '489,000원', review: 'TUF 라인업의 내구성과 260Hz 오버클럭 지원' }
      ],
      '32': [
        { rank: 1, name: '삼성 오디세이 OLED G8 G80SD', tag: '무결점', latency: '0.03ms', price: '1,590,000원', review: '스마트 OS와 4K 240Hz QD-OLED의 종결자' },
        { rank: 2, name: 'LG 울트라기어 32GS95UE', tag: '무결점', latency: '0.03ms', price: '1,890,000원', review: '버튼 하나로 4K 240Hz와 FHD 480Hz 모드 전환' },
        { rank: 3, name: '에이수스 ROG Swift PG32UCDM', tag: '무결점', latency: '0.03ms', price: '1,990,000원', review: '돌비 비전과 KVM 스위치까지 갖춘 프리미엄 OLED' },
        { rank: 4, name: '델 Alienware AW3225QF', tag: '1티어', latency: '0.03ms', price: '1,690,000원', review: '곡률 1700R 커브드로 최고의 몰입감 선사' },
        { rank: 5, name: 'MSI MPG 321URX QD-OLED', tag: '1티어', latency: '0.03ms', price: '1,490,000원', review: '합리적인 가격의 3세대 QD-OLED 모니터' },
        { rank: 6, name: '기가바이트 AORUS FO32U2P', tag: '1티어', latency: '0.03ms', price: '1,790,000원', review: 'DP 2.1 대역폭을 온전히 지원하는 차세대 패널' },
        { rank: 7, name: 'LG 울트라기어 32GQ950', tag: '2티어', latency: '1.0ms', price: '1,190,000원', review: 'ATW 편광판 적용 나노 IPS 4K 플래그십' },
        { rank: 8, name: '삼성 오디세이 Neo G8 32형', tag: '2티어', latency: '1.0ms', price: '1,290,000원', review: '퀀텀 미니 LED 2000니트 눈부신 HDR 구현' },
        { rank: 9, name: '에이서 Predator X32 FP', tag: '2티어', latency: '0.7ms', price: '1,390,000원', review: '로컬 디밍 576존의 깊은 블랙 표현' },
        { rank: 10, name: '벤큐 모비우스 EX3210U', tag: '2티어', latency: '1.0ms', price: '990,000원', review: '트레볼로 2.1채널 고음질 사운드 내장' }
      ]
    },

    keyboard: {
      rapid: [
        { rank: 1, name: '사운드판스 VENOM 87/60HE', tag: '무결점', latency: '0.12ms', price: '104,000원', review: '우팅 이상의 래피드 트리거 성능과 경이로운 기판 반응속도' },
        { rank: 2, name: '사운드판스 VENOM 60HE', tag: '무결점', latency: '0.12ms', price: '98,000원', review: '60% 콤팩트 배열에 맞춘 독보적인 자석축 성능' },
        { rank: 3, name: '사운드판스 VENOM 60HE RGB (V2)', tag: '무결점', latency: '0.12ms', price: '115,000원', review: 'RGB LED 튜닝과 개선된 펌웨어 탑재 버전' },
        { rank: 4, name: '바밀로 68AT80', tag: '1티어', latency: '0.18ms', price: '189,000원', review: '바밀로의 환상적인 하우징 마감과 자석축의 결합' },
        { rank: 5, name: '몬스타기어 MK60', tag: '1티어', latency: '0.20ms', price: '89,000원', review: '10만원 미만 최고의 래피드 트리거 입문기' },
        { rank: 6, name: '우팅 60HE+ (Wooting)', tag: '1티어', latency: '0.13ms', price: '280,000원', review: '래피드 트리거 시대를 개척한 원조이자 소프트웨어 원탑' },
        { rank: 7, name: '레이저 Huntsman V3 Pro TKL', tag: '1티어', latency: '0.15ms', price: '310,000원', review: '아날로그 2세대 옵티컬 스위치와 든든한 알루미늄 탑' },
        { rank: 8, name: '스틸시리즈 Apex Pro TKL (2023)', tag: '2티어', latency: '0.16ms', price: '299,000원', review: 'OLED 디스플레이와 0.1mm 단위 조절 옴니포인트' },
        { rank: 9, name: '드렁크디어 A75 Pro', tag: '2티어', latency: '0.22ms', price: '159,000원', review: '노브가 장착된 75% 실용적인 자석축 키보드' },
        { rank: 10, name: '키크론 Q1 HE QMK', tag: '2티어', latency: '0.25ms', price: '298,000원', review: '풀알루미늄 바디와 무선 연결을 지원하는 고급 기종' }
      ],
      normal: [
        { rank: 1, name: '체리 MX Board 3.0S 무보강', tag: '무결점', latency: '1.2ms', price: '79,000원', review: '보강판이 없어 손가락 충격이 적고 순수한 체리 타건감' },
        { rank: 2, name: '커세어 K70 RGB PRO', tag: '무결점', latency: '0.25ms', price: '219,000원', review: 'AXON 기술로 8000Hz 하이퍼 폴링레이트 지원' },
        { rank: 3, name: '로지텍 G PRO X TKL LIGHTSPEED', tag: '1티어', latency: '1.0ms', price: '249,000원', review: '프로게이머들의 오랜 신뢰를 받는 라이트스피드 무선' },
        { rank: 4, name: '레이저 BlackWidow V4 Pro', tag: '1티어', latency: '0.3ms', price: '320,000원', review: '다양한 매크로 키와 화려한 언더글로우 RGB 감성' },
        { rank: 5, name: '한성 TFG ART 무접점 35g', tag: '2티어', latency: '2.0ms', price: '149,000원', review: '보글보글 부드러운 타건감과 35g 가벼운 압력' },
        { rank: 6, name: '앱코 KN01 BT 무접점', tag: '2티어', latency: '2.2ms', price: '139,000원', review: '블루투스 유무선 겸용 가성비 정전용량 무접점' },
        { rank: 7, name: '콕스 엔데버 무접점 50g', tag: '3티어', latency: '2.0ms', price: '129,000원', review: 'IP68 방수 방진 설계로 음료를 쏟아도 안심' },
        { rank: 8, name: '엠스톤 그루브 GV8 풀윤활', tag: '3티어', latency: '1.5ms', price: '175,000원', review: '공장 풀윤활로 완성도 높은 저소음 밀키축 타건감' },
        { rank: 9, name: '덱 헤슘 거북선 프랑슘', tag: '3티어', latency: '1.0ms', price: '185,000원', review: '이중사출 PBT 키캡과 뛰어난 내구성의 전설' },
        { rank: 10, name: '레오폴드 FC750R BT', tag: '3티어', latency: '1.5ms', price: '168,000원', review: '기계식 키보드의 교과서, 완벽한 키캡 품질' }
      ]
    },

    mouse: {
      symmetric: [
        { rank: 1, name: '레이저 VIPER V3 PRO', tag: '무결점', latency: '0.12ms', price: '239,000원', review: '54g 초경량과 8000Hz 폴링레이트로 에임 흔들림 제로' },
        { rank: 2, name: 'ATK X1 V2 Ultimate 7.0+', tag: '무결점', latency: '0.15ms', price: '98,000원', review: 'PAW3950 센서와 노르딕 MCU 탑재 가성비 최강 대칭형' },
        { rank: 3, name: 'ATK A9 Max (master)', tag: '무결점', latency: '0.16ms', price: '89,000원', review: '안정적인 클릭압과 완벽한 쉘 마감의 게이밍 마우스' },
        { rank: 4, name: 'ATK A9 Mini+', tag: '무결점', latency: '0.16ms', price: '85,000원', review: '작은 손 유저와 핑거그립에 최적화된 미니 쉘' },
        { rank: 5, name: 'ATK A9 Ultimate+', tag: '무결점', latency: '0.15ms', price: '92,000원', review: 'ATK 시리즈의 정점을 찍은 플래그십 무선 모델' },
        { rank: 6, name: '로지텍 G PRO X SUPERLIGHT 2', tag: '1티어', latency: '0.25ms', price: '199,000원', review: 'HERO 2 센서와 광축 스위치로 업그레이드된 국민 마우스' },
        { rank: 7, name: '람주 아틀란티스 OG V2 4K', tag: '1티어', latency: '0.20ms', price: '149,000원', review: '클로그립 유저들의 열렬한 찬사를 받는 엉덩이 쉘' },
        { rank: 8, name: '벡시 XE-S Wireless', tag: '1티어', latency: '0.22ms', price: '169,000원', review: '프로들의 피드백으로 완성된 절제된 클릭감과 그립감' },
        { rank: 9, name: '펄사 X2V2 Wireless', tag: '2티어', latency: '0.24ms', price: '139,000원', review: '광학식 스위치와 53g 가벼운 무게의 국내 브랜드 자존심' },
        { rank: 10, name: '파이널마우스 울트라라이트X', tag: '2티어', latency: '0.15ms', price: '320,000원', review: '카본 복합소재로 실현한 30g대 충격적인 초경량 마우스' }
      ],
      asymmetric: [
        { rank: 1, name: '레이저 DEATHADDER V3 PRO', tag: '1티어', latency: '0.12ms', price: '219,000원', review: '팜그립의 영원한 왕자, 데스에더 역사상 가장 가벼운 63g' },
        { rank: 2, name: '조위 EC2-CW Wireless', tag: '1티어', latency: '0.35ms', price: '198,000원', review: '수많은 복제 쉘을 낳은 e스포츠 인체공학 쉘의 원조 무선' },
        { rank: 3, name: '펄사 Xlite V3 eS', tag: '1티어', latency: '0.20ms', price: '169,000원', review: '하단 OLED로 소프트웨어 없이 모든 세팅 조절 가능' },
        { rank: 4, name: '벡시 AX Wireless', tag: '1티어', latency: '0.22ms', price: '169,000원', review: '손바닥을 꽉 채워주는 최상의 밀착감을 자랑하는 비대칭 쉘' },
        { rank: 5, name: '로지텍 G502 X PLUS', tag: '2티어', latency: '0.50ms', price: '219,000원', review: '듀얼 모드 무한 휠과 풍부한 다기능 버튼을 갖춘 올라운더' },
        { rank: 6, name: '레이저 Basilisk V3 Pro', tag: '2티어', latency: '0.25ms', price: '249,000원', review: '포커스 프로 30K 센서와 크로마 RGB의 화려한 결합' },
        { rank: 7, name: '글로리어스 모델 D 2 PRO', tag: '2티어', latency: '0.18ms', price: '159,000원', review: '타공 없이 깔끔해진 60g 초경량 비대칭 e스포츠 마우스' },
        { rank: 8, name: '에이수스 ROG Keris II Ace', tag: '2티어', latency: '0.15ms', price: '189,000원', review: '42g 비대칭 마우스 중 가장 가벼운 인체공학 폼팩터' },
        { rank: 9, name: '체리 Xtrfy M8 Wireless', tag: '3티어', latency: '0.30ms', price: '149,000원', review: '앞코가 4mm로 극도로 낮아 정밀한 컨트롤을 돕는 쉘' },
        { rank: 10, name: '로캣 콘 프로 에어', tag: '3티어', latency: '0.40ms', price: '99,000원', review: '손에 촥 감기는 로캣 콘 쉘과 반투명 바이오닉 RGB 디자인' }
      ]
    }
  };

  // 추천 제품 4종 데이터
  const recommendProducts = {
    'rec-monitor': {
      title: '에이수스 QHD WOLED ROG SWIFT',
      category: '모니터 추천',
      price: '1,390,000원',
      badge: 'OLED 540Hz 0.02ms',
      spec: '27인치 QHD (2560x1440) | WOLED | 540Hz 고주사율 | VESA 디스플레이 HDR',
      latency: '픽셀 응답속도 0.02ms / 인풋렉 0.8ms',
      review: 'OLED 패널의 무한 명암비와 540Hz의 미친 주사율이 만나 조준선 트래킹 시 잔상이 완전히 사라지는 기적을 보여줍니다.'
    },
    'rec-mouse': {
      title: 'G PRO X2 SUPERSTRIKE',
      category: '마우스 추천',
      price: '278,000원',
      badge: 'HERO 2 센서 44g',
      spec: '44g 초경량 | LIGHTFORCE 하이브리드 옵티컬-기계식 스위치 | 무선 4000Hz 폴링',
      latency: '클릭 레이턴시 0.15ms / 트래킹 오차 0.01%',
      review: '지슈라의 계보를 잇는 최정상 무선 게이밍 마우스로, 가벼운 무게와 안정적인 밸런스가 조화를 이룹니다.'
    },
    'rec-keyboard': {
      title: '사운드판스 VENOM 60HE PCB',
      category: '키보드 추천',
      price: '104,000원',
      badge: '자석축 0.1mm 조절',
      spec: '홀 이펙트 자석축 | 0.1mm ~ 4.0mm 작동점 조절 | 우팅 60HE 하우징 100% 호환',
      latency: '입력 레이턴시 0.12ms (세계 최상위권)',
      review: '우팅을 위협하는 독보적 가성비의 래피드 트리거 PCB. 발로란트 및 카운터스트라이크 브레이킹에 혁신을 줍니다.'
    },
    'rec-pad': {
      title: '아티산 NINJA FX HIEN XSOFT',
      category: '마우스패드 추천',
      price: 'JP¥3,300 ~ JP¥7,400',
      badge: 'ARTISAN PORON BASE',
      spec: '아무레다 표면 직조 | 포른(PORON) 쿠션 베이스 | XSOFT 쿠션감 | 완전 평면 오버로크',
      latency: '초기 마찰 낮음 / 제동력 상급 밸런스 패드',
      review: '습기에 전혀 영향을 받지 않는 특수 직조 표면과 바닥에 착 달라붙는 포른 베이스로 명실상부 세계 1등 패드입니다.'
    }
  };

  /* ===================================================
   * 5. 벤치 리스트 렌더링 함수
   * =================================================== */
  function renderBenchCategory(categoryKey, subKey) {
    const listContainer = document.getElementById(`${categoryKey}List`);
    if (!listContainer) return;

    const items = benchDatabase[categoryKey][subKey];
    if (!items) return;

    // 1~5위 (기본 노출)
    const top5 = items.slice(0, 5);
    // 6~10위 (펼치기 시 노출)
    const extra5 = items.slice(5, 10);

    const makeItemHTML = (item) => {
      const rankColorClass = item.rank === 1 ? 'rank-1 font-black' : item.rank === 2 ? 'rank-2 font-black' : item.rank === 3 ? 'rank-3 font-bold' : 'text-zinc-500 font-bold';

      // 카테고리별 미니 아이콘 SVG
      let iconSvg = '';
      if (categoryKey === 'monitor') {
        iconSvg = `<svg class="w-4 h-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`;
      } else if (categoryKey === 'keyboard') {
        iconSvg = `<svg class="w-4 h-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><circle cx="6" cy="8" r="1" fill="currentColor"/><circle cx="10" cy="8" r="1" fill="currentColor"/><circle cx="14" cy="8" r="1" fill="currentColor"/><circle cx="18" cy="8" r="1" fill="currentColor"/><circle cx="8" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="16" cy="12" r="1" fill="currentColor"/><line x1="7" y1="16" x2="17" y2="16"/></svg>`;
      } else {
        iconSvg = `<svg class="w-4 h-4 text-zinc-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="7"/><line x1="12" y1="6" x2="12" y2="10"/></svg>`;
      }

      return `
        <div class="bench-item" data-category="${categoryKey}" data-rank="${item.rank}" data-name="${item.name}" data-tag="${item.tag}" data-latency="${item.latency}" data-price="${item.price}" data-review="${item.review}">
          <div class="flex items-center gap-2.5 min-w-0 pr-2">
            <span class="bench-rank w-6 min-w-[24px] flex-shrink-0 text-center text-sm font-tech tabular-nums ${rankColorClass}">${item.rank}</span>
            <div class="bench-icon w-7 h-7 min-w-[28px] rounded-lg bg-zinc-200/90 flex-shrink-0 flex items-center justify-center border border-zinc-300">
              ${iconSvg}
            </div>
            <span class="text-xs font-semibold text-zinc-800 truncate hover:text-zinc-950">${item.name}</span>
          </div>
          <span class="text-[11px] font-bold text-zinc-600 font-tech whitespace-nowrap bg-zinc-100 px-2 py-0.5 rounded border border-zinc-200">${item.tag}</span>
        </div>
      `;
    };

    const top5HTML = top5.map(makeItemHTML).join('');
    const extra5HTML = extra5.map(makeItemHTML).join('');

    listContainer.innerHTML = `
      <div class="space-y-2">
        ${top5HTML}
      </div>
      <div class="bench-extra-items space-y-2 mt-2" id="${categoryKey}Extra">
        ${extra5HTML}
      </div>
    `;

    // 펼치기 버튼 상태 초기화
    const expandBtn = document.querySelector(`.expand-btn[data-target="${categoryKey}List"]`);
    if (expandBtn) {
      expandBtn.querySelector('span').textContent = '펼치기';
      const chevron = expandBtn.querySelector('svg, i');
      if (chevron) chevron.style.transform = 'rotate(0deg)';
      const extraDiv = document.getElementById(`${categoryKey}Extra`);
      if (extraDiv) extraDiv.classList.remove('is-open');
    }

    // 아이템 클릭 이벤트 바인딩 (모달 열기)
    listContainer.querySelectorAll('.bench-item').forEach(itemEl => {
      itemEl.addEventListener('click', () => {
        openModalWithData({
          title: itemEl.dataset.name,
          category: `${categoryKey.toUpperCase()} TOP ${itemEl.dataset.rank}`,
          price: itemEl.dataset.price || '가격 비교 중',
          badge: itemEl.dataset.tag,
          spec: `${itemEl.dataset.name} (${itemEl.dataset.tag})`,
          latency: itemEl.dataset.latency || '측정치 우수',
          review: itemEl.dataset.review || '눈쟁DB 검증 추천 기기입니다.'
        });
      });
    });

    // GSAP 부드러운 전환 효과
    if (typeof gsap !== 'undefined') {
      gsap.fromTo(listContainer.children, 
        { opacity: 0, y: 6 }, 
        { opacity: 1, y: 0, duration: 0.25, stagger: 0.03, ease: 'power2.out' }
      );
    }
  }

  // 초기 렌더링
  renderBenchCategory('monitor', '24');
  renderBenchCategory('keyboard', 'rapid');
  renderBenchCategory('mouse', 'symmetric');

  /* ===================================================
   * 6. 탭 전환 버튼 클릭 이벤트 핸들링
   * =================================================== */
  function setupTabs(containerId, categoryKey) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const buttons = container.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active-tab'));
        btn.classList.add('active-tab');
        const subKey = btn.dataset.sub;
        renderBenchCategory(categoryKey, subKey);
        if (typeof ScrollTrigger !== 'undefined') {
          ScrollTrigger.refresh();
        }
      });
    });
  }

  setupTabs('monitorTabs', 'monitor');
  setupTabs('keyboardTabs', 'keyboard');
  setupTabs('mouseTabs', 'mouse');

  /* ===================================================
   * 7. '펼치기/접기' 토글 버튼 아코디언 핸들러
   * =================================================== */
  const expandButtons = document.querySelectorAll('.expand-btn');
  expandButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetListId = btn.dataset.target;
      const categoryKey = targetListId.replace('List', '');
      const extraDiv = document.getElementById(`${categoryKey}Extra`);
      const spanText = btn.querySelector('span');
      const chevron = btn.querySelector('svg, i');

      if (!extraDiv) return;

      const isOpen = extraDiv.classList.contains('is-open');

      if (isOpen) {
        extraDiv.classList.remove('is-open');
        spanText.textContent = '펼치기';
        if (chevron) chevron.style.transform = 'rotate(0deg)';
      } else {
        extraDiv.classList.add('is-open');
        spanText.textContent = '접기';
        if (chevron) chevron.style.transform = 'rotate(180deg)';

        // 펼쳐질 때 추가 아이템 애니메이션
        if (typeof gsap !== 'undefined') {
          gsap.fromTo(extraDiv.querySelectorAll('.bench-item'),
            { opacity: 0, x: -10 },
            { opacity: 1, x: 0, duration: 0.25, stagger: 0.04, ease: 'power2.out' }
          );
        }
      }

      // 아코디언 펼침/접힘으로 인한 높이 변화 후 ScrollTrigger 위치 좌표 갱신
      if (typeof ScrollTrigger !== 'undefined') {
        setTimeout(() => {
          ScrollTrigger.refresh();
        }, 360);
      }
    });
  });

  /* ===================================================
   * 8. 카테고리 네비게이션 클릭 시 스무스 스크롤 이동
   * =================================================== */
  // 카테고리 네비게이션은 각 벤치마크 페이지로 이동하도록 기본 링크 동작을 사용합니다.

  /* ===================================================
   * 9. 추천 기기 카드 클릭 시 모달창 팝업 연동
   * =================================================== */
  document.querySelectorAll('.recommend-card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const data = recommendProducts[id];
      if (data) {
        openModalWithData(data);
      }
    });
  });

  /* ===================================================
   * 10. 모달 열기/닫기 로직
   * =================================================== */
  const modal = document.getElementById('productModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalPrice = document.getElementById('modalPrice');
  const modalBadge = document.getElementById('modalBadge');
  const modalSpec = document.getElementById('modalSpec');
  const modalLatency = document.getElementById('modalLatency');
  const modalReview = document.getElementById('modalReview');

  function openModalWithData(data) {
    if (!modal) return;
    modalTitle.textContent = data.title;
    modalCategory.textContent = data.category;
    modalPrice.textContent = data.price;
    modalBadge.textContent = data.badge;
    modalSpec.textContent = data.spec;
    modalLatency.textContent = data.latency;
    modalReview.textContent = data.review;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeModal);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  /* ===================================================
   * 11. 검색 기능 및 제안 드롭다운
   * =================================================== */
  const searchInput = document.getElementById('searchInput');
  const searchDropdown = document.getElementById('searchDropdown');
  const searchBtn = document.getElementById('searchBtn');

  if (searchInput && searchDropdown) {
    searchInput.addEventListener('focus', () => {
      searchDropdown.classList.remove('hidden');
    });

    searchInput.addEventListener('blur', () => {
      setTimeout(() => {
        searchDropdown.classList.add('hidden');
      }, 250);
    });

    // 인기 검색 태그 클릭 시 검색창 자동 채우기 및 스크롤
    document.querySelectorAll('.search-tag').forEach(tag => {
      tag.addEventListener('click', () => {
        searchInput.value = tag.textContent;
        searchDropdown.classList.add('hidden');
        performSearch(tag.textContent);
      });
    });

    // 엔터키 검색
    searchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        performSearch(searchInput.value.trim());
      }
    });

    if (searchBtn) {
      searchBtn.addEventListener('click', () => {
        performSearch(searchInput.value.trim());
      });
    }
  }

  function performSearch(keyword) {
    if (!keyword) return;

    // 추천 카드 검색 매칭
    const recCards = document.querySelectorAll('.recommend-card');
    let found = false;

    recCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      if (text.includes(keyword.toLowerCase())) {
        if (!found) {
          found = true;
          if (lenis) {
            lenis.scrollTo(card, { offset: -120, duration: 1.0 });
          } else {
            card.scrollIntoView({ behavior: 'smooth' });
          }
          if (typeof gsap !== 'undefined') {
            gsap.fromTo(card, { scale: 0.95 }, { scale: 1.05, yoyo: true, repeat: 1, duration: 0.3 });
          }
        }
      }
    });

    if (!found) {
      // 벤치마크 섹션으로 이동
      const bench = document.getElementById('benchSection');
      if (bench) {
        if (lenis) {
          lenis.scrollTo(bench, { offset: -80, duration: 1.0 });
        } else {
          bench.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  }

  /* ===================================================
   * 12. 플로팅 스크롤 탑 버튼
   * =================================================== */
  const floatingTopBtn = document.getElementById('floatingTopBtn');

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.1 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  if (floatingTopBtn) {
    floatingTopBtn.addEventListener('click', scrollToTop);

    // 스크롤 감지에 따른 플로팅 탑 버튼 페이드 인/아웃
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      if (scrollY > 350) {
        floatingTopBtn.classList.remove('opacity-0', 'pointer-events-none');
        floatingTopBtn.classList.add('opacity-100', 'pointer-events-auto');
      } else {
        floatingTopBtn.classList.add('opacity-0', 'pointer-events-none');
        floatingTopBtn.classList.remove('opacity-100', 'pointer-events-auto');
      }
    }, { passive: true });
  }

  /* ===================================================
   * 13. GSAP & ScrollTrigger 인트로 & 스크롤 애니메이션
   * =================================================== */
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    // 1) 헤더 및 카테고리 네비 등장
    gsap.from('#heroNavSection .category-nav-card', {
      opacity: 0,
      y: 20,
      duration: 0.7,
      stagger: 0.1,
      ease: 'power3.out',
      delay: 0.1,
      clearProps: 'transform,opacity'
    });

    // 2) 벤치마크 컬럼 ScrollTrigger
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.fromTo('.bench-column',
        {
          opacity: 0,
          y: 35
        },
        {
          scrollTrigger: {
            trigger: '#benchSection',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // 3) 추천 기기 카드 ScrollTrigger 애니메이션 (recommendSection)
      gsap.fromTo('.recommend-card',
        {
          opacity: 0,
          scale: 0.94,
          y: 35
        },
        {
          scrollTrigger: {
            trigger: '#recommendSection',
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true
          },
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'transform,opacity'
        }
      );

      // 초기 리스트 및 레이아웃 생성 직후 ScrollTrigger 좌표 즉시 갱신
      ScrollTrigger.refresh();
    }
  }

  // 외부 폰트, Tailwind, 이미지 등 모든 리소스 로딩 완료 시 트리거 재계산
  window.addEventListener('load', () => {
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.refresh();
    }
  });

});

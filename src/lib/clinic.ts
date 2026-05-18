export const CLINIC = {
  name: "행복 치과",
  nameEn: "Happy Dental Clinic",
  tagline: "환자 한 분, 한 분의 건강한 미소를 위해",
  since: 2008,
  address: "충남 천안시 불당동 123",
  phone: "041-570-1234",
  phoneTel: "+82415701234",
  email: "hello@happy-dental.example",
  hours: {
    weekday: "오전 9시 - 오후 7시",
    saturday: "오전 9시 - 오후 3시",
    holiday: "일요일 / 공휴일 휴진",
  },
  doctor: {
    name: "이지영 원장",
    title: "구강악안면외과 전문의",
    background: [
      "서울대학교 치의학과 졸업",
      "분당서울대학교병원 구강악안면외과 전문의",
      "임상 치과 진료 20년 이상",
      "대한구강악안면외과학회 정회원",
      "대한치과교정학회 회원",
    ],
    message:
      "안녕하세요, 행복치과 이지영 원장입니다. 치과는 무섭고 부담스러운 곳이 아니에요. 환자분께서 편안하게 마음을 놓고 진료받으실 수 있도록, 충분히 설명드리고 함께 결정하는 진료를 약속드립니다.",
    shortMsg: "치료보다 먼저, 진심 어린 소통부터",
  },
  stats: [
    { label: "누적 진료", value: "30,000", suffix: "+" },
    { label: "재방문율", value: "92", suffix: "%" },
    { label: "함께한 시간", value: "17", suffix: "년" },
    { label: "환자 만족도", value: "4.9", suffix: "/5.0" },
  ],
  services: [
    {
      icon: "/images/services/icon-1.png",
      title: "잇몸·치주 치료",
      slogan: "Gum",
      desc: "잇몸 질환은 조기 발견이 핵심. 부드럽고 통증이 적은 치주 치료로 치아를 오래 지켜드립니다.",
      tag: "정밀 진단",
    },
    {
      icon: "/images/services/icon-2.png",
      title: "임플란트",
      slogan: "Implant",
      desc: "20년 임상 경험을 바탕으로 한 안전하고 정밀한 임플란트. 식립부터 사후 관리까지 책임집니다.",
      tag: "전문의 직접 진료",
    },
    {
      icon: "/images/services/icon-3.png",
      title: "치아 교정",
      slogan: "Orthodontics",
      desc: "성장기/성인 모두. 일반 교정부터 투명교정·설측교정까지 라이프스타일에 맞춰 상담해드립니다.",
      tag: "1:1 정밀 상담",
    },
    {
      icon: "/images/services/icon-4.png",
      title: "심미·미백",
      slogan: "Aesthetic",
      desc: "라미네이트, 올세라믹, 미백 등 자연스러운 미소를 위한 심미 치료를 환자분 얼굴형에 맞춰 디자인합니다.",
      tag: "맞춤 설계",
    },
    {
      icon: "/images/services/extra-1.png",
      title: "예방·스케일링",
      slogan: "Prevention",
      desc: "건강보험 적용. 6개월 정기 검진으로 평생 건강한 치아를 지켜요. 어린이 불소도포도 함께.",
      tag: "건강보험",
    },
    {
      icon: "/images/services/extra-2.png",
      title: "어린이 치과",
      slogan: "Pediatric",
      desc: "아이가 무서워하지 않도록 천천히, 친근하게. 첫 치과 경험이 평생을 결정해요.",
      tag: "키즈 친화",
    },
  ],
  whyUs: [
    {
      num: "01",
      title: "전문의가 직접",
      image: "/images/why/team.jpg",
      desc: "구강악안면외과 전문의 자격을 갖춘 원장이 진단부터 시술, 사후 관리까지 직접 책임집니다.",
    },
    {
      num: "02",
      title: "충분한 1:1 상담",
      image: "/images/why/building.jpg",
      desc: "치료 전 시간을 들여 X-ray와 사진을 함께 보며 설명드리고, 동의 후 진행합니다.",
    },
    {
      num: "03",
      title: "검증된 장비·재료",
      image: "/images/why/equipment.jpg",
      desc: "안전성이 입증된 정품 재료, 디지털 파노라마, 정기 소독으로 안심 진료 환경을 유지합니다.",
    },
  ],
  reviews: [
    {
      name: "김OO 님",
      age: "30대",
      treatment: "투명교정",
      photo: "/images/reviews/photo-01.jpg",
      excerpt:
        "교정이 처음이라 많이 걱정했는데, 원장님께서 매 단계마다 사진 보여주시며 설명해 주셨어요. 8개월 만에 결과가 나와서 너무 만족합니다.",
    },
    {
      name: "박OO 님",
      age: "50대",
      treatment: "임플란트",
      photo: "/images/reviews/photo-02.jpg",
      excerpt:
        "다른 곳에서는 무조건 빼고 임플란트 하라고 했는데, 여기서는 자연치 살릴 수 있다고 먼저 보존 치료부터 권해주셨어요. 신뢰가 갑니다.",
    },
    {
      name: "정OO 님",
      age: "어린이 보호자",
      treatment: "예방·불소도포",
      photo: "/images/reviews/photo-03.jpg",
      excerpt:
        "아이가 치과를 무서워했는데, 원장님과 위생사 선생님이 정말 친절하게 대해주셔서 이제 자기가 가자고 해요. 감동이에요.",
    },
  ],
  events: [
    {
      title: "2026년 5월 가정의 달 진료 안내",
      summary: "5월 5일(어린이날) 휴진. 그 외 평일은 정상 진료합니다.",
      image: "/images/event/quick.jpg",
      validUntil: "2026-05-31",
    },
    {
      title: "신규 환자 X-ray + 구강 검진 무료",
      summary: "처음 방문하시는 분께 디지털 파노라마와 1:1 상담을 무료로 제공합니다.",
      image: "/images/event/banner.gif",
      validUntil: "상시",
    },
  ],
  nav: [
    { href: "/", label: "홈" },
    { href: "/about", label: "병원 소개" },
    { href: "/knowledge", label: "치과 지식" },
    { href: "/news", label: "건강 뉴스" },
    { href: "/location", label: "오시는 길" },
    { href: "/booking", label: "예약/상담" },
  ],
  social: {
    instagram: "",
    blog: "",
    youtube: "",
  },
} as const;

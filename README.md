# 행복 치과 홈페이지

환자분께 친근하게 다가가는 우리 동네 치과 홈페이지입니다.

---

## 🚀 시작하기

처음 한 번만 하면 됩니다.

```powershell
npm install
```

매번 홈페이지를 미리 보고 싶을 때:

```powershell
npm run dev
```

브라우저에서 **http://localhost:3000** 을 열면 보입니다.

---

## ✏️ 글/사진 올리는 방법 (원장님 매뉴얼)

### 1) 병원 소식 올리기

`content/news/` 폴더에 새 마크다운 파일을 만드세요. 파일명은 **`날짜-제목.md`** 형식으로:

```
content/news/2026-06-01-여름-휴진-안내.md
```

파일 내용 예시:

```markdown
---
title: 여름 휴진 안내
date: 2026-06-01
summary: 8월 둘째 주 휴진 안내드립니다.
cover: /images/news/summer.jpg
tags: [공지, 휴진]
---

## 안녕하세요, 환자분들께 알려드립니다

8월 12일부터 16일까지 휴진합니다...
```

위쪽 `---` 사이가 **글 정보** (제목, 날짜, 요약, 대표사진, 태그)
아래쪽이 **글 본문** (마크다운 문법 사용)

### 2) 치과 지식 칼럼 올리기

`content/knowledge/` 폴더에 같은 방식으로 추가하시면 됩니다.

### 3) 사진 올리기

`public/images/` 폴더는 용도별로 나뉘어 있습니다. **파일명을 그대로 둔 채 내용만 교체**하면 코드를 안 바꿔도 자동 반영돼요.

| 폴더 | 무엇이 들어가나 | 사용되는 곳 |
|---|---|---|
| `public/images/hero/main.jpg` | 메인 비주얼 인물/진료실 사진 (세로 4:5) | 홈 hero |
| `public/images/doctor/portrait.jpg` | 원장 사진 (세로 4:5) | 홈 의료진, 병원 소개 |
| `public/images/why/team.jpg, building.jpg, equipment.jpg` | Why us 3장 (세로 4:5) | 홈 Why us |
| `public/images/services/icon-1~4.png, extra-1~3.png` | 진료 분야 아이콘 (정사각형) | 홈 진료 분야, clinic.ts |
| `public/images/cases/case-orthodontic.jpg` | Before/After 사례 사진 | 홈 치료 사례 |
| `public/images/facility/room-1~4.jpg` | 시설 사진 4장 | 홈/소개 시설 둘러보기 |
| `public/images/reviews/photo-01~08.jpg` | 후기 환자 사진 (원형 잘림) | 홈 환자 후기, clinic.ts |
| `public/images/event/banner.gif, quick.jpg, popup.jpg` | 이벤트 배너 | 홈 이벤트 |
| `public/images/location/exterior.jpg` | 병원 외관 사진 | 오시는 길 |
| `public/images/news/사진이름.jpg` | 새 소식 글 대표 사진 | 글 마크다운에서 `cover:` 로 참조 |
| `public/images/knowledge/사진이름.jpg` | 지식 글 대표 사진 | 동상 |

**사진이 없는 칸은** 자동으로 fallback (✦ 같은 심볼)이 표시돼요. 사진 파일을 추가/교체하면 새로고침만으로 반영됩니다.

글 본문에서 사진을 부르려면:

```markdown
![사진 설명](/images/news/사진이름.jpg)
```

### 4) 마크다운 기본 문법

```markdown
## 큰 제목
### 작은 제목

일반 글은 그냥 쓰세요.

**굵게** *기울임* ~~취소선~~

- 점 목록
- 두 번째

1. 번호 목록
2. 두 번째

> 인용문은 이렇게

[링크 글자](https://example.com)
![이미지](/images/example.jpg)
```

---

## 🔑 외부 서비스 연결하기

`.env.example` 파일을 복사해서 `.env.local` 로 이름을 바꾸고, 각 항목을 채워주세요.

| 서비스 | 필요한 이유 | 발급 사이트 |
|---|---|---|
| 네이버 뉴스 API | 건강 뉴스 자동 표시 | https://developers.naver.com/apps/ |
| 카카오맵 | 오시는 길 지도 | https://developers.kakao.com/ |
| 카카오톡 채널 | 1:1 상담 받기 | https://center-pf.kakao.com/ |
| 네이버 예약 | 온라인 예약 받기 | https://booking.naver.com/business |

**키가 없어도** 홈페이지는 정상 작동해요. 뉴스는 샘플 데이터, 지도는 외부 길찾기 링크 버튼으로 대체됩니다.

---

## 📁 폴더 구조

```
dental_homepage/
├── content/              ← 글 (마크다운)
│   ├── news/             ← 병원 소식
│   └── knowledge/        ← 치과 지식 칼럼
├── public/
│   └── images/           ← 사진들
├── src/
│   ├── app/              ← 페이지들
│   ├── components/       ← 헤더, 푸터, 카드 등
│   └── lib/
│       ├── clinic.ts     ← 병원 정보 (이름, 주소, 시간 등)
│       ├── content.ts    ← 마크다운 읽기
│       └── news.ts       ← 네이버 뉴스 연동
├── .env.example          ← 환경변수 예제
└── README.md             ← 이 파일
```

병원 이름, 주소, 전화번호, **진료 분야, 후기, 이벤트 등 모든 데이터**를 바꾸시려면 **`src/lib/clinic.ts`** 한 파일만 수정하시면 됩니다.

### 🎨 디자인 톤 (참고)

- **색감**: 라벤더 보라 (`--lavender-*`) + 따뜻한 cream + 어두운 violet 잉크 (`#3a3045`)
- **폰트**: Playfair Display (영문 세리프, italic), Noto Serif KR (한글 세리프), Gaegu (손글씨 강조)
- **모션**: 절제됨. 페이지 로드 시 색감이 천천히 번지는 `bloom-in`, 텍스트가 잔잔히 떠오르는 `ink-rise`
- 색을 더 바꾸시려면 `src/app/globals.css` 상단의 `:root` 변수를 조정하세요

---

## 🛠️ 자주 쓰는 명령어

```powershell
npm run dev      # 개발 서버 시작 (수정하면서 미리보기)
npm run build    # 배포용 빌드
npm run start    # 빌드된 결과 실행
npm run lint     # 코드 점검
```

---

## 🌐 인터넷에 올리기 (배포)

가장 쉬운 방법은 **Vercel** 입니다 (무료):

1. [vercel.com](https://vercel.com) 가입
2. GitHub에 이 폴더 올리기
3. Vercel에서 import → 배포 완료
4. 도메인 연결 (예: happy-dental.co.kr)

도와드릴 일이 있으면 언제든 말씀해 주세요!

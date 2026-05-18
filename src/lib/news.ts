export type NaverNewsItem = {
  title: string;
  link: string;
  description: string;
  pubDate: string;
};

const MOCK_NEWS: NaverNewsItem[] = [
  {
    title: "치주 질환, 심혈관 건강과도 연관 있다는 연구 결과",
    link: "https://example.com/news/1",
    description:
      "잇몸 건강이 단순한 구강 문제가 아니라 전신 건강과 직결된다는 연구가 잇따르고 있다. 정기적인 스케일링과 올바른 양치 습관이 심혈관 질환 예방에도 도움…",
    pubDate: "최근",
  },
  {
    title: "어린이 충치 예방, 식습관이 치아 닦기보다 중요할 수 있다",
    link: "https://example.com/news/2",
    description:
      "달콤한 간식의 빈도가 양치 횟수보다 충치 발생에 더 큰 영향을 미친다는 보고. 간식을 한 번에 먹고 입을 헹구는 것이 효과적…",
    pubDate: "최근",
  },
  {
    title: "임플란트 수술 후 관리, 처음 일주일이 가장 중요",
    link: "https://example.com/news/3",
    description:
      "수술 직후 흡연·과도한 양치질·뜨거운 음식 섭취를 피하고 처방약을 정확히 복용하는 것이 임플란트 성공률을 결정짓는다는 전문의 조언…",
    pubDate: "최근",
  },
  {
    title: "잠들기 전 양치, 아침 양치보다 중요한 이유",
    link: "https://example.com/news/4",
    description:
      "수면 중에는 침 분비가 감소해 세균 번식이 쉬워진다. 자기 전 꼼꼼한 양치와 치실 사용이 충치·잇몸 질환 예방에 핵심…",
    pubDate: "최근",
  },
];

export async function getHealthNews(): Promise<NaverNewsItem[]> {
  const clientId = process.env.NAVER_CLIENT_ID;
  const clientSecret = process.env.NAVER_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    // 키가 없으면 mock 데이터 반환 (디자인 미리 확인용)
    return MOCK_NEWS;
  }

  try {
    const query = encodeURIComponent("치과 건강");
    const res = await fetch(
      `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&sort=date`,
      {
        headers: {
          "X-Naver-Client-Id": clientId,
          "X-Naver-Client-Secret": clientSecret,
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return MOCK_NEWS;

    const data = (await res.json()) as { items: NaverNewsItem[] };
    return data.items ?? MOCK_NEWS;
  } catch {
    return MOCK_NEWS;
  }
}

---
version: 1
slug: "index-html"
primary_target: "index.html"
related_targets: []
---

## Direction contract

THESIS: 채점 화면은 한 학생의 채점 용지 한 장이다. 여덟 동작이 여덟 줄로 항상 함께 보이고, 지금 차례인 줄만 펼쳐져 실수 버튼이 된다. 동작 하나가 화면을 독차지하고 나머지는 사라지는 흔한 "한 번에 하나" 화면을 거부한다 — 음악이 끝났을 때 무엇을 눌렀고 무엇이 남았는지 선생님이 스크롤 없이 알아야 하기 때문이다.

OWN-WORLD: 흰 카드(#FFFFFF) 위 얇은 회선(#E8ECF2), 바탕은 아주 연한 청회색(#F4F6F9). 파랑 #2F6BF0 = 지금 여기(현재 동작·현재 회차·링크), 코랄 #FF5B4A = 실수 하나뿐, 민트그린 #1AA37A = 끝난 것·저장됨. 먹색 #161A20, 보조 #79828E. 숫자는 Barlow Condensed 고정폭, 한글은 Noto Sans KR. 회차는 점수를 단 알약, 동작은 44px 한 줄, 지금 줄만 연한 파랑 바닥에 2px 파란 띠로 펼쳐진다. 그림자는 거의 없고 면과 선으로만 구분한다.

STORY: 선생님은 학생을 보고 있고 화면은 곁눈질한다. 지금 몇 번째인지(파란 줄), 몇 점인지(오른쪽 숫자), 몇 차 도전인지(위 알약)가 한 번에 들어온다. 실수할 때만 큰 버튼을 누르고, 동작이 끝나면 위아래로 쓸어 다음 줄로 내린다. 음악이 끝나면 여덟 줄이 다 채워져 있다.

FIRST VIEWPORT: 위에서부터 학생 머리글(반·번호·이름 27px, 오른쪽에 저장 상태), 회차 알약 줄(지난 회차는 점수를 달고 있음), 끝난 동작 줄들(44px, 점수 민트), 지금 동작 카드(동작명 28px + 실수 네 칸 + 화면 아래 절반의 코랄 실수 버튼), 남은 동작 줄들(흐리게), 맨 아래 되돌리기와 스와이프 안내. 주 동작인 실수 버튼은 엄지가 닿는 아래 절반에 있다.

FORM: 심판 채점표(내 후보 1위, 사용자가 색을 산뜻하게 바꿔 확정 — 파랑＋코랄 B안). seed:21312e4f56735f52

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

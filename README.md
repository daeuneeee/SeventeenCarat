# 💎 SeventeenCarat

## 🌟 기획 의도

부트캠프 수업을 들으면서 자유게시판과 중고마켓을 만들게 되었는데, 일반적인 페이지보다는 좋아하는 가수를 접목시켜 하나의 팬페이지로 만들고자 하였습니다.

<br>

## ✨ 기술 스택

JavaScript, TypeScript, Next.js, React, Emotion, Apollo-Client, GraphQL, Recoil

<br>

## ⏰ 개발 기간

2022년 08월 29일 ~ 2022년 10월 27일

<br>

## 🎥 시연 영상

|                       페이지                       | 영상                                                                                                                |
| :------------------------------------------------: | ------------------------------------------------------------------------------------------------------------------- |
|                     렌딩페이지                     | <img src="https://user-images.githubusercontent.com/110293289/219851655-0a4e13ed-eee5-4e4a-950c-6c087e46df6f.gif"/> |
|                      회원가입                      | <img src="https://user-images.githubusercontent.com/110293289/219852070-499eb575-2287-41a7-87d7-e74cc64ea23c.gif"/> |
|                       로그인                       | <img src="https://user-images.githubusercontent.com/110293289/219852032-f7c236b3-e5be-4e15-8500-462c9f620809.gif"/> |
|                    게시글 등록                     | <img src="https://user-images.githubusercontent.com/110293289/219852044-6867c5cc-a99b-4e94-9753-7af157b60b6b.gif"/> |
|                  게시글 조회/수정                  | <img src="https://user-images.githubusercontent.com/110293289/219852117-5af9f923-8093-476f-a37f-1df656b7eed4.gif"/> |
|             게시글 댓글 등록/작성/삭제             | <img src="https://user-images.githubusercontent.com/110293289/219852123-621d064a-f8ee-410e-b748-2ed7a1ef0e7d.gif"/> |
|                     상품 등록                      | <img src="https://user-images.githubusercontent.com/110293289/219852142-75ba2824-5ac4-4fc7-968a-14efb0962dd0.gif"/> |
|                   상품 조회/구매                   | <img src="https://user-images.githubusercontent.com/110293289/219852149-f711e1db-961a-49a3-909c-5db63e8f8842.gif"/> |
|                   상품 수정/삭제                   | <img src="https://user-images.githubusercontent.com/110293289/219852159-b0f397d2-ccc0-459d-98eb-bbe6b3e9bd32.gif"/> |
| 상품댓글, 대댓글 작성/수정/삭제 | <img src="https://user-images.githubusercontent.com/110293289/219852179-8b5b5693-439b-4346-be3f-933ad1df5cfc.gif"/> |
|                     상품 검색                      | <img src="https://user-images.githubusercontent.com/110293289/219852181-f0d0afca-5f2e-413d-97c9-26e501188737.gif"/> |
|                     마이페이지                     | <img src="https://user-images.githubusercontent.com/110293289/219852186-cd2c8ea7-9d2e-4783-9a4a-82ef0151f8d9.gif"/> |
|                    포인트 충전                     | <img src="https://user-images.githubusercontent.com/110293289/219852191-9997c0ed-e364-418c-a9f6-b2799b2c6ec9.gif"/> |

<br>

## 🔥 위기와 극복방법

- map 메서드를 사용할 때에는 컴포넌트 자체를 적용시키기  
  댓글을 구현할 때 수정이나 삭제 버튼을 누르면 각각의 댓글에 해당하는 창이 뜨는 게 아닌 전체 댓글의 수정/삭제 창이 떴습니다. 살펴보니 댓글 박스만 적용시키면 된다는 생각으로 presenter만 map 메서드를 사용했던 것이 문제였습니다. 각각의 함수를 적용시켜주기 위해서는 container도 함께 적용시켜야 한다는 것을 깨닫고 코드를 수정하니 정상 작동하였습니다.

- emotion으로 컴포넌트에 스타일 적용시키는 방법  
  글을 작성할 때, 문서편집 라이브러리 중 하나인 reactQuill을 사용하였는데, 기본 스타일이 사이트의 전체적인 테마와 맞지 않아서 스타일을 변경해주고자 했습니다. 여러 가지 검색한 결과 해당 라이브러리를 import 해주고, 아래와 같이 코드를 작성하면 일반 태그를 emotion/styled로 만들 때와 때와 같은 방법으로 적용시킬 수 있었습니다.  
  `const 변수명 = styled(reactQuill)`

<br>

## 🌊 회고

사실 수업을 듣는 순간마다 위기라고 할 수 있었습니다. 이전에 관련된 공부를 하거나, 일한 적이 없었기 때문에 접하게 되는 단어부터 어느 것 하나 쉬운 것이 없었습니다. 다른 사람들은 몇 년씩 배우는 것을 단기간에 내 것으로 만든다는 것은 욕심이라고 생각했습니다. 제가 할 수 있었던 것은 성실하게 수업에 임하는 것이었습니다.

처음에는 이해도 제대로 못 하고 코드를 써 내려가는 방식이 맞나 싶었는데, 여러 번 비슷한 코드를 짜고, 에러가 생기면 검색을 해보고, 그러다 보니 어느 순간 이해가 되기 시작했습니다. 스스로가 고민한 코드가 생각했던 대로 작동하는 것을 보며 뿌듯하고 재밌었습니다. 앞으로의 개발에서 벽을 마주하게 될 때 지금의 기억을 떠올리며 포기하지 않고, 즐기며 코드를 짜는 개발자가 되어야겠다고 생각했습니다.

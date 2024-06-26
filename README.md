# 입문주차 개인과제 : My Todo List 만들기 

## 구현해야 할 기능
- UI 구현하기
- Todo 추가 하기
- Todo 삭제 하기
- Todo 완료/취소 상태 변경하기 (진행중 ↔ 완료)


## 요구사항
- 제목과 내용을 입력하고, [추가하기] 버튼을 클릭하면 Working에 새로운 Todo가 추가되고 제목 input과 내용 input은 다시 빈 값으로 바뀌도록 구성해주세요.
- [삭제하기] 버튼을 클릭하면 Working 또는 Done 에 있는 것과 상관없이 삭제처리가 되도록 해주세요.
- Todo의 isDone 상태가 true이면, 상태 버튼의 라벨을 취소, isDone이 false 이면 라벨을 완료 로 조건부 렌더링 해주세요. 위 영상을 보면 버튼 내 라벨이 다른 걸 볼 수 있죠?
- Todo의 상태가 Working 이면 위쪽에 위치하고, Done이면 아래쪽에 위치하도록 구현합니다.
- Layout의 최대 너비는 1200px, 최소 너비는 800px로 제한하고, 전체 화면의 가운데로 정렬해주세요.


## 완성 후 생각해 볼 점
1. **JSX 문법**이란 무엇일까요?

2. 사용자가 입력하는 값, 또는 이미 입력된 값, 투두의 타이틀과 같은 **애플리케이션의 상태를 관리하기 위해 리액트의 어떤 기능을 사용하셨나요**?

3. 애플리케이션의 **상태 값들을 컴포넌트 간 어떤 방식으로 공유하셨나요**?

4. 기능 구현을 위해 **불변성 유지가** 필요한 부분이 있었다면 하나만 설명해 주세요.

5. 반복되는 컴포넌트를 파악하고 재사용할 수 있는 **컴포넌트로 분리해 보셨나요?** 그렇다면 **어떠한 이점이 있었나요?**

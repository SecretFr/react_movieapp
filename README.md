# Movie App Clone Coding(2021.08.24 ~ 2021.08.)
- component : HTML을 반환하는 함수
- jsx : props를 이용하여 부모에서 자식에게 데이터 전달

### props
- food component에 kimchi라는 value로 prop name 전달

### state
- state is object
- data will change
- function() 와 function의 차이 : ()-> 즉시실행 / 버튼 클릭시 실행
- react는 render function을 refresh하지 않는다.
- render function을 다시 호출하기 위해서는 setState 사용!

### component life cycle
- mounting: constructor() call -> render() call -> componentDidMount() call
- updating: ex) state를 통해서 값이 변경되고 다시 render 될때 / render() call -> componentDidUpdate() call
- unmounting: component goes away ->  componentWillUnmount() call


### axios
- npm install axios
import React from "react";
import FoodList from "./FoodList";




// 부모가 자식에게 데이터를 보내는 방법(jsx), props를 사용해서 data를 보낸다.
// {} <--- javascript를 사용할 수 있는 표시
function App() {
  return (
    <div className="App">
      <h1>Hello!!</h1>
        <FoodList/>

    </div>
  );
}

export default App;

//box - w,h,b

import Box from "./Box";

function App() {
  return (
    <div>
      <Box
        backgroundColor="green"
        height="100px"
        width="100px"
        text="미도리사워"
      />
      <Box
        backgroundColor="blue"
        height="100px"
        width="100px"
        text="블루사파이어"
      />
      <Box
        backgroundColor="orange"
        height="100px"
        width="100px"
        text="스크류드라이버"
      />
      <Box
        backgroundColor="red"
        height="100px"
        width="100px"
        text="블러디메리"
      />
    </div>
  );
}
export default App;

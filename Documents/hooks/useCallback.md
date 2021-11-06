useCallback:

- là 1 hook ghi nhớ lại ref của 1 hàm.
- tạo ra 1 callback mới khi dependencies thay đổi.
- Return memoized callback
- nhận vào 2 tham số, 1 callback function và 1 mảng dependencies.
- nếu dùng empty dependencies sẽ ko bao giờ tạo ra function mới.
- Kết hợp với react.memo để giúp ngăn rerender nếu props truyền xuống là 1 callback.

ví dụ:
function App() {
const [count1, setCount1] = useState(0)
const [show, setShow] = useState(false)

const handleIncrease = useCallback(() => {
setCount1(count1 + 1)
}, [])
return (

<div className="App" style={{padding: 20}}>
{show && <Content onIncrease={handleIncrease }/>}
<h1>{count1 }</h1>
<button onClick={() => setShow(!show)}>CLick1</button>
</div>
);
}
export default App;
-------------------------
import { useEffect, useRef, useState, memo } from 'react';
function Content ({onIncrease}) {
  console.log('re-render')
  return (
    <div className="Content">
      <h1>Hello</h1>
      <button onClick={onIncrease}>Increase</button>
    </div>
  );
}
export default memo(Content)

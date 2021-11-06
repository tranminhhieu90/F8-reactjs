react.Memo
memo() : là 1 HOC higher Order component dùng để bọc các component khác.

- Nó ghi nhớ tất cả các props của 1 component và sau đó
  so sánh tất cả các props sử dụng toán tử so sánh === sallowly compare. Nếu 1 trong các props thay đổi thì
  component sẽ được re-render.
- Có thể cung cấp 1 custom comparison function vào đối số thứ 2 của React.memo
- tránh 1 component re-render ko cần thiết

---

function MyComponent(props) {
/_ Render sử dụng props _/
}

function areEqual(prevProps, nextProps) {
/_ Trả về true nếu nextProps bằng prevProps, ngược lại trả về false _/
}

export default React.memo(MyComponent, areEqual);

---

import Content from './Content';
function App() {
const [count1, setCount1] = useState(0)
const [count2, setCount2] = useState(0)
const [show, setShow] = useState(false)
return (

<div className="App" style={{padding: 20}}>
{show && <Content />}
<button onClick={() => setShow(!show)}>CLick1</button>
<button onClick={() => setCount1(count1 + 1)}>CLick count 1</button>
</div>
);
}
export default App;

import { useEffect, useRef, useState, memo } from 'react';
function Content () {
console.log('re-render')
return (

<div className="Content">
<h1>Hello</h1>
</div>
);
}
export default memo(Content)

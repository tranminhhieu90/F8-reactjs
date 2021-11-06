I. Cách dùng import {useLayoutEffect } from 'react'
. useEffect

- Cập nhật lại state.
- Cập nhật lại DOM (mutated)
- Render lại UI
- Gọi cleanup nếu deps thay đổi
- Gọi useEffect callback

. useLayoutEffect

- Cập nhật lại state.
- Cập nhật lại DOM (mutated)
- Gọi cleanup nếu deps thay đổi (sync)
- Gọi useEffect callback (sync)
- Render lại UI

## ví dụ

function Content() {
const [count, setCount] = useState(0);

useEffect(() => {
if (count > 3) {
setCount(0)
}
}, [count])

const handleRun = () => {
setCount(count +1)
}
return (

<div className="Content">
<h1>{count }</h1>
<button onClick={handleRun}>Run</button>
</div>
);
}

---

function Content() {
const [count, setCount] = useState(0);

useLayoutEffect(() => {
if (count > 3) {
setCount(0)
}
}, [count])

const handleRun = () => {
setCount(count +1)
}
return (

<div className="Content">
<h1>{count }</h1>
<button onClick={handleRun}>Run</button>
</div>
);
}

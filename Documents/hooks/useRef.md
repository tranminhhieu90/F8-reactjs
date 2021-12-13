I - useRef
Dùng để lưu các giá trị bất kì qua một tham chiếu bên ngoài function component
hoặc được dùng để lueu 1 dom element

function Content() {
const [count, setCount] = useState(60);

const timeId = useRef()
const prevCount = useRef()
const h1Ref = useRef()

useEffect(() => {
prevCount.current = count
}, [count])

useEffect(() => {
console.log(h1Ref.current)
})
const handleStart = () => {
timeId.current = setInterval(() => {
setCount(prevCount => prevCount -1)
}, 1000)
}

const handleStop = () => {
clearInterval(timeId.current)
}

console.log(count, prevCount.current)
return (

<div className="Content">
<h1 ref={h1Ref}>{count }</h1>
<button onClick={handleStart}>Start</button>
<button onClick={handleStop}>Stop</button>
</div>
);
}
------------
useDebounce
import React, { useState, useEffect } from 'react';

export default function useDebounce(value, delay) {
const [debouncedValue, setDebouncedValue] = useState(value);

useEffect(
() => {
const handler = setTimeout(() => {
setDebouncedValue(value);
}, delay);
return () => {
clearTimeout(handler);
};
},
[value]
);

return debouncedValue;
}

import useDebounce from './use-debounce';
const debouncedSearchTerm = useDebounce(searchTerm, 500);
https://dev.to/gabe_ragland/debouncing-with-react-hooks-jci

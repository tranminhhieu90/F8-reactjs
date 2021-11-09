I - useReducer
sử dụng bằng cách import
import {useReducer} from 'react';
nguyên lý hoạt động tương tự redux;

Cung cấp 1 cách khác để quản lý state cho function component.

- Dùng cho quản lý các state phức tạp như state có kiểu dữ liệu có nhiều tầng, nhiều lớp.
- Dùng khi component có nhiều state và khi set lại 1 state phụ thuộc vào các state khác.

useReducer nhận vào 1 hàm reducer và 1 initState
const [count, dispatch] = useReducer(reducer, initState)
trong lần đầu chạy nó sẽ ko chạy vào hàm reducer

---

// useState
// 1. Innit state: 0
// 2. Actions: Up (state + 1), Down (state -1)

// useReducer
// 1. Innit state: 0
// 2. Actions: Up (state + 1), Down (state -1)
// 3. Reducer
// 4. Dispatch

---

// Init state
const initState = 0;

// Actions
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';
// Reducer
const reducer = (state, action) => {
switch (action) {
case UP_ACTION:
return state + 1
case DOWN_ACTION:
return state - 1
default:
throw new Error('Invalid action')
}
}

function App() {
const [count, dispatch] = useReducer(reducer, initState)
return (

<div>
<h1>{count}</h1>
<button onClick={() => dispatch(DOWN_ACTION )}>Down</button>
<button onClick={() => dispatch(UP_ACTION )}>Up</button>
</div>
);
}
export default App;

---

// useReducer
// 1. Innit state:
const initState = {
job: '',
jobs: []
};

// 2. Actions:
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const REMOVE_JOB = 'remove_job';

const setJob = payload => {
return {
type: SET_JOB,
payload
}
}

const addJob = payload => {
return {
type: ADD_JOB,
payload
}
}

const removeJob = payload => {
return {
type: REMOVE_JOB,
payload
}
}
// 3. Reducer
const reducer = (state, action) => {
console.log('state',state)
console.log('action',action)
switch (action.type) {
case SET_JOB:
console.log('222',action)
return {...state, job: action.payload}
case ADD_JOB:
return {...state, jobs: [...state.jobs, action.payload]}
case REMOVE_JOB:
const newJobs = [...state.jobs]
newJobs.splice(action.payload, 1)
return {...state, jobs: newJobs}
default:
throw new Error('Invalid action')
}
}
// 4. Dispatch

function App() {
const [state, dispatch] = useReducer(reducer, initState)
const inputRef = useRef()
const { job, jobs } = state;
const handleAdd = () => {
dispatch(addJob(job));
dispatch(setJob(""))
inputRef.current.focus()
}

return (

<div>
<h1>TODO</h1>
<input ref={ inputRef} value={job} placeholder="Enter todo" onChange={(e) => {
dispatch(setJob(e.target.value))
}}/>
<button onClick={handleAdd}>ADD</button>
<ul>
{jobs.map((job,index) => (
<li key={index}>{job}
<span onClick={() => {dispatch(removeJob(index))}} style={{marginLeft: 20}}>
&times;
</span></li>
))}
</ul>
</div>
);
}
export default App;

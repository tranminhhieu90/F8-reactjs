import { useEffect, useRef, useState, memo, useCallback, useMemo, useReducer } from "react";
import { setJob , removeJob, addJob} from "./actions";
import reducer, { initState }from "./reducer";
import logger from './logger'
function Todo() {
  const [state, dispatch] = useReducer(logger(reducer), initState)
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
export default Todo;
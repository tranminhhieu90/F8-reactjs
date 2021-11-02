Reactjs là one-ways binding, chúng ta có thể xử lý thành two-way binding.

1. Form và input.

function App() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')

const handleSubmit = () => {
console.log({
name,
email
})
}
return(

<div>
<input
value={name}
onChange={e => setName(e.target.value)}
/>
<input
value={email}
onChange={e => setEmail(e.target.value)}
/>
<button onClick={handleSubmit}>Register</button>
</div>
)
}

2. Radio two way.

const courses = [
{
id: 1,
name: 'HTML'
},
{
id: 2,
name: 'JS'
},
{
id: 3,
name: 'Reactjs'
}
]
function App() {
const [checked, setChecked] = useState('')
const handleSubmit = () => {
}
return(

<div>
{courses.map(course => (
  <div key={course.id}>
  <input type='radio' checked={checked === course.id}
  onChange={() => setChecked(course.id)}>
  {course.name}
  </div>
))}
<button onClick={handleSubmit}>Register</button>

</div>
)
}

3. Checkbox two-way
   const courses = [
   {
   id: 1,
   name: 'HTML'
   },
   {
   id: 2,
   name: 'JS'
   },
   {
   id: 3,
   name: 'Reactjs'
   }
   ]
   function App() {
   const [checked, setChecked] = useState([])

   const handleChecked = (id) => {
   setChecked(prev => {
   const isChecked = checked.checked.includes(id);
   if(isChecked){
   return checked.filter(item => item !== id)
   } else {
   return [...prev, id]
   }
   })
   }
   const handleSubmit = () => {
   }
   return(

<div>
{courses.map(course => (
  <div key={course.id}>
  <input type='checkbox' checked={checked.includes[course.id]}
  onChange={() => handleChecked(course.id)}>
  {course.name}
  </div>
))}
<button onClick={handleSubmit}>Register</button>

</div>
)
}

4. Todo list example
   function App() {

// const storeJobs = JSON.parse(localStorage.getItem('jobs'))
const [job, setJob] = useState('')
// const [jobs, setJobs] = useState(storeJobs ?? [])
const [jobs, setJobs] = useState(() => {
const storeJobs = JSON.parse(localStorage.getItem('jobs'))
return storeJobs
})

const handleAdd = () => {
setJobs(prev => {
const newJobs = [...prev, job];
const jobsJson = JSON.stringify(newJobs)
localStorage.setItem('jobs', jobsJson)
return newJobs
})
setJob('')
localStorage.setItem()
}
return (
<div className="App" style={{padding: 20}}>
<input value={job} onChange={ e => setJob(e.target.value)}/>
<button onClick={handleAdd}>Add</button>
<ul>
{jobs.map(job, index => (
<li key={index}>{ job}</li>
))}
</ul>
</div>
);
}

export default App;

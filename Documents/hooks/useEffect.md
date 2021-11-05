APi free Jsonplaceholder.

I - useEffect

- Callback luôn được gọi sau khi component được mounted
- Clean up function luôn được gọi trước khi component được unmount
- Cleanup function luôn được gọi trước khi callback được gọi (trừ lần mounted)

---

1. useEffect(callback):

- Gọi callback mỗi khi component re-render.
- Gọi callback sau khi component tạo ra dom element và thêm vào trong dom (chạy sau hàm return)

---

2. useEffect(callback, []):

- Gọi callback 1 lần sau khi component được mounted.

---

3. useEffect(callback, [deps]):

- Gọi callback được gọi lại mỗi khi deps thay đổi.

---

4. Listen DOM event

const useEffect(() => {
const handleScroll = () => {
console.log(window.scrollY )
if(window.scrollY > 200) {

} else {

}
}
window.addEventListener('scroll',handleScroll)

return () => {
window.removeEventListener('scroll',handleScroll)
}
}, [])

---

5. With timer functions
   setInterval, setTimeout, clearInterval, clearTimeout
   function Content() {
   const [countdown, setCountdown] = useState(180)

// useEffect(() => {
// setInterval(() => {
// setCountdown(prevState => prevState - 1 )
// }, 1000 )
// }, [])

useEffect(() => {
const timerId = setTimeout(() => {
setCountdown(prevState => prevState - 1)
console.log('countdown')
}, 1000)

    return () => clearTimeout(timerId)

}, [countdown])
return (

<div className="Content">
<h1>{ countdown}</h1>
</div>
);
}

function Content() {
const [avatar, setAvatar] = useState();
const handlePreviewAvatar = (e) => {
const file = e.target.files[0]
file.preview = URL.createObjectURL(file)
setAvatar(file)
e.target.values= null
}
useEffect(() => {
return () => {
avatar && URL.revokeObjectURL(avatar.preview)
}
}, [avatar])
return (

<div className="Content">
<input type='file' onChange={handlePreviewAvatar} />
{avatar && (
<img src={avatar.preview} alt="" width='80%'/>
)}
</div>
);
}
-----------------
6. Fake chat app

function emitComment(id) {
setInterval(() => {
//custom event
window.dispatchEvent(
new CustomEvent(`lesson-${id}`, {
detail: `Comment lesson ${id}`
})
)
}, 2000);
}
emitComment(1)
emitComment(2)
emitComment(3)

const lessons = [
{
id: 1,
name : '1'
},
{
id: 2,
name : '2'
},
{
id: 3,
name : '3'
}
]
function Content() {
const [lessonsId, setLessonId] = useState(1);

useEffect(() => {
const handleComment = ({detail}) => {
console.log('e',detail)
}
window.addEventListener(`lesson-${lessonsId}`, handleComment)

    return () => {
      window.removeEventListener(`lesson-${lessonsId}`, handleComment)
    }

}, [lessonsId])
return (

<div className="Content">
<ul>
{
lessons.map(lesson => (
<li key={lesson.id} style={{ color: lessonsId === lesson.id ? 'red' : '#333' }} onClick={
() => setLessonId(lesson.id)
}>
{lesson.name}
</li>
))
}
</ul>
</div>
);
}

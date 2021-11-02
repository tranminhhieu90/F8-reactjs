I. Dùng khi nào?
Khi có 1 dữ liệu và hiển thị dữ liệu ra giao diện người dùng.
KHi dữ liệu thay đổi thì giao diện tự động cập nhật lại (render lại dữ liệu)

II. Cách dùng
const [state, setState] = useState(initState)
II. Lưu ý.

- Component chỉ re-render sau khi setState.
- Initial state chỉ dùng cho lần đầu.

1. setState với callback
function App() {
const [counter, setCounter] = useState(1)
const handleIncrease = () => {
setCounter(counter + 1)
setCounter(counter + 1)
setCounter(counter + 1)
}
// khi click thì giá trị của counter vẫn chỉ tăng lên 1.
const handleIncrease = () => {
setCounter(prevState => prevState + 1)
setCounter(prevState => prevState + 1)
setCounter(prevState => prevState + 1)
}
// khi click thì giá trị của counter sẽ tăng lên 1.
return (
  <div className="App" style={{padding: 20}}>
  <h1>{counter}</h1>
  <button onClick={handleIncrease}>Increase</button>
  </div>
  );
  }

2. Initial state với callback.
   thì nó sẽ sử dụng giá trị trả về của callback làm giá trị khởi tạo ban đầu.

const orders = [100, 200, 300];
function App() {
const total = orders.reduce((total, cur) => total + cur);
const [counter, setCounter] = useState(total)
const handleIncrease = () => {
setCounter(counter + 1)
}
console.log('total', total) // mỗi lần set state thì app re-render thì logic tính total lại bị gọi lại
=> không cần thiết.

Có thể sử lý bằng cách:

const [counter, setCounter] = useState(() => {
const total = orders.reduce((total, cur) => total + cur);
return total;
})

// lúc này thì logic tính toán total sẽ ko bị gọi lại
return (

<div className="App" style={{padding: 20}}>
<h1>{counter}</h1>
<button onClick={handleIncrease}>Increase</button>
</div>
);
}

3. setState thay thế state bằng giá trị mới
   function App() {
   const [info, setInfo] = useState({
   name: 'hieu',
   age : 18
   })
   const handleUpdate = () => {
   setInfo(
   {
   bio: 'yeu màu hồng'
   }
   )
   ==> lúc này info sẽ trở thành {bio: 'yeu màu hồng'}
   }

Khắc phục bằng cách :
const handleUpdate = () => {
setInfo(
{
...info,
bio: 'yeu màu hồng'
}
)
}

const handleUpdate = () => {
setInfo( prev => ({
...prev,
bio: 'yeu mau hong'
}))
}
return (

<div className="App" style={{padding: 20}}>
<h1>{JSON.stringify(info)}</h1>
<button onClick={handleUpdate}>Update</button>
</div>
);
}

useCallback:

- là 1 hook ghi nhớ lại kết quả trả về của 1 hàm.
- Tránh thực hiện lại 1 logic nào đó không cần thiết.
- chỉ tính toán ra value mới khi dependencies thay đổi.
- Return memoized value
- nhận vào 2 tham số, 1 callback function và 1 mảng dependencies.

ví dụ:
function App() {
const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [products, setProducts] = useState([]);

const handleSubmit = () => {
setProducts(
[...products, {
name,
price: +price
}]
)
}

// const total = products.reduce((result, product) => {
// console.log('tinhs toan lai ne...');
// return result += product.price
// }, 0)

const total = useMemo(() => {
const result = products.reduce((result, product) => {
console.log('tinhs toan lai ne...');
return result += product.price
}, 0)
return result;
}, [])

return (

<div className="App" style={{ padding: 20 }}>
<input
value={name}
placeholder="Enter Name"
onChange={(e) => setName(e.target.value)}
/>
<br />
<input
value={price}
placeholder="Enter Name"
onChange={(e) => setPrice(e.target.value)}
/>
<br />
<button onClick={handleSubmit}>Add</button>
<br />
Total: {total}
<ul>
{products.map((product, index) => (
<li key={index}>{product.name} - { product.price}</li>
))}
</ul>
</div>
);
}
export default App;

---

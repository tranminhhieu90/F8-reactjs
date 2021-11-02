import { useState } from 'react';
function App() {
const [show, setShow] = useState(false)
return (

<div className="App" style={{padding: 20}}>
{show && <Content />}
<button onClick={() => setShow(!show)}>Toggle</button>
</div>
);
}

export default App;

function Content() {
return (

<div className="Content">
<h1>Content</h1>
</div>
);
}

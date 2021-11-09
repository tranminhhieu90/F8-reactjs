I - useContext.
Dùng để truyền dữ liệu từ component cha xuống các conponent con mà không cần dùng đến props/

ComA => CompB => CompC

- Cách dùng

1. Create context
2. Provider.
3. Consumer.

---

1. ThemeContext.js
   import { useState, createContext } from 'react';
   export const ThemeContext = createContext()

export function ThemeProvider({children}) {
const [theme, setTheme] = useState('light')
const handleToggleTheme = () => {
setTheme(theme === 'dark' ? 'light': 'dark')
}
return (
<ThemeContext.Provider value={{ theme, handleToggleTheme }}>
{children}
</ThemeContext.Provider>
)

}

---

2. Index.js
   import React from 'react';
   import ReactDOM from 'react-dom';
   import './index.css';
   import App from './App';
   import { ThemeProvider } from "./ThemeContext";
   import reportWebVitals from './reportWebVitals';
   ReactDOM.render(
   <React.StrictMode>
   <ThemeProvider>
   <App />
   </ThemeProvider>
   </React.StrictMode>,
   document.getElementById('root')
   );

---

3.  App.js
    import Content from "./Content";
    import './App.css';
    import { useContext } from "react";
    import { ThemeContext } from "./ThemeContext";
    // import Todo from "./Todo";
    function App() {

const {handleToggleTheme} = useContext(ThemeContext);
return (
<>
<button onClick={() => {
handleToggleTheme()
}}>Toggle Theme</button>
<Content/>
</>
);
}
export default App;

---

4. paragaph.js
   import React, { useContext } from 'react';
   import { ThemeContext } from './ThemeContext';

const Paragraph = () => {

const {theme} = useContext(ThemeContext)
console.log('theme',theme);
return (

<div className={theme}>
Test theme
</div>
);
};

export default Paragraph;

---

5. app.css
   .dark {
   color: white;
   background-color: #333;
   }

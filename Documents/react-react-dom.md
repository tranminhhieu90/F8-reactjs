I - document.createElement()

<h1 id='heading'>Hello</h1>
const h1 = document.querySelector('#heading')
=> h1 lúc này là 1 obj
----
const h1 = document.createElement('h1');
h1.id = 'heading';
h1.innerText = "Hello";
h1.className = 'heading class-2';
h1.style.color = 'red';
h1.style= 'color:red';

Object.assign(h1.style, {
color: 'blue',
backgroundColor: '#333'
})
document.body.appendChild(h1)

const root = document.getElementById('#root')
const heading = document.createElement('h1')

heading.innerText = 'Hế lô anh em ^^'

root.appendChild(heading)

II - Add react to website

1. unpkg
   cdn: content delivery network

III - React.createElement()
trả về 1 đối tượng gọi là react element

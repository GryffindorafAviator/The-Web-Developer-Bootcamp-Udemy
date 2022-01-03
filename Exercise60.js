const btn1 = document.querySelector('#hello')
const btn2 = document.querySelector('#goodbye')

function hello() {
    console.log("hello")
}

function goodbye() {
    console.log("goodbye")
}

btn1.addEventListener('click', hello)
btn2.addEventListener('click', goodbye)

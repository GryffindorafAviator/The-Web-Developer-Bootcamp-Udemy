const h1 = document.querySelector('h1')
const input = document.querySelector('input')

input.addEventListener('input', function(e) {
    if (!this.value) {
        h1.innerText = "Enter Your Username"
    }
    else {
        h1.innerText = "Welcome, " + this.value
    }
})

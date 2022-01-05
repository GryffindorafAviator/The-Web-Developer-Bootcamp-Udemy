// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const product = document.querySelector('#product')
const qty = document.querySelector('#qty')
const list = document.querySelector('#list')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const prodName = product.value;
    const quantity = qty.value;
    const newLI = document.createElement('LI')
    
    newLI.innerText = quantity + ' ' + prodName
    list.appendChild(newLI)
    
    product.value = ''
    qty.value = ''
})

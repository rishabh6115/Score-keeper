const score2 = document.querySelector('#s')
const score1 = document.querySelector('#f')
const dropdown = document.querySelector('select')
const fbutton = document.querySelector('.one')
const sbutton = document.querySelector('.two')
const reset = document.querySelector('.reset')
const h1 = document.createElement('h1')

let totalpoint = dropdown.value;
dropdown.addEventListener('change', function(e) {
    totalpoint = dropdown.value
})
let fcount = 0;
fbutton.addEventListener('click', function(e) {
    fcount += 1;
    score1.innerText = `${fcount}`
    if (fcount === parseInt(dropdown.value)) {

        h1.innerText = `Congratulations player 1 won`
        document.body.append(h1)
        score1.style.color = 'green'
        score2.style.color = 'red'
        fbutton.style.backgroundColor = 'green'
        sbutton.style.backgroundColor = 'red'
        fbutton.style.color = 'white'
        sbutton.style.color = 'white'
        fbutton.disabled = true
        sbutton.disabled = true
    }
})
let scount = 0;
sbutton.addEventListener('click', function(e) {
    scount += 1;
    score2.innerText = `${scount}`
    if (scount === parseInt(dropdown.value)) {

        h1.innerText = `Congratulations player 2 won`
        document.body.append(h1)
        score1.style.color = 'red'
        score2.style.color = 'green'
        fbutton.style.backgroundColor = 'red'
        sbutton.style.backgroundColor = 'green'
        fbutton.style.color = 'white'
        sbutton.style.color = 'white'
        fbutton.disabled = true
        sbutton.disabled = true
    }

})
reset.addEventListener('click', function(e) {
    score1.innerText = '0'
    fcount = 0;
    scount = 0;
    score2.innerText = '0'
    h1.remove()
    score1.style.color = 'black'
    score2.style.color = 'black'
    fbutton.style.backgroundColor = 'white'
    sbutton.style.backgroundColor = 'white'
    fbutton.style.color = 'black'
    sbutton.style.color = 'black'
    fbutton.disabled = false
    sbutton.disabled = false
    dropdown.value = 1

})

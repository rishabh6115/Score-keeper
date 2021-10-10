const score2 = document.querySelector('#s')
const score1 = document.querySelector('#f')
const dropdown = document.querySelector('select')
const fbutton = document.querySelector('.one')
const sbutton = document.querySelector('.two')
const reset = document.querySelector('.reset')
const h1 = document.createElement('h1')
const hr = document.querySelector('hr')
const container = document.querySelector('.container')


const resetPlayer = document.createElement('button')
resetPlayer.classList.add('player')
container.append(resetPlayer)
resetPlayer.innerText = 'Reset Player'



const firstName = document.createElement('input')
firstName.type = 'text';
firstName.placeholder = 'Enter First player Name'
firstName.classList.add('player')


firstName.addEventListener('input', function() {
    fbutton.innerText = `+1 ${firstName.value}`
})
const secondName = document.createElement('input')
secondName.type = 'text';
secondName.placeholder = 'Enter Second Player Name'
secondName.classList.add('player')
secondName.addEventListener('input', function() {
    sbutton.innerText = `+1 ${secondName.value}`
})
hr.appendChild(firstName)
hr.appendChild(secondName)


let totalpoint = dropdown.value;
dropdown.addEventListener('change', function(e) {
    totalpoint = dropdown.value
})
let fcount = 0;
fbutton.addEventListener('click', function(e) {
    fcount += 1;
    score1.innerText = `${fcount}`
    if (fcount === parseInt(dropdown.value)) {

        h1.innerText = `Congratulations ${firstName.value} won`
        document.body.append(h1)
        score1.style.color = '#1cb199'
        score2.style.color = '#cb5e2edb'
        fbutton.style.backgroundColor = '#1cb199'
        sbutton.style.backgroundColor = '#cb5e2edb'
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

        h1.innerText = `Congratulations ${secondName.value} won`
        document.body.append(h1)
        score1.style.color = 'red'
        score2.style.color = 'green'
        fbutton.style.backgroundColor = '#cb5e2edb'
        sbutton.style.backgroundColor = '#1cb199'
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
})

resetPlayer.addEventListener('click', function() {
    firstName.value = '';
    secondName.value = '';
    fbutton.innerText = '+1 Player One'
    sbutton.innerText = '+1 Player Two'
})
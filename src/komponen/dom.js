//Document Objek Model JS 2
document.title = 'bumn'
const body = document.body //deklarasiin variabel baru untuk nampung document.body

body.append ("Hello World")

const h1 = document.createElement('h1') //buat elemen h1 nya ditampung di var h1
h1.textContent = "<marquee>Anjay ini h1 bro</marquee>" //cara masukin tulisan ke elemen h1

const namaSaya = document.createElement('p')
namaSaya.innerHTML = "<marquee>Rehan</marquee>"//marquee works di innerHTML karena innerHTML membaca marquee sebagai elemen html bukan sebagai teks

const namaKucing = document.createElement('b')
namaKucing.innerText = "<marquee>Jeje</marquee>"

body.append(h1) //nampilin h1 nya di body
body.append(namaSaya)
body.append(namaKucing)

const btn1 = document.getElementById('btn1')
const btn2 = document.querySelector('.btn2')

const defaultText = "klik saya 1"
btn1.textContent = defaultText 


btn1.style.border = "none"
btn1.style.backgroundColor = "blue"
btn1.style.fontSize = "50px"
btn1.style.padding = "20px"

btn2.style.border = "none"
btn2.style.backgroundColor = "aqua"

function clickButton() {
    btn1.style.backgroundColor = "aqua"
    btn1.style.fontSize = "20px"
    const newText = document.createElement('p')
    newText.innerHTML = "<marquee>halooo</marquee>"
    body.append(newText)
}

function ubahText() {
   btn1.textContent = "helo"  
}

function ubahAwal() {
    btn1.textContent = defaultText
}
function showText() {
    const text = document.createElement('p')
    text.innerHTML = "M.RAIHAN"
    body.append(text)
}
function changeColour() {
    btn2.style.backgroundColor = "yellow"
}


const App = document.getElementById("App")

const header = document.createElement('h1')

const headerContent = document.createTextNode("Hello World!!!")

header.appendChild(headerContent)
App.appendChild(header)


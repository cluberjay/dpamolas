//declaração de variáveis
const buttonRefresh = document.querySelector('.bi-arrow-clockwise')
const optMolas = document.querySelector('#opcoes-de-molas')
const form = document.querySelectorAll('form')
const detalhesDasMolas = document.querySelectorAll('.detalhes-molas')
const buttonDetalhes = document.querySelectorAll('.btn-primary')
const buttonOrcamento = document.querySelectorAll('.button-orcamento')

const buttonCompressao = document.querySelector('#button-compressao')
const buttonConica = document.querySelector('#button-conica')
const buttonTorcao = document.querySelector('#button-torcao')
const buttonTracao = document.querySelector('#button-tracao')
const buttonPrato = document.querySelector('#button-prato')
const buttonBiconica = document.querySelector('#button-biconica')

const molaDeCompressao = document.querySelector('#mola-compressao')
const molaConica = document.querySelector('#detalhes-mola-conica')
const molaDeTorcao = document.querySelector('#mola-torcao')
const molaDetracao = document.querySelector('#mola-tracao')
const molaPrato = document.querySelector('#detalhes-mola-prato')
const molaBiconica = document.querySelector('#detalhes-mola-biconica')

let i = 0 , i1 = 0 , i2 = 0 , i3 = 0 , i4 = 0 , i5 = 0 , i6 = 0

//adção de eventos à variáveis

buttonRefresh.addEventListener('click' , ()=> location.reload())

optMolas.addEventListener('change' , ()=> {
    if(optMolas.value == 'mola-conica') {
      i = 1
    } if (optMolas.value == 'mola-de-torcao'){
      i = 2
    } if (optMolas.value == 'mola-de-tracao'){
      i = 3
    } if (optMolas.value == 'mola-prato'){
      i = 4
    } if (optMolas.value == 'mola-biconica'){
      i = 5
    }
    
    form.forEach(()=> {
       
       form[i].classList.remove('hidden')    
       optMolas.classList.add('hidden') 
       form[i].addEventListener('submit' , (e)=> {
        e.preventDefault()
     
        const formData = new FormData(form[i])
     
        let dataString = ''
     
        for(let elements of formData.entries()){
           dataString += elements[0] + ' : ' + elements[1] + ' ; '
        }
     
        window.open('https://wa.me/14996797612?text=' + dataString)
       
      })
    })
 }) 

buttonCompressao.addEventListener('click' , ()=> {
   if(i1 % 2 == 0){
       molaDeCompressao.classList.remove('hidden')
    } else {molaDeCompressao.classList.add('hidden')}
    i1++
  })

buttonConica.addEventListener('click' , ()=> {
   if(i2 % 2 == 0){
    molaConica.classList.remove('hidden')
    } else {molaConica.classList.add('hidden')}
    i2++
 })

 buttonTorcao.addEventListener('click' , ()=>{
    if(i3 % 2 == 0){
       molaDeTorcao.classList.remove('hidden')
    } else {molaDeTorcao.classList.add('hidden')}
    i3++
 })

 buttonTracao.addEventListener('click' , ()=>{
    if(i4 % 2 == 0){
      molaDetracao.classList.remove('hidden')
    } else {molaDetracao.classList.add('hidden')}
    i4++
 })

 buttonPrato.addEventListener('click' , ()=>{
    if(i5 % 2 == 0){
      molaPrato.classList.remove('hidden')
    } else {molaPrato.classList.add('hidden')}
    i5++
 })

 buttonBiconica.addEventListener('click' , ()=>{
    if(i6 % 2 == 0){
       molaBiconica.classList.remove('hidden')
    } else {molaBiconica.classList.add('hidden')}
    i6++
 })

/*

buttonOrcamento.forEach((element)=> {
  element.addEventListener('click' , ()=>{
   detalhesDasMolas.forEach((element)=>{
    element.classList.add('hidden')
   })
  })
})

if(h2.innerHTML == 'Mola cônica'){
        console.log(element.innerHTML)
          i2 = 1
          
        } if(element.innerHTML == 'Mola de torção'){
          i2 = 2
         
        } if(element.innerHTML == 'Mola de tração'){
          i2 = 3
        } if(element.innerHTML == 'Mola prato'){
          i2 = 4
        } if(element.innerHTML == 'Mola bicônica'){
          console.log(element.innerHTML)
          i2 = 5
        } */
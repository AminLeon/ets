//Ponemos las variables que usaremos en el proyecto
//La constante del contador del progreso
const progress = document.getElementById('progress')
//La constante para ir hacia atras    
const prev = document.getElementById('prev')
//La constante para avanzar    
const next = document.getElementById('next')
//La constante de los circulos    
const circles = document.getElementById('.circle')

let currentActive = 1
//Este codigo lo que nos hace es que con el addEventListener lo es si clickeamos current active se acumulará una vez y la barra avanzará y si clickeamos hacia atras retrocederá 
next.addEventListener('click',() =>{
    currentActive++
    if (currentActive > circles.length){
        currentActive = circles.lengt
    }
    update()
})
prev.addEventListener ('click',() => {
    currentActive--
    if (currentActive < 1){
       currentActive = 1
    }
    update()
})
function update() {
    circles.forEach((circle,idx) =>{

    if(idx < currentActive){
        circle.classList.add('active')
    }else{
       circle.classList.remove('active')
    
    }
  })
}//Seleccionamos con el queryselectorAll todo 
    const actives = document.
    querySelectorAll('.active')
    progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%'
    if (currentActive === 1){
        prev.disabled = true
    }else if (currentActive === circles.length){
        next.disabled = true
    }else{
        prev.disabled = false
        next.disabled = false
0    }



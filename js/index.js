// Your code goes here

function get(selector){
    return document.querySelector(selector)
}

//const logo = document.getElementById('myImg').src = 'img/fun-bus.jpg'

const links = get('.nav')


const bodyClr = get('body')

//1
function color(event) {
    document.body.style.background = 'black'

}

//2
bodyClr.addEventListener('mouseover', event => {
    event.target.style.background = 'black'
}
)

//3
bodyClr.addEventListener('mouseout', event => {
    event.target.style.background = 'white'
})

var words = get('p')

//4
window.addEventListener('keypress', event => {
    if (event.key === 'r') {
        words.style.color = 'green'
        
    } 
    
})

//5
function linkGone(event) {
    links.remove('href')
    event.preventDefault()
}

links.addEventListener(
    'click',
    linkGone
)

//6
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    move.style.transform = `scale(${scale})`;
  }
  
  let scale = 1;
  const move = document.querySelector('div');
  move.addEventListener('wheel', zoom);


  //7
bodyClr.addEventListener('drag', event => {
    document.body.style.background = 'yellow'
})

//8
bodyClr.addEventListener('dragend', event => {
    document.body.style.background = 'blue'
})


//9
window.addEventListener('resize', event => {
    document.body.style.fontWeight = 'bold'
})

//10

window.addEventListener('contextmenu', event => {

    // document.body.remove(document)
    document.body.textContent = "Maybe don't do that again."
})
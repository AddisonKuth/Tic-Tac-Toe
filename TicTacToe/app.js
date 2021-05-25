colors = ['red', 'green'];
let colorIndex  = 0;

top1.addEventListener('click', () => {
  document.getElementById('top1').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    // console.log('I work')
    top1.classList.add('red')
    colorIndex = 2
  } if (colorIndex === 1) {
    // console.log('I work')
    top1.classList.add('green')
    colorIndex = 1
  } else {
    colorIndex = 0
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

top2.addEventListener('click', () => {
  document.getElementById('top2').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    top2.classList.add('red')
  } if (colorIndex === 1) {
    top2.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

top3.addEventListener('click', () => {
  document.getElementById('top3').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    top3.classList.add('red')
  } if (colorIndex === 1) {
    top3.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})


mid1.addEventListener('click', () => {
  document.getElementById('mid1').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    mid1.classList.add('red')
  } if (colorIndex === 1) {
    mid1.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

mid2.addEventListener('click', () => {
  document.getElementById('mid2').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    mid2.classList.add('red') 
  } if (colorIndex === 1) {
    mid2.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

mid3.addEventListener('click', () => {
  document.getElementById('mid3').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    mid3.classList.add('red')
  } if (colorIndex === 1) {
    mid3.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})


bot1.addEventListener('click', () => {
  document.getElementById('bot1').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    bot1.classList.add('red')
  } if (colorIndex === 1) {
    bot1.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

bot2.addEventListener('click', () => {
  document.getElementById('bot2').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    bot2.classList.add('red')
  } if (colorIndex === 1) {
    bot2.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

bot3.addEventListener('click', () => {
  document.getElementById('bot3').style.backgroundColor = colors[colorIndex];      
  if (colorIndex === 0) {
    bot3.classList.add('red')
  } if (colorIndex === 1) {
    bot3.classList.add('green')
  }
  colorIndex = (colorIndex + 1) % colors.length
  gameOver()
})

const gameOver = () => {
  if (top1.classList.contains('red') && top2.classList.contains('red') && top3.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } if (mid1.classList.contains('red') && mid2.classList.contains('red') && mid3.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } if (bot1.classList.contains('red') && bot2.classList.contains('red') && bot3.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } 

  if (top1.classList.contains('red') && mid1.classList.contains('red') && bot1.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } if (top2.classList.contains('red') && mid2.classList.contains('red') && bot2.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } if (top3.classList.contains('red') && mid3.classList.contains('red') && bot3.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal() 
  } 

  if (top1.classList.contains('red') && mid2.classList.contains('red') && bot3.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } if (top3.classList.contains('red') && mid2.classList.contains('red') && bot1.classList.contains('red')) {
    console.log('Red Wins!')
    openRedModal()
  } 

  if (top1.classList.contains('green') && top2.classList.contains('green') && top3.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } if (mid1.classList.contains('green') && mid2.classList.contains('green') && mid3.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } if (bot1.classList.contains('green') && bot2.classList.contains('green') && bot3.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } 

  if (top1.classList.contains('green') && mid1.classList.contains('green') && bot1.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } if (top2.classList.contains('green') && mid2.classList.contains('green') && bot2.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } if (top3.classList.contains('green') && mid3.classList.contains('green') && bot3.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal() 
  } 

  if (top1.classList.contains('green') && mid2.classList.contains('green') && bot3.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  } if (top3.classList.contains('green') && mid2.classList.contains('green') && bot1.classList.contains('green')) {
    console.log('Green Wins!')
    openGreenModal()
  }

}

const modalRed = document.getElementById('red')
const modalGreen = document.getElementById('green')

const openRedModal = () => {
  modalRed.style.display = 'block'
 }

const openGreenModal = () => {
  modalGreen.style.display = 'block'
}




 




  






  

colors = ['red', 'green'];
let colorIndex  = 0;

top1.addEventListener('click', () => {
  document.getElementById('top1').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

top2.addEventListener('click', () => {
  document.getElementById('top2').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

top3.addEventListener('click', () => {
  document.getElementById('top3').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})


mid1.addEventListener('click', () => {
  document.getElementById('mid1').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

mid2.addEventListener('click', () => {
  document.getElementById('mid2').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

mid3.addEventListener('click', () => {
  document.getElementById('mid3').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})


bot1.addEventListener('click', () => {
  document.getElementById('bot1').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

bot2.addEventListener('click', () => {
  document.getElementById('bot2').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

bot3.addEventListener('click', () => {
  document.getElementById('bot3').style.backgroundColor = colors[colorIndex];      
  colorIndex = (colorIndex + 1) % colors.length
})

(top1, top2, top3).addEventListener('click', () => {
  if (colorIndex === 1) {
  console.log('red')
  }
})

(top1, top2, top3).addEventListener('click', () => {
  if (colorIndex === 0) {
  console.log('green')
  }
})






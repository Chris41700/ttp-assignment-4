//Question 1
const leftBox = document.querySelector('.left')
const rightBox = document.querySelector('.right')
const box = document.querySelector('.box')

rightBox.onclick = () => box.textContent = "I'm right";
leftBox.onclick = () => box.textContent = "No, I'm right";
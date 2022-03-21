const readMoreBtn = document.querySelector('.read-more-btn');
const text = document.querySelector('.list-item');

readMoreBtn.addEventListener('click',(e)=>{
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText === 'More') {
        readMoreBtn.innerText = 'Less';
    }else{
        readMoreBtn.innerText = 'More'
    }
})

const readMoreBtn1 = document.getElementById('read-more-btn1')
const text1 = document.getElementById('list-item1')

readMoreBtn1.addEventListener('click', (e) => {
  text1.classList.toggle('show-more')
  if (readMoreBtn1.innerText === 'More') {
    readMoreBtn1.innerText = 'Less'
  } else {
    readMoreBtn1.innerText = 'More'
  }
})

const readMoreBtn2 = document.getElementById('read-more-btn2')
const text2 = document.getElementById('list-item2')

readMoreBtn2.addEventListener('click', (e) => {
  text2.classList.toggle('show-more')
  if (readMoreBtn2.innerText === 'More') {
    readMoreBtn2.innerText = 'Less'
  } else {
    readMoreBtn2.innerText = 'More'
  }
})

const readMoreBtn3 = document.getElementById('read-more-btn3')
const text3 = document.getElementById('list-item3')

readMoreBtn3.addEventListener('click', (e) => {
  text3.classList.toggle('show-more')
  if (readMoreBtn3.innerText === 'More') {
    readMoreBtn3.innerText = 'Less'
  } else {
    readMoreBtn3.innerText = 'More'
  }
})

const readMoreBtn4 = document.getElementById('read-more-btn4')
const text4 = document.getElementById('list-item4')

readMoreBtn4.addEventListener('click', (e) => {
  text4.classList.toggle('show-more')
  if (readMoreBtn4.innerText === 'More') {
    readMoreBtn4.innerText = 'Less'
  } else {
    readMoreBtn4.innerText = 'More'
  }
})
// Mouseover시 class 추가 이벤트

const displayEl = document.getElementsByClassName('info');
for (let i = 0; i < displayEl.length; i++) {
    displayEl[i].addEventListener('mouseover', function(){
	    this.classList.add("displayed");
    })
    displayEl[i].addEventListener('mouseout', function(){
	    this.classList.remove("displayed");
    })
}

// const infoEls = document.querySelectorAll('.info');
// const descriptionEls = document.querySelectorAll('.title');
// let fadeOut = true;
// descriptionEls.addEventListener('click', function () {
//   fadeOut = !fadeOut
//   if (fadeOut) {
//     //Class 추가
//     infoEls.classList.add('fadeout');
//   } else {
//     //원상 복귀
//     infoEls.classList.remove('fadeout');
//   }
// });


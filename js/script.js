// let allQestions = document.querySelectorAll(".question-box");
// console.log(allQestions)
// allQestions.forEach((val, index) => {
//     val.addEventListener('click', () => {
//         val.nextElementSibling.classList.toggle('h-[auto]');
//         val.nextElementSibling.classList.toggle("scale-y-100");
//         val.nextElementSibling.classList.toggle('p-[20px]');
//         // console.log(index)
//         allQestions.forEach((elem, i) => {
//             if (i != index) {
//                 elem.nextSibling.classList.remove('h-[auto]', 'scale-y-100', 'p-[20px]')
//             }
//         })
//     })

// })


let allQuestions = document.querySelectorAll(".question-box");
console.log(allQuestions);

allQuestions.forEach((val, index) => {
    val.addEventListener('click', () => {
        val.nextElementSibling.classList.toggle('h-[auto]');
        val.nextElementSibling.classList.toggle("scale-y-100");
        val.nextElementSibling.classList.toggle('p-[20px]');
        val.nextElementSibling.style.transitionDuration = '400ms';
        allQuestions.forEach((elem, i) => {
            if (i !== index) {
                elem.nextElementSibling.classList.remove('h-[auto]', 'scale-y-100', 'p-[20px]');
            }
        });
    });
});

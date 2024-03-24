let allQestions = document.querySelectorAll(".question-box");
console.log(allQestions)
allQestions.forEach((val, index) => {
    val.addEventListener('click', () => {
        val.nextElementSibling.classList.toggle('h-[auto]');
        val.nextElementSibling.classList.toggle("scale-y-100");
        val.nextElementSibling.classList.toggle('p-[20px]');
        allQestions.forEach((elem, i) => {
            if (i != index) {
                elem.nextSibling.classList.remove('h-[auto]', 'scale-y-100', 'p-[20px]')
            }
        })
    })

})
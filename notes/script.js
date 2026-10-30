const heading1 = document.querySelector('.heading1')
const heading2 = document.querySelector('.heading2')
const heading3 = document.querySelector('.heading3')
const heading4 = document.querySelector('.heading4')
const heading5 = document.querySelector('.heading5')



function headingChange(element, color, text, time) {
    return new Promise((rel, rej) => {
        setTimeout(() => {
            if (element) {
                element.style.color = color
                element.textContent = text
                rel()
            }

            else {
                rej()
            }

        }, time)
    })
}

const h = headingChange(heading1, "red", "One", 1000)

h.then((h) => {
   return  headingChange(heading2, "Green", "Two", 1000)
}).then(()=>{
    return  headingChange(heading3, "Pink", "Three", 1000)
}).then(()=>{
    return  headingChange(heading4, "grey", "Four", 1000)
}).then(()=>{
    return  headingChange(heading5, "blue", "five", 1000)
})
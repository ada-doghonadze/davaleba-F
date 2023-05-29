const form = document.querySelector('.form')
const app = document.querySelector('.app')
form.addEventListener('click',(e) => {
    const el = document.createElement('div')
    el.style.background = 'pink'
    el.style.width = '150px'
    el.style.height = '150px'
    document.body.style.background = 'black'
    app.append(el);
})
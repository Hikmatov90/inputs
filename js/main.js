let doc = document

let form = doc.forms.forma
let inp1 = form.inp1
let inp2 = form.inp2
let inp3 = form.inp3
let inp4 = form.inp4
let inp5 = form.inp5
let inp6 = form.inp6
let inp7 = form.inp7

let i = doc.querySelector('.i')
let i2 = doc.querySelector('.i2')
let i3 = doc.querySelector('.i3')
let i4 = doc.querySelector('.i4')
let i5 = doc.querySelector('.i5')
let i6 = doc.querySelector('.i6')
let i7 = doc.querySelector('.i7')

let btn = doc.querySelector('.btn')
let eror = doc.querySelector('.not')
let eror2 = doc.querySelector('.not2')
let eror3 = doc.querySelector('.not3')
let eror4 = doc.querySelector('.not4')
let eror5 = doc.querySelector('.not5')
let eror6 = doc.querySelector('.not6')
let eror7 = doc.querySelector('.not7')

let p = doc.querySelector('.red')
let p2 = doc.querySelector('.red2')
let p3 = doc.querySelector('.red3')
let p4 = doc.querySelector('.red4')
let p5 = doc.querySelector('.red5')
let p6 = doc.querySelector('.red6')
let p7 = doc.querySelector('.red7')

form.addEventListener('submit',inpts)

function inpts(event) {
    event.preventDefault();
    if (inp1.value == '') {
        event.preventDefault();
        p.classList.add('red-txt')
        eror.classList.remove('not')
        inp1.classList.add('red-inp')
        i.classList.add('red-txt')
    }
    if (inp2.value == '') {
        event.preventDefault();
        p2.classList.add('red-txt')
        eror2.classList.remove('not2')
        inp2.classList.add('red-inp')
        i2.classList.add('red-txt')
    }
    if (inp3.value == '') {
        event.preventDefault();
        p3.classList.add('red-txt')
        eror3.classList.remove('not3')
        inp3.classList.add('red-inp')
        i3.classList.add('red-txt')
    }
    if (inp4.value == '') {
        event.preventDefault();
        p4.classList.add('red-txt')
        eror4.classList.remove('not4')
        inp4.classList.add('red-inp')   
        i4.classList.add('red-txt')
    }
    if (inp5.value == '') {
        event.preventDefault();
        p5.classList.add('red-txt')
        eror5.classList.remove('not5')
        inp5.classList.add('red-inp')
        i5.classList.add('red-txt')
    }
    if (inp6.value == '') {
        event.preventDefault();
        p6.classList.add('red-txt')
        eror6.classList.remove('not6')
        inp6.classList.add('red-inp')
        i6.classList.add('red-txt')
    }
    if (inp7.value == '') {
        event.preventDefault();
        p7.classList.add('red-txt')
        eror7.classList.remove('not7')    
        inp7.classList.add('red-inp')
        i7.classList.add('red-txt')
    }
    // if(inp1.value == '' && inp2.value == '' && inp3.value == '' && inp4.value == '' && inp5.value == '' && inp6.value == '' && inp7.value == ''){
    //     event.preventDefault();
    //     p.classList.add('red-txt')
    //     eror.classList.remove('not')    
    //     inp3.classList.add('red-inp')
    // }



    if(inp1.value !== '' && inp2.value !== '' && inp3.value !== '' && inp4.value !== '' && inp5.value !== '' && inp6.value !== '' && inp7.value !== ''){
        location.reload()
        alert('Данные сохранены')
    }

}
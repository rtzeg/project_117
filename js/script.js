let doc = document
let line_one = doc.querySelector(".tariff-line-1")
let line_two = doc.querySelector(".tariff-line-2")
let line_three = doc.querySelector(".tariff-line-3")
let tariff_img = doc.querySelector(".tariff-img")
let btn_one = doc.querySelector("#button-1")
let btn_two = doc.querySelector("#button-2")
let btn_three = doc.querySelector("#button-3")
let description1 = doc.querySelector("#description-1")
let description2 = doc.querySelector("#description-2")
let description3 = doc.querySelector("#description-3")
let description4 = doc.querySelector("#description-4")
let tariff_img_span = doc.querySelector(".tariff-img-span")
let tariff_img_title = doc.querySelector(".tariff-img-title")


function fn(a,b,c) {
    a.style.opacity = 1
    b.style.opacity = 0.5
    c.style.opacity = 0.5
}

line_one.addEventListener("click", () => {
    fn(line_one,line_two,line_three)
    tariff_img.style.backgroundImage = 'url("img/tariff-img.png")'
    tariff_img_title.textContent = "А так я получается"
    tariff_img_span.textContent = "экономлю"
    tariff_img_title.style.color = "#04242B"
})
line_two.addEventListener("click", () => {
    fn(line_two,line_one,line_three)
    tariff_img.style.backgroundImage = "url('img/tariff-img2.png')"
    tariff_img_span.textContent = "Хасбик"
    tariff_img_title.textContent = "А так я получается"
    tariff_img_title.style.color = "white"
})
line_three.addEventListener("click", () => {
    fn(line_three,line_two,line_one)
    tariff_img.style.backgroundImage = "url('img/tariff-img3.png')"
    tariff_img_span.textContent = "Хасбик???"
    tariff_img_title.textContent = "А когда не"
    tariff_img_title.style.color = "white"
})

function functionBtn(a,b,c){
    a.classList.add("button-active")
    b.classList.remove("button-active")
    c.classList.remove("button-active")
}

function changeText(a,b,c,d) {
    description1.textContent = a
    description2.textContent = b
    description3.textContent = c
    description4.textContent = d
}

btn_one.onclick = () => {
    functionBtn(btn_one, btn_two, btn_three)
    changeText("Пробный период 1 месяц бесплатно","Находите людей со 100% совместимостью","Запретите видеться себя геолокации","Скройтесь ото всех")
}

btn_two.onclick = () => {
    functionBtn(btn_two, btn_one, btn_three)
    changeText("Здесь поменялся текст","И здесь","И тут","Здесь тоже")
}

btn_three.onclick = () => {
    functionBtn(btn_three, btn_two, btn_one)
    changeText("Че писать-то?","У мужлан нет прав","Здесь поменялся текст","Здесь тоже")
}
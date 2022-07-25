let url_first = 'http://localhost:3001/trip_types'
axios.get(url_first)
    .then(res => {
        if (res.status === 200 || res.status === 2001) {
            first(res.data)
        }
    })

let grid = document.querySelector('.about-1')

function first(arr) {
    grid.innerHTML = ''
    for (let item of arr) {
        grid.innerHTML += `
        <div class="grid-1">
        <img src="${item.img}" class="back_img">
        <span class="tur">${item.name}</span>
        <span class="gps">${item.where}</span>
        <div class="div-clock">
            <img src="${item.icon_one}" height="18px">
            <span class="inf">${item.time}</span>
        </div>
        <div class="div-coin">
            <img src="${item.icon_two}" height="18px">
            <span class="inf">${item.price}</span>
        </div>
        <div class="text-about">
            <span>${item.about}</span>
        </div>
        <button class="button-2">Подробнее</button>
        </div>
        `
    }
}

let url_second = 'http://localhost:3001/About_Us'

axios.get(url_second)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            second(res.data)
        }
    })

let box = document.querySelector('.text-about-2')

function second(arr) {
    box.innerHTML = ""

    for (let item of arr) {
        box.innerHTML += `
        <div class="name_about">
            <p class="name-about-3">${item.text}</p>
        </div>
    `
    }
}

let url_third = 'http://localhost:3001/Types_of_excursions'

axios.get(url_third)
    .then(res => {
        if (res.status === 200 || res.status === 201) {
            third(res.data)
        }
    })

let assosrtiment = document.querySelector('.assosrtiment')

function third(arr) {
    assosrtiment.innerHTML = ""

    for (let item of arr) {
        assosrtiment.innerHTML += `
        <div class="assosrtiment_div">
                    <img src="${item.img}" class="bus">
                    <p class="name">${item.name}</p>
                    <p class="name_info">${item.about}</p>
        </div>
        `
    }
}

const data = [
    {
        image:  "pexels-mehmet-turgut-kirkgoz-14051747.jpg",
        h3: 'Cozy 5 Stars Apartment',
        desc: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to `Naviglio` where you can enjoy the main  night life in Barcelona.' ,
        price: '$899/night',
        map: "location-pin.png",
        location: 'Barcelona, Spain'
    },

    {
        image:  "pexels-atbo-245219.jpg",
        h3: 'Office Studio',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to `Naviglio` where you enjoy the night life in London, UK.' ,
        price: '$1.119/night',
        map: "location-pin.png",
        location: 'London, UK'
    },

    {
        image:  "pexels-maria-geller-2127023.jpg",
        h3: 'Beautiful Castle',
        desc: 'The place is close to Metro Station and bus stop just 2 min by walk and near to `Naviglio` where you enjoy the night life in Milan.' ,
        price: '$459/night',
        map: "location-pin.png",
        location: 'Milan, Italy'
    },
]

for (i = 0; i < data.length; i++) {
    const box = document.querySelector('.box');

    const card = document.createElement('div');
    card.classList.add('card');

    const mainCards = `
    <img src="${data[i].image}">
    <h3>${data[i].h3}</h3>
    <p>${data[i].desc}</p>
    <hr>
    <p>${data[i].price}</p>
    <img src="${data[i].map}">
    <p>${data[i].location}</p>
    `

    card.innerHTML = mainCards;
    box.appendChild(card);
}
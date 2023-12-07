
// const array = [
// {"name": "Handcrafted Steel Car",
// "title": "snakjgkjgkjkjgkjggkjkgjke",
// "image": "https://loremflickr.com/640/480/technics",
// "price": "4",
// "lastPrice": "1",
// "id": "79"
// },
// {
// "title": "cow",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Electronic Metal Pants",
// "price": "9",
// "lastPrice": "5",
// "id": "80"
// },
// {
// "title": "cow",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Oriental Soft Keyboard",
// "price": "2",
// "lastPrice": "1",
// "id": "81"
// },
// {
// "title": "dog",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Oriental Wooden Cheese",
// "price": "9",
// "lastPrice": "6",
// "id": "82"
// },
// {
// "title": "snake",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Sleek Granite Salad",
// "price": "3",
// "lastPrice": "3",
// "id": "83"
// },
// {
// "title": "snake",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Luxurious Steel Sausages",
// "price": "2",
// "lastPrice": "3",
// "id": "84"
// },
// {
// "title": "bear",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Intelligent Wooden Pizza",
// "price": "9",
// "lastPrice": "5",
// "id": "85"
// },
// {
// "title": "bird",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Intelligent Soft Bacon",
// "price": "8",
// "lastPrice": "5",
// "id": "86"
// },
// {
// "title": "dog",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Refined Cotton Table",
// "price": "1",
// "lastPrice": "1",
// "id": "87"
// },
// {
// "title": "horse",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Tasty Soft Sausages",
// "price": "3",
// "lastPrice": "2",
// "id": "88"
// },
// {
// "title": "bear",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Fantastic Frozen Pizza",
// "price": "1",
// "lastPrice": "3",
// "id": "89"
// },
// {
// "title": "snake",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Elegant Frozen Chicken",
// "price": "6",
// "lastPrice": "9",
// "id": "90"
// },
// {
// "title": "horse",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Handcrafted Bronze Chair",
// "price": "6",
// "lastPrice": "1",
// "id": "91"
// },
// {
// "title": "snake",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Elegant Wooden Computer",
// "price": "7",
// "lastPrice": "9",
// "id": "92"
// },
// {
// "title": "bear",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Intelligent Soft Tuna",
// "price": "3",
// "lastPrice": "6",
// "id": "93"
// },
// {
// "title": "snake",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Small Fresh Sausages",
// "price": "7",
// "lastPrice": "4",
// "id": "94"
// },
// {
// "title": "fish",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Elegant Bronze Tuna",
// "price": "5",
// "lastPrice": "6",
// "id": "95"
// },
// {
// "title": "fish",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Small Fresh Tuna",
// "price": "4",
// "lastPrice": "3",
// "id": "96"
// },
// {
// "title": "crocodilia",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Ergonomic Metal Soap",
// "price": "4",
// "lastPrice": "8",
// "id": "97"
// },
// {
// "title": "rabbit",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Incredible Plastic Fish",
// "price": "8",
// "lastPrice": "5",
// "id": "98"
// },
// {
// "title": "bear",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Recycled Soft Tuna",
// "price": "4",
// "lastPrice": "8",
// "id": "99"
// },
// {
// "title": "cetacean",
// "image": "https://loremflickr.com/640/480/technics",
// "name": "Elegant Granite Chips",
// "price": "2",
// "lastPrice": "5",
// "id": "100"
// }
// ]


// console.log(array);
    
//const content = document.getElementById('content')

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     content.innerHTML += `  <div class="block">
//                                 <img src="${element.image}" alt="">
//                                 <h2>${element.name}</h2>
//                                 <h2>${element.id}</h2>
//                                 <h3>${element.title}</h3>
//                                 <h3>${element.price}</h3>
//                                 <h3>${element.lastPrice}</h3>
//                              </div>`

// }



// 

const fruits = ["kiwi", "apple", "orange", "grape", "kiwi", "apple", "mango"];

function searchFruits() {
    const searchTerm = document.getElementById("search").value.toLowerCase();

    const filteredFruits = fruits.filter(fruit => fruit.toLowerCase().includes(searchTerm));

    displayFruits(filteredFruits);
}

function displayFruits(items) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    if (items.length === 0) {
        content.innerHTML = 'No matching items found.';
        return;
    }

    for (let i = 0; i < items.length; i++) {
        content.innerHTML += `<div class="block">${items[i]}</div>`;
    }
}


displayFruits(fruits);





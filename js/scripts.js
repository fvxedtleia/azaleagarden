document.querySelector('html').style.scrollBehavior = 'smooth';


function clearCart() {
    cart = 0;
    showCounter.textContent = cart;
    buketes = calcBuckets(cart); 
    document.getElementById("cart_nums").textContent = "В корзине: "  + String(cart) + " " + buketes;
    localStorage.setItem("cart", 0);
}

function calcBuckets(cart){
    let buketes = "";
    if ([11, 111,12,13,14,112,113,114].includes(Number(cart))) {
        buckets = "букетов";
    } else if (cart == 1){
        buketes = "букет";
    } else if([5,6,7,8,9,0].includes(Number(String(cart)[String(cart).length-1]))){
        buketes = "букетов";
    } else {
        buketes = "букета";
    }
    return buketes;
}
let cart = 0;
const storedArr = localStorage.getItem("cart");
if (storedArr !== null) {
    cart = Number(storedArr);
}
let showCounter = document.getElementById("cart_num");
showCounter.textContent = cart;

let buketes = calcBuckets(cart);
document.getElementById("cart_nums").textContent = "В корзине: " + String(cart) + " " + buketes;

function subscribe(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const message = document.getElementById('message');

    message.textContent = `Благодарим, ${name}!`;
    message.classList.remove('hidden'); 

    document.getElementById('subscribe-form').reset();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('order-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name-cart').value;
        const email = document.getElementById('email-cart').value;
        const tel = document.getElementById('tel').value;


        messg.textContent = `Заказ оформлен, ${name}!`;
        messg.classList.remove('hidd');

        form.reset();
    });
});

function que(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const message = document.getElementById('message');

    message.textContent = `Обязательно ответим на Ваш вопрос!`;
    message.classList.remove('hidden'); 

    document.getElementById('que-form').reset();
}
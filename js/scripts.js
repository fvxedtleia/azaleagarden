document.querySelector('html').style.scrollBehavior = 'smooth';


function clearCart() {
    cart = 0;
    showCounter.textContent = cart; 
    document.getElementById("cart_nums").textContent = "В корзине: "  + String(cart) + " " + buketes;
    localStorage.setItem("cart", 0);
    buketes = "букетов"
}
let cart = 0;
let buketes = "букетов";
const storedArr = localStorage.getItem("cart");
if (storedArr !== null) {
    cart = Number(storedArr);
}
let showCounter = document.getElementById("cart_num");
showCounter.textContent = cart;
if ([11, 111,12,13,14,112,113,114].includes(Number(cart))) {
    buckets = "букетов";
} else if([5,6,7,8,9,0].includes(Number(String(cart)[String(cart).length-1]))){
    buketes = "букетов";
} else if(cart == 1) {
    buketes = "букет";
} else {
    buketes = "букета";
}
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
        // Предотвращаем стандартное поведение формы
        event.preventDefault();

        // Получаем значения из полей ввода
        const name = document.getElementById('name-cart').value;
        const email = document.getElementById('email-cart').value;
        const tel = document.getElementById('tel').value;

        // Здесь вы можете выполнить действия с данными, например, отправить их на сервер

        // Выводим сообщение (можно заменить на alert или другой способ отображения)
        /* alert(`Спасибо за ваш заказ, ${name}!\nВаш Email: ${email}\nВаш номер: ${tel}`); */
        messg.textContent = `Заказ оформлен, ${name}!`;
        messg.classList.remove('hidd');

        // Очищаем форму
        form.reset();
    });
});

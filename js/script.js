document.querySelector('html').style.scrollBehavior = 'smooth';



function subscribe(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value;
    const message = document.getElementById('message');

    message.textContent = `Благодарим, ${name}!`;
    message.classList.remove('hidden'); 

    document.getElementById('subscribe-form').reset();
}


let cart = 0;
const storedArr = localStorage.getItem("cart");
if (storedArr !== null) {
    cart = Number(storedArr);
}
let showCounter = document.getElementById("cart_num");
console.log(showCounter);
showCounter.textContent = cart;
if (showCounter.length == 2){
    showCounter[1].textContent = cart;
}

function addToCart(name) {
    cart += 1;
    alert(`Теперь в корзине: ${name}`)

    localStorage.setItem("cart", cart);

    showCounter.textContent = cart;
}
function clearCart() {
    cart = 0;
    showCounter.textContent = cart; 
    localStorage.setItem("cart", 0);
}


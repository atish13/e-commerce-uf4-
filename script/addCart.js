
var MainImg = document.getElementById('MainImg');
var product = document.querySelector(".cart-section");
let amt = 0.00;

function product_details(imgSrc, price) {
    document.getElementById('MainImg').src = imgSrc;
    document.querySelector('#product-price').innerText = price;
    document.getElementById('MainImg').scrollIntoView({ behavior: 'smooth' });
}

function showImg(img) {
    MainImg.src = img;
}

function defaultImg() {
    MainImg.src = 'https://indiandesigns.com/cdn/shop/files/IMG-20230807-WA0005.jpg?v=1691455860&width=713';
}

function cartClose() {
    const cart = document.querySelector(".cart");
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}
//toast notification
const toastTrigger = document.getElementById('liveToastBtn')
   const toastLiveExample = document.getElementById('liveToast')
  if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    Swal.fire({text:"A new Product Added", confirmButtonColor: "black",
    });
 
   
    addToCart();
    iconsNotify();
  })
}


function addToCart() {
   
    // Image, title, and price
    const img = MainImg.src;
    const title = document.querySelector("#Main-title").textContent;
    const price = parseFloat(document.querySelector("#product-price").textContent);
   

    // Main container
    const div = document.createElement('div');
    div.style.display = "flex";
    div.style.marginTop = "10px";
    div.style.paddingBottom = "5px";
    div.style.marginBottom = "10px";
    div.style.borderBottom = "0.2px solid grey";

    

    // Image section
    const div1 = document.createElement('div');
    const image = document.createElement('img');
    image.setAttribute('width', '60px');
    image.setAttribute('height', '70px');
    image.setAttribute('src', img);
    div1.appendChild(image);
    div.appendChild(div1);

    // Title and Price section
    const div2 = document.createElement('div');
    const p1 = document.createElement('p');
    p1.style.fontSize = "13px";
    const p2 = document.createElement('p');
    div2.style.marginLeft = "5px";
    p1.textContent = title;
    p2.textContent = price.toFixed(2);
    div2.appendChild(p1);
    div2.appendChild(p2);
    div.appendChild(div2);

    // Quantity section
    const div3 = document.createElement('div');
    div3.style.marginLeft = "5px";
    const innerDiv = document.createElement('div');
    innerDiv.style.display = 'flex';

    // Decrement button
    const decrementBtn = document.createElement('button');
    decrementBtn.innerHTML = '<i class="fas fa-minus"></i>';
    decrementBtn.setAttribute("class", "btn btn-sm");
    innerDiv.appendChild(decrementBtn);

    // Quantity input
    const ip = document.createElement('input');
    ip.setAttribute('type', 'text');
    ip.setAttribute('value', '1');
    ip.style.fontSize = '13px';
    ip.style.width = '30px';
    ip.style.textAlign = 'center';
    ip.setAttribute('class', 'form-control text-center quantity');
    innerDiv.appendChild(ip);

    // Increment button
    const incrementBtn = document.createElement('button');
    incrementBtn.innerHTML = '<i class="fas fa-plus"></i>';
    incrementBtn.setAttribute("class", "btn btn-sm increment");
    innerDiv.appendChild(incrementBtn);

    // Remove button
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    removeBtn.setAttribute('class', 'btn btn-sm mx-3 fs-5');
    innerDiv.appendChild(removeBtn);
  

    div3.appendChild(innerDiv);
    div.appendChild(div3);
    product.appendChild(div);

    // Add initial price to total
    amt += price;
    updateTotalPrice();

    // Increment functionality
    incrementBtn.addEventListener('click', () => {
        let quantity = parseInt(ip.value);
        quantity++;
        ip.value = quantity;
        updateTotalPrice();
    });

    // Decrement functionality
    decrementBtn.addEventListener('click', () => {
        let quantity = parseInt(ip.value);
        if (quantity > 1) {
            quantity--;
            ip.value = quantity;
            updateTotalPrice();
        }
    });

    // Remove functionality
    removeBtn.addEventListener('click', () => {
        const currentQuantity = parseInt(ip.value);
        amt -= currentQuantity * price;
        updateTotalPrice();
        div.remove();
        iconsVal();
    });

    // Function to update the total price
    function updateTotalPrice() {
        amt = Array.from(document.querySelectorAll('.cart-section > div')).reduce((total, item) => {
            const itemPrice = parseFloat(item.querySelector('p:nth-child(2)').textContent);
            const itemQuantity = parseInt(item.querySelector('input.quantity').value);
            return total + (itemPrice * itemQuantity);
        }, 0);
        document.querySelector(".total-price").innerText = amt.toFixed(2);
        console.log(amt);
    }
    
}

function iconsNotify()
{
    const notify=document.querySelector(".add-cart-notify");
    const notifyVal=parseInt(notify.textContent);
    const newVal=notifyVal+1;
    notify.textContent=newVal;
   
}
function iconsVal()
{
      //remove icons value
      const notify=document.querySelector(".add-cart-notify");
      const notifyVal=parseInt(notify.textContent);
      const newVal=notifyVal-1;
      notify.textContent=newVal;
}
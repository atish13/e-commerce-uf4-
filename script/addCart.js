//     var MainImg = document.getElementById('MainImg');
//     var product=document.querySelector(".cart-section");
//     let amt=0.00;

  
//     function product_details(imgSrc, price) {
//         document.getElementById('MainImg').src = imgSrc;
        
//         document.querySelector('#product-price').innerText = price;
        
//         document.getElementById('MainImg').scrollIntoView({ behavior: 'smooth' });

//     }

//     function showImg(img)
//     {
//         MainImg.src=img;
//     }
//     function defaultImg()
//     {
//         MainImg.src='https://indiandesigns.com/cdn/shop/files/IMG-20230807-WA0005.jpg?v=1691455860&width=713';
//     }
//     function cart()
//     {
//         const cart= document.querySelector(".cart");
//         if (cart.style.display === 'none') {
//                 cart.style.display = 'block';
//             } else {
//                 cart.style.display = 'none';
//             }
//     }
    
   
//     function hello()
//     {
//         // Image
//     const img = MainImg.src;
//     const title = document.querySelector("#Main-title").textContent;
//     const price = document.querySelector("#Main-price").textContent;
//     // const ProductPrice = document.querySelector(".total-price").textContent;

//     // Main container
//     const div = document.createElement('div');
//     div.style.display = "flex";
//     div.style.marginTop = "10px";
//     div.style.paddingBottom = "5px";
//     div.style.marginBottom = "10px";
//     div.style.borderBottom = "0.2px solid grey";

//     // Image section
//     const div1 = document.createElement('div');
//     const image = document.createElement('img');
//     image.setAttribute('width', '60px');
//     image.setAttribute('height', '70px');
//     image.setAttribute('src', img);
//     div1.appendChild(image);
//     div.appendChild(div1);

// // Title and Price section
// const div2 = document.createElement('div');
// const p1 = document.createElement('p');
// p1.style.fontSize = "13px";
// const p2 = document.createElement('p');
// div2.style.marginLeft = "5px";
// p1.textContent = title;
// p2.textContent = price;
// div2.appendChild(p1);
// div2.appendChild(p2);
// div.appendChild(div2);

// // Quantity section
// const div3 = document.createElement('div');
// div3.style.marginLeft = "5px";
// const innerDiv = document.createElement('div');
// innerDiv.style.display = 'flex';

// // Decrement button 
// const decrementBtn = document.createElement('button');
// decrementBtn.innerHTML = '<i class="fas fa-minus"></i>';
// decrementBtn.setAttribute("class", "btn btn-sm ");
// innerDiv.appendChild(decrementBtn);

// // Quantity input
// const ip = document.createElement('input');
// ip.setAttribute('type', 'text');
// ip.setAttribute('value', '1');
// ip.style.padding = "0px";
// ip.setAttribute('class', 'form-control text-center quantity');
// ip.style.fontSize = '13px';
// ip.style.width = '30px';
// ip.style.margin = '3px';
// ip.style.padding = '0px';
// ip.style.borderRadius = '30px';
// innerDiv.appendChild(ip);

// // Increment button with icon
// const incrementBtn = document.createElement('button');
// incrementBtn.innerHTML = '<i class="fas fa-plus"></i>'; 
// incrementBtn.setAttribute("class", "btn btn-sm  increment");
// innerDiv.appendChild(incrementBtn);


// // Remove button 
// const removeBtn = document.createElement('button');
// removeBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
// removeBtn.setAttribute('class', 'btn  btn-sm rounded-pill mx-3 fs-5');
// innerDiv.appendChild(removeBtn);

// div3.appendChild(innerDiv);
// div.appendChild(div3);

// // Append to the product container
// product.appendChild(div);

// // Increment functionality
//     incrementBtn.addEventListener('click', () => {
//     let val = parseInt(ip.value);
//     ip.value = val + 1;
    
//     // let quantityVal=parseInt(ip.value);
//     // let newVal=parseInt(price);
//     // let newPrice= quantityVal*newVal;
//     // console.log(parseInt(ip.value));
//     // let final= quantityVal*newVal;
// });

// // Decrement functionality
// decrementBtn.addEventListener('click', () => {
//     let val = parseInt(ip.value);
//     if (val > 1) ip.value = val - 1;
// });

// // Remove functionality
// removeBtn.addEventListener('click', () => {
//     div.remove();
// });

//      //price
//      const ProductPrice = document.querySelector("#product-price").textContent;
//      amt=amt+parseInt(ProductPrice);
//      document.querySelector(".total-price").innerText=amt;
   

//         // // const cimg=document.querySelector(".cart-img").src=img;
//         //  const ctitle=document.querySelector(".cart-name").textContent=title;
//         //  const cprice=document.querySelector(".cart-price").textContent=price; 
         
//         // const first=div.appendChild(cimg);
//         //   const first=p1.textContent=title;
//         //   const second=p2.textContent=price;
//         //   div.appendChild(first);
//         //   div.appendChild(second);
//         //   product.appendChild(div);
//     }














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

function cart() {
    const cart = document.querySelector(".cart");
    cart.style.display = cart.style.display === 'none' ? 'block' : 'none';
}

function hello() {
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

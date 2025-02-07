const heartIcon=document.querySelector(".heart");
function myWishlist()
    {
        // document.querySelector(".wishlist-heart").style.border="1px solid black";
        // window.alert('added');
     
        // const notifyVal=parseInt(notify.textContent);
           
            // heartIcon.classList.add("text-danger");
             heartIcon.classList.toggle("text-danger");
            //  notify.textContent=notifyVal+1;
             Swal.fire({text:"Added in Whishlist 💖"});

    }
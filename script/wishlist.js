const heartIcon=document.querySelector(".heart");
var MainImg = document.getElementById('MainImg').src;
const title = document.querySelector("#Main-title").textContent;
const price = parseFloat(document.querySelector("#product-price").textContent);

    function myWishlist()
    {
           // heartIcon.classList.add("text-danger");
             heartIcon.classList.toggle("text-danger");
            //  notify.textContent=notifyVal+1;
             Swal.fire({text:"Added in Whishlist 💖"});

             addWishList();
    }

    function addWishList()
    {

        dataStore();

       

        const content=document.querySelector(".Wishlist-product");
       

        const img=document.createElement("img");
        const p1=document.createElement("p");
        const p2=document.createElement("p");

        const row=document.createElement("div");
        row.classList.add("row d-flex px-5 py-3");

        // image setting 
        const ImageDiv=document.createElement("div");
        ImageDiv.classList.add("col-lg-3 col-md-3 col-sm-12")
        img.src=localStorage.getItem("imgSrc");
        ImageDiv.append(img);


        //image content
        const imageContentDiv=document.createElement("div");
        const p3=document.createElement("p");
        p3.classList.add("text-danger mb-0 ");
        p3.textContent="In Stock"
        imageContentDiv.append(p3);

        const p4=document.createElement("p");
        p4.textContent=localStorage.getItem("title");
        imageContentDiv.append(p4);

        const p5=document.createElement("p");
        p5.classList.add("fs-6 text-secondary mb-0");
        p5.textContent="Categories:Art";
        imageContentDiv.append(p5);

        const p6=document.createElement("p");
        p6.classList.add("fs-5 fw-bold");
        p6.textContent= localStorage.getItem("price");
        imageContentDiv.append(p6);

       row.append(ImageDiv);
       row.append(imageContentDiv);

       
        document.querySelector(".Wishlist-product").append(row);
    }

    function dataStore()
    {
        localStorage.setItem("imgSrc",MainImg);
        localStorage.setItem("title",title);
        localStorage.setItem("price",price);
        
    }
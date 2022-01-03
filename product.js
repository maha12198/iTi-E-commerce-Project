var data = [
   {
      "sourc": "images/pic1.jpg",
      "price": "50$",
      "name": "coat",
      "productdetails": "this my coat"
   }
   ,

   {
      "sourc": "images/pic2.jpg",
      "price": "20$",
      "name": "bag",
      "productdetails": "this my bag"
   }

   ,
   {
      "sourc": "images/pic3.jpg",
      "price": "60$",
      "name": "blavor",
      "productdetails": "this my blavor"
   }

   ,
   {
      "sourc": "images/pic4.jpg",
      "price": "80$",
      "name": "blazer",
      "productdetails": "this my blazer"
   }

   ,
   {
      "sourc": "images/pic5.jpg",
      "price": "20$",
      "name": "bag",
      "productdetails": "this my bag"
   }

   ,
   {
      "sourc": "images/pic6.webp",
      "price": "30$",
      "name": "bants",
      "productdetails": "this my bants"
   }

   ,
   {
      "sourc": "images/pic7.webp",
      "price": "20$",
      "name": "bag",
      "productdetails": "this my bag"
   }

   ,
   {
      "sourc": "images/pic8.jpg",
      "price": "60$",
      "name": "blazer",
      "productdetails": "this my blazer"
   }

   ,
   {
      "sourc": "images/mpic1.jpg",
      "price": "40$",
      "name": "jacket",
      "productdetails": "this my jacket"
   }

   ,
   {
      "sourc": "images/mpic2.jpeg",
      "price": "50$",
      "name": "coat",
      "productdetails": "this my coat"
   }

   ,
   {
      "sourc": "images/mpic3.jpg",
      "price": "50$",
      "name": "coat",
      "productdetails": "this my coat"
   }

   ,
   {
      "sourc": "images/mpic4.jpg",
      "price": "60$",
      "name": "coat",
      "productdetails": "this my coat"
   }

   ,
   {
      "sourc": "images/mpic5.webp",
      "price": "60$",
      "name": "blavor",
      "productdetails": "this my blavor"
   }

   ,
   {
      "sourc": "images/mpic6.webp",
      "price": "50$",
      "name": "jacket",
      "productdetails": "this my jacket"
   }

   ,
   {
      "sourc": "images/mpic7.jpg",
      "price": "30$",
      "name": "T-shirt",
      "productdetails": "this my T-shirt"
   }

   ,
   {
      "sourc": "images/mpic8.jpg",
      "price": "40$",
      "name": "T-shirt",
      "productdetails": "this my T-shirt"
   }

]
console.log(data);

function getDetails(e) {
   var imgID = e.target.id;
   console.log(imgID);
   localStorage.source = data[imgID].sourc;
   localStorage.price = data[imgID].price;
   localStorage.name = data[imgID].name;
   localStorage.productDetails = data[imgID].productdetails;

   localStorage.imgID = imgID;
   if (imgID >= 0 && imgID < 8) {
      localStorage.img1 = data[0].sourc;
      localStorage.img2 = data[1].sourc;
      localStorage.img3 = data[2].sourc;
      localStorage.img4 = data[3].sourc;
      localStorage.img5 = data[4].sourc;
      localStorage.img6 = data[5].sourc;
      localStorage.img7 = data[6].sourc;
      localStorage.img8 = data[7].sourc;

      localStorage.nm1 = data[0].name;
      localStorage.nm2 = data[1].name;
      localStorage.nm3 = data[2].name;
      localStorage.nm4 = data[3].name;
      localStorage.nm5 = data[4].name;
      localStorage.nm6 = data[5].name;
      localStorage.nm7 = data[6].name;
      localStorage.nm8 = data[7].name;


      localStorage.pr1 = data[0].price;
      localStorage.pr2 = data[1].price;
      localStorage.pr3 = data[2].price;
      localStorage.pr4 = data[3].price;
      localStorage.pr5 = data[4].price;
      localStorage.pr6 = data[5].price;
      localStorage.pr7 = data[6].price;
      localStorage.pr8 = data[7].price;



   }
   //if the product is in men category
   else if (imgID >= 8 && imgID < 16) {

      localStorage.img1 = data[8].sourc;
      localStorage.img2 = data[9].sourc;
      localStorage.img3 = data[10].sourc;
      localStorage.img4 = data[11].sourc;
      localStorage.img5 = data[12].sourc;
      localStorage.img6 = data[13].sourc;
      localStorage.img7 = data[14].sourc;
      localStorage.img8 = data[15].sourc;

      localStorage.nm1 = data[8].name;
      localStorage.nm2 = data[9].name;
      localStorage.nm3 = data[10].name;
      localStorage.nm4 = data[11].name;
      localStorage.nm5 = data[12].name;
      localStorage.nm6 = data[13].name;
      localStorage.nm7 = data[14].name;
      localStorage.nm8 = data[15].name;

      localStorage.pr1 = data[8].price;
      localStorage.pr2 = data[9].price;
      localStorage.pr3 = data[10].price;
      localStorage.pr4 = data[11].price;
      localStorage.pr5 = data[12].price;
      localStorage.pr6 = data[13].price;
      localStorage.pr7 = data[14].price;
      localStorage.pr8 = data[15].price;
   }

   var mywin = window.open('product-details.html')


}








//------------------Cart--------------------------

document.querySelector("body").onload = function () {

   localStorage.removeItem("cart");
   localStorage.removeItem("cartname");
   localStorage.removeItem("cartprice");
   
   for (var i = 0; i < 8; i++) {

      document.getElementById("w").innerHTML +=
         '<div class="product">' +
         '<div class="product-header"> ' +
         '  <img src="" alt=""  class="w">' +
         '  <ul class="icons"> ' +
         '<span><i class="bx bx-heart"></i></span> ' +
         '<span class="" ><i class=" cartclass bx bx-shopping-bag"></i></span> ' +
         '</ul> ' +
         '</div> ' +
         '<div class="product-footer"> ' +
         '  <h3 class="namew"> </h3>' +
         '<div class="rating"> ' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bx-star"></i>' +
         '</div> ' +
         ' <h4 class="price prw" ></h4> ' +
         ' </div>' +
         ' </div>'
      document.getElementsByClassName("namew")[i].innerHTML = data[i].name;
      console.log(data[i].name)
      var mg = document.getElementsByClassName("w");
      mg[i].src = data[i].sourc;
      mg[i].setAttribute("id", i);
      var ID = mg[i].getAttribute("id");
      console.log(ID)
      document.getElementsByClassName("prw")[i].innerHTML = data[i].price;
      console.log(data[i].price)
      var cart = document.getElementsByClassName("cartclass");
      cart[i].setAttribute("id", "cart" + i)
   }
   mg[0].onclick = getDetails;
   mg[1].onclick = getDetails;
   mg[2].onclick = getDetails;
   mg[3].onclick = getDetails;
   mg[4].onclick = getDetails;
   mg[5].onclick = getDetails;
   mg[6].onclick = getDetails;
   mg[7].onclick = getDetails;

   cart[0].onclick = gotocart;
   cart[1].onclick = gotocart;
   cart[2].onclick = gotocart;
   cart[3].onclick = gotocart;
   cart[4].onclick = gotocart;
   cart[5].onclick = gotocart;
   cart[6].onclick = gotocart;
   cart[7].onclick = gotocart;



   for (var i = 0; i < 8; i++) {

      document.getElementById("m").innerHTML +=
         '<div class="product">' +
         '<div class="product-header"> ' +
         '  <img src="" alt=""  class="men">' +
         '  <ul class="icons"> ' +
         '<span><i class="bx bx-heart"></i></span> ' +
         '<span><i class=" cartclassm bx bx-shopping-bag"></i></span> ' +
         '</ul> ' +
         '</div> ' +
         '<div class="product-footer"> ' +
         '  <h3 class="name"> </h3>' +
         '<div class="rating"> ' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bxs-star"></i>' +
         ' <i class="bx bx-star"></i>' +
         '</div> ' +
         ' <h4 class="price prm" ></h4> ' +
         ' </div>' +
         ' </div>'

      document.getElementsByClassName("name")[i].innerHTML = data[8 + i].name;
      console.log(data[8+i].name)
      var imgs = document.getElementsByClassName("men");
      imgs[i].src = data[8 + i].sourc;
      imgs[i].setAttribute("id", i + 8);
      var ID = imgs[i].getAttribute("id");
      console.log(ID)
      var pr= data[i+8].price;
      console.log(pr)
      document.getElementsByClassName("prm")[i].innerHTML = pr;

      var card = document.getElementsByClassName("cartclassm");
      card[i].setAttribute("id", "cart" +(parseInt(i) +8))
   }

   imgs[0].onclick = getDetails;
   imgs[1].onclick = getDetails;
   imgs[2].onclick = getDetails;
   imgs[3].onclick = getDetails;
   imgs[4].onclick = getDetails;
   imgs[5].onclick = getDetails;
   imgs[6].onclick = getDetails;
   imgs[7].onclick = getDetails;


   card[0].onclick = gotocart;
   card[1].onclick = gotocart;
   card[2].onclick = gotocart;
   card[3].onclick = gotocart;
   card[4].onclick = gotocart;
   card[5].onclick = gotocart;
   card[6].onclick = gotocart;
   card[7].onclick = gotocart;
}


function gotocart(e) {
   var cartid = e.target.id
   console.log(cartid);
   var IDd= cartid.split("t")[1]
    console.log(IDd)
    var img = document.getElementById(IDd);
    console.log(img)
    localStorage.cart+= 'add'+ data[IDd].sourc;
    localStorage.cartname+='add'+data[IDd].name;
    localStorage.cartprice+='add'+data[IDd].price;

    window.open("cart.html")
}




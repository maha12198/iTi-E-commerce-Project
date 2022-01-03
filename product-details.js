
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
 
]
var men = 
[    
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
    var imgid=localStorage.imgID;
    if (imgid>=0 && imgid<8 ) {
    var imgID = e.target.id;
    console.log(imgID);
    localStorage.source = data[imgID].sourc;
    localStorage.price = data[imgID].price;
    localStorage.name = data[imgID].name;
    localStorage.productDetails = data[imgID].productdetails;
    }

    else if (imgid>=8 && imgid<15 ) {
        var imgID = e.target.id;
        console.log(imgID);
        localStorage.source = men[imgID].sourc;
        localStorage.price = men[imgID].price;
        localStorage.name = men[imgID].name;
        localStorage.productDetails = men[imgID].productdetails;

    }

    if (imgid>=0 && imgid<8 ) {
       localStorage.img1=data[0].sourc;
       localStorage.img2=data[1].sourc;
       localStorage.img3=data[2].sourc;
       localStorage.img4=data[3].sourc;
       localStorage.img5=data[4].sourc;
       localStorage.img6=data[5].sourc;
       localStorage.img7=data[6].sourc;
       localStorage.img8=data[7].sourc;
 
       localStorage.nm1=data[0].name;
       localStorage.nm2=data[1].name;
       localStorage.nm3=data[2].name;
       localStorage.nm4=data[3].name;
       localStorage.nm5=data[4].name;
       localStorage.nm6=data[5].name;
       localStorage.nm7=data[6].name;
       localStorage.nm8=data[7].name;
 
 
       localStorage.pr1=data[0].price;
       localStorage.pr2=data[1].price;
       localStorage.pr3=data[2].price;
       localStorage.pr4=data[3].price;
       localStorage.pr5=data[4].price;
       localStorage.pr6=data[5].price;
       localStorage.pr7=data[6].price;
       localStorage.pr8=data[7].price;
      
    }
    
    else if (imgid>=8 && imgid<16)
    {
 
       localStorage.img1=men[0].sourc;
       localStorage.img2=men[1].sourc;
       localStorage.img3=men[2].sourc;
       localStorage.img4=men[3].sourc;
       localStorage.img5=men[4].sourc;
       localStorage.img6=men[5].sourc;
       localStorage.img7=men[6].sourc;
       localStorage.img8=men[7].sourc;
 
       localStorage.nm1=men[0].name;
       localStorage.nm2=men[1].name;
       localStorage.nm3=men[2].name;
       localStorage.nm4=men[3].name;
       localStorage.nm5=men[4].name;
       localStorage.nm6=men[5].name;
       localStorage.nm7=men[6].name;
       localStorage.nm8=men[7].name;
 
       localStorage.pr1=men[0].price;
       localStorage.pr2=men[1].price;
       localStorage.pr3=men[2].price;
       localStorage.pr4=men[3].price;
       localStorage.pr5=men[4].price;
       localStorage.pr6=men[5].price;
       localStorage.pr7=men[6].price;
       localStorage.pr8=men[7].price;
    }
 
    var mywin = window.open('product-details.html')
    
 }
 


 
 
 



document.querySelector("body").onload=function(){
document.getElementById("img").src=localStorage.source;
document.getElementById("nm").innerHTML=localStorage.name;
document.getElementById("p").innerHTML=localStorage.price;
document.getElementById("d").innerHTML=localStorage.productDetails;


document.getElementById("0").src=localStorage.img1;
document.getElementById("1").src=localStorage.img2;
document.getElementById("2").src=localStorage.img3;
document.getElementById("3").src=localStorage.img4;
document.getElementById("4").src=localStorage.img5;
document.getElementById("5").src=localStorage.img6;
document.getElementById("6").src=localStorage.img7;
document.getElementById("7").src=localStorage.img8;

document.getElementById("nm1").innerHTML=localStorage.nm1;
document.getElementById("nm2").innerHTML=localStorage.nm2;
document.getElementById("nm3").innerHTML=localStorage.nm3;
document.getElementById("nm4").innerHTML=localStorage.nm4;
document.getElementById("nm5").innerHTML=localStorage.nm5;
document.getElementById("nm6").innerHTML=localStorage.nm6;
document.getElementById("nm7").innerHTML=localStorage.nm7;
document.getElementById("nm8").innerHTML=localStorage.nm8;


document.getElementById("pr1").innerHTML=localStorage.pr1;
document.getElementById("pr2").innerHTML=localStorage.pr2;
document.getElementById("pr3").innerHTML=localStorage.pr3;
document.getElementById("pr4").innerHTML=localStorage.pr4;
document.getElementById("pr5").innerHTML=localStorage.pr5;
document.getElementById("pr6").innerHTML=localStorage.pr6;
document.getElementById("pr7").innerHTML=localStorage.pr7;
document.getElementById("pr8").innerHTML=localStorage.pr8;

}
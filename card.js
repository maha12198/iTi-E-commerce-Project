var products = localStorage.cart
console.log(products)
var buys = products.split("add");
console.log(buys);
var uniqueproducts = [...new Set(buys)];
console.log(uniqueproducts)
var elements = uniqueproducts.shift();
console.log(uniqueproducts)


var productsName = localStorage.cartname;
var names = productsName.split("add");
console.log(names);
var dele = names.shift();
console.log(names)


var productsName = localStorage.cartprice;
var prices = productsName.split("add");
console.log(prices);
var dele = prices.shift();
console.log(prices)

for (var i = 0; i < uniqueproducts.length; i++) {

    var table = document.getElementById('t');

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = ' <div class="cart-info">' +
        '<img src="" alt="" class="imgsource">' +
        '<div>';

    cell2.innerHTML = '   <div>  ' +
        ' <p class="imgname"> </p>' +
        ' </div>';
    cell3.innerHTML = '  <span class="imgprice"> </span>' +
        '  <br />';

    document.getElementsByClassName("imgsource")[i].src = uniqueproducts[i];
    document.getElementsByClassName("imgname")[i].innerHTML = names[i]
    document.getElementsByClassName("imgprice")[i].innerHTML = prices[i]
}

document.getElementById("btn").onclick = function () {
    var values = document.getElementsByClassName('imgprice');
    console.log( "val"+values[0].innerHTML)

    var result = 0;
    for (let i = 0; i < values.length; i++) {
      var val =parseInt (values[i].innerHTML.split("$")[0] ) 
        console.log(val)
        result += val;
    }
    document.getElementById("total").innerHTML=result + '$';
    
var subtotal=parseInt( document.getElementById("dlivery").innerHTML.split("$")[0]);
subtotal+=result;
document.getElementById("result").innerHTML=subtotal;
}

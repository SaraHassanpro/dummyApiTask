
// dummyjson. API Code////////////////////////////////

function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            var step = JSON.parse(this.responseText);
            var item = step.products;
            console.log(item);
          
            // document.querySelector(".dumm img").src = item[0].images;
            // document.querySelector(".dumm h3").innerHTML = item[0].title;
            // document.querySelector(".dumm h5").innerHTML = item[0].price;
       
             var myResult = "";
             for (let index = 0; index < item.length; index++) {
                var cartona = `<div class="col-md-4 col-lg-4">
                <img src="${item[index].images[0]}" alt="" width="200px" height="200px">
                <h3>${item[index].title}</h3>
                <h5>${item[index].price}</h5>
                </div>`
                 myResult = myResult + cartona;
             }
             document.querySelector(".dumm").innerHTML = myResult;
        }
    }
    xhttp.open("GET",'https://dummyjson.com/products', true);
    xhttp.send();
}
getApi();



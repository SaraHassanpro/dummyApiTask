
// Forkify API Code////////////////////////////////

function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var step = JSON.parse(this.responseText);
            var item = step.recipes;
            console.log(item);
            // document.querySelector(".fork img").src = item[0].image_url;
            // document.querySelector(".fork h3").innerHTML = item[0].title;
            // document.querySelector(".fork a").href= item[0].source_url;
            var myResult = "";
            for (let index = 0; index < item.length; index++) {

                var cartona = `<div class="col-md-4 col-lg-4 ">
                                <img src="${item[index].image_url}" alt="" class="img-fluid" >
                                <h3>${item[index].title}</h3>
                                <a href="${item[index].source_url}"> Detils</a>
                            </div>`

                myResult = myResult + cartona;
            }
            document.querySelector(".fork").innerHTML = myResult;
        }
    }
    xhttp.open("GET", "https://forkify-api.herokuapp.com/api/search?q=pizza", true);
    xhttp.send();
}
getApi();

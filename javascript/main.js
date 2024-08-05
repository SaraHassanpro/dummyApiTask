function getApi() {
    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // document.querySelector("#demo").innerHTML = this.responseText;
            var item = JSON.parse(this.responseText);
            console.log(item);
            var myResult = "";
            for (let index = 0; index < item.length; index++) {
                //  document.querySelector(".test img").src=item[index].url;
                // document.querySelector(".test h3").innerHTML=item[index].id;
                // document.querySelector(".test h5").innerHTML=item[index].title;
                var cartona = `<div class="col-md-4 col-lg-4 ">
                <img src="${item[index].url}" alt="" class="img-fluid" >
                <h3>${item[index].id}</h3>
                <h5>${item[index].title}</h5>
            </div>`

                myResult = myResult + cartona;
            }
            document.querySelector(".test").innerHTML = myResult;
        }
    }
    xhttp.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
    xhttp.send();
}
getApi();


// fetch Method //////////////////////////////

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(function (data) {
        return data.json();
    })
    .then(function (item) {
        document.querySelector(".fetch img").src = item[0].url;
        document.querySelector(".fetch h3").innerHTML = item[0].id;
        document.querySelector(".fetch h5").innerHTML = item[0].title;
    })



            // document.querySelectorAll(".fork").forEach(function (item) {
            //     item.onload = function (event) {
            //         document.querySelector(".fork img").src = item[0].image_url;
            //         document.querySelector(".fork h3").innerHTML = item[0].title;
            //         document.querySelector(".fork a").href= item[0].source_url;
            //     };
            // });
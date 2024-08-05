

// async method ////////////////////////////////////
async function getApi() {
    var data = await fetch("https://jsonplaceholder.typicode.com/photos");
    var item = await data.json();
    document.querySelector(".asyn img").src = item[1].url;
    document.querySelector(".asyn h3").innerHTML = item[1].id;
    document.querySelector(".asyn h5").innerHTML = item[1].title;
}
getApi();



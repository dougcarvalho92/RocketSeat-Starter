// var xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// xhr.send(null);

// xhr.onreadystatechange = function () {
//     if (xhr.readyState == 4) {
//         console.log(JSON.parse(xhr.responseText));
//     }
// }



// =========================UTILIZANDO PROMISES==========================

axios.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
    console.log(response);
}).catch(function (error) {
    console.warn(error);
});

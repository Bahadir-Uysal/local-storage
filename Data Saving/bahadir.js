localStorage.setItem("name","bahadir");
localStorage.setItem("age",29);

let ad = localStorage.getItem("name");
let yas = localStorage.getItem("age");

console.log(ad,yas);

localStorage.name = "bahadir UYSAL";
localStorage.age = 30;

ad = localStorage.getItem("name");
yas = localStorage.getItem("age");

console.log(ad,yas);

// localStorage.removeItem("name");

localStorage.clear();

ad = localStorage.getItem("name");
yas = localStorage.getItem("age");
console.log(ad,yas);
console.log(window);
console.log(document);
console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title="Amazon"
console.log(document.body);

let img=document.images
console.log(img);
console.log(img.length);

for(let i=0;i<img.length;i++){
    console.log(img[i]);
    img[i].style.height="300px"
    img[i].style.width="300px"
    img[i].style.border="400%"
    img[i].alt="image"
}

let a=document.getElementById("demo")
console.log(a);
console.log(a.textContent);
a.textContent="Cat-Dog"
a.style.backgroundColor="SkyBlue"
a.style.textAlign="center"
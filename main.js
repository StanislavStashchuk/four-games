const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');

const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const text3 = document.getElementById('text3');
const text4 = document.getElementById('text4');

box1.addEventListener('mouseenter' ,() => { text1.style.opacity = '1'} )
box1.addEventListener('mouseleave' ,() => { text1.style.opacity = '0'} )

box2.addEventListener('mouseenter' ,() => { text2.style.opacity = '1'} )
box2.addEventListener('mouseleave' ,() => { text2.style.opacity = '0'} )

box3.addEventListener('mouseenter' ,() => { text3.style.opacity = '1'} )
box3.addEventListener('mouseleave' ,() => { text3.style.opacity = '0'} )

box4.addEventListener('mouseenter' ,() => { text4.style.opacity = '1'} )
box4.addEventListener('mouseleave' ,() => { text4.style.opacity = '0'} )

const cursor = document.querySelector(".cursor");

document.addEventListener('mousemove' ,e=>{cursor.setAttribute("main", "top: "  +(e.pageY-10)+"px; left: "+(e.pageX-10)+"px;")})
//head
document.title = "Signin form in js";

//body
bodyy = document.querySelector('body');
bodyy.style.boxsizing = 'borderBox';
bodyy.style.margin = '20px';
// box-sizing: border-box;
// bodyy.style.border = '1px solid #000';

firstInputName = document.createElement('span');
firstInputName.class = "textlari";
firstInputName.id = "birinchiInputTexti";
firstInputName.style.fontSize = '22px';
firstInputName.style.marginLeft = '12px';
// firstInputName.style.marginLeft = '90px';
// firstInputName.style.marginTop = '90px';
document.body.appendChild(firstInputName);
document.querySelector('#birinchiInputTexti').innerHTML= "URL + Autofocus </br>"

let input1 = document.createElement('input');
input1.type = "text";
input1.value = "https://";
input1.style.fontSize = '22px';
input1.style.marginTop = '10px';
input1.style.margin = '10px';
input1.id = "shadow";
input1.style.transition = '1s';
document.body.appendChild(input1);

let ikkinchiInputName = document.createElement('span');
ikkinchiInputName.id = "ikkinchiInputTexti";
ikkinchiInputName.style.position = 'relative'
ikkinchiInputName.style.top = '-40px';
ikkinchiInputName.style.marginLeft = '210px';
ikkinchiInputName.style.fontSize = '22px';
document.body.appendChild(ikkinchiInputName);
document.querySelector('#ikkinchiInputTexti').innerHTML = 'Email <br>';

let input2 = document.createElement('input');
input2.type = "email";
input2.placeholder = "name@example.com"
input2.style.fontSize = '22px';
input2.style.position = 'relative';
input2.id = "shadoww"
input2.style.transition = '1s';
// input2.style.textAlign = 'center'
input2.style.right = '50px';
input2.style.top = '-42px';
document.body.appendChild(input2);

let uchinchiInputName = document.createElement('span');
uchinchiInputName.id = "uchinchiInputTexti";
uchinchiInputName.style.position = 'relative'
uchinchiInputName.style.fontSize = '22px';
uchinchiInputName.style.float = 'right';
uchinchiInputName.style.top = '-80px';
uchinchiInputName.style.right = '200px'
document.body.appendChild(uchinchiInputName);
document.querySelector('#uchinchiInputTexti').innerHTML = 'Password <br>';

let input3 = document.createElement('input');
input3.type = "password";
input3.style.fontSize = '22px';
input3.style.float = 'right';
input3.style.position = 'relative';
input3.id = "shadowww";
input3.style.transition = "1s";
input3.style.right = '-70px';
input3.style.top = '-43px';
input3.placeholder = "joohndoe2102"
document.body.appendChild(input3);

let button = document.createElement('button');
button.style.fontSize = "22px";
button.style.borderRadius = "4px";
button.style.float = "left";
button.style.marginLeft = "10px";
button.style.cursor = "pointer";
button.style.marginTop = "10px";
document.body.appendChild(button);
button.innerHTML = 'Input-Submit';

let button2 = document.createElement('button');
document.body.appendChild(button2);
button2.style.fontSize = "22px";
button2.style.borderRadius = "4px";
button2.style.float = "left";
button2.style.marginLeft = "10px";
button2.style.cursor = "pointer";
button2.style.marginTop = "10px";
button2.innerHTML = 'Input-Button';

let button3 = document.createElement('button');
button3.style.fontSize = "22px";
button3.style.borderRadius = "4px";
button3.style.float = "left";
button3.style.marginLeft = "10px";
button3.style.cursor = "pointer";
button3.style.marginTop = "10px";
document.body.appendChild(button3);
button3.innerHTML = 'Input-Reset';

let button4 = document.createElement('button');
button4.style.fontSize = "22px";
button4.style.position = "relative";
button4.style.borderRadius = "4px";
button4.style.float = "left";
button4.style.marginLeft = "10px";
button4.style.cursor = "pointer";
button4.style.top = "10px";
// button4.style.position = "fixed";
document.body.appendChild(button4);
button4.innerHTML = 'Input Tag';


// document.getElementById(id).onclick = function(){code}
document.getElementById('shadowww').onclick = function () {
    document.getElementById('shadowww').style.boxShadow = '0px 0px 15px 2px dodgerblue';
    document.getElementById('shadowww').style.background = 'rgba(30, 143, 255, 0.110)';
}
document.getElementById('shadowww').onmouseout = function () {
    document.getElementById('shadowww').style.boxShadow = '0 0 0 0  white';
    document.getElementById('shadowww').style.background = 'white';
}

document.getElementById('shadoww').onclick = function () {
    document.getElementById('shadoww').style.boxShadow = '0px 0px 15px 2px dodgerblue';
    document.getElementById('shadoww').style.background = 'rgba(30, 143, 255, 0.110)';
}
document.getElementById('shadoww').onmouseout = function () {
    document.getElementById('shadoww').style.boxShadow = '0 0 0 0  white';
    document.getElementById('shadoww').style.background = 'white';
}

document.getElementById('shadow').onclick = function () {
    document.getElementById('shadow').style.boxShadow = '0px 0px 15px 2px dodgerblue';
    document.getElementById('shadow').style.background = 'rgba(30, 143, 255, 0.110)';
}
document.getElementById('shadow').onmouseout = function () {
    document.getElementById('shadow').style.boxShadow = '0 0 0 0  white';
    document.getElementById('shadow').style.background = 'white';
}
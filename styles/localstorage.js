
//////////הצגת השם משתמש בכותרת הדף
const hello=document.getElementById("hello");

function onPageLoad() {
    hello.innerHTM = `<img src="../../assets/לוגו לתת זה לקבל.png" width="90px"></img><a href="../../pages/personal-area/personal-area.html">להתחברות</a>` ;
    const nowUser = localStorage.getItem('IdPresentUser');
    const strNowUser = JSON.parse(nowUser);
    const Points =  localStorage.getItem("pointsOf"+strNowUser.Idnumber1);
    hello.innerHTML+=`<div><i class ="fas fa-user" ></i>${" "}${strNowUser.firstName1}${" "}${strNowUser.lastName1} </div><div><i class ="fas fa-shekel-sign" ></i>${" "} ${Points}</div>`;

    const LogOut = document.createElement('span');
    const LogIn = document.createElement('span');
    hello.appendChild(LogOut);
    hello.appendChild(LogIn);
        LogOut.innerHTML=`<i class="fas fa-level-up-alt"></i>`+"ליציאה ";
        LogIn.innerHTML=`<i class="fas fa-user"></i>` +"לאזור האישי";
    hello.onmouseover=()=>{
        LogOut.style.display="block";
        LogIn.style.display="block";
        hello.style.borderBottom="none";
    }
    hello.onmouseout=()=>{
        LogOut.style.display="none";
        LogIn.style.display="none";
        hello.style.borderBottom="solid 3px  #00ffd3";
    }
        LogOut.onclick=()=>{
        alert("מצטערים שאתה עוזב להתראות!")
        localStorage.setItem('IdPresentUser',"");
        hello.innerHTML=`<img src="../../assets/לוגו לתת זה לקבל.png" width="90px"></img><a href="../../pages/home/user.html">להתחברות</a>` ;
        hello.style.display="flex";
        hello.style.flexDirection="row";

         
    }
    LogIn.onclick=()=>{
        window.location.href="../../pages/personal-area/personal-area.html";
    }
}
//הדגשת השם של העמוד כשנמצאים בו
const pageurl = window.location.href;
const personal = document.getElementById("personal");
const productsT = document.getElementById("products");
const homeT = document.getElementById("homeT");
const loginT = document.getElementById("loginT");
const aboutT = document.getElementById("aboutT");


if(pageurl.includes("http://127.0.0.1:5501/pages/personal-area/personal-area.html"))
{
    personal.style.borderRadius="20px";
    personal.style.border= "10px solid #00ffd3"
    personal.style.padding="3px";
    
}
else if(pageurl.includes("http://127.0.0.1:5501/pages/products/products.html"))
{
    productsT.style.borderRadius="20px";
    productsT.style.border= "10px solid #00ffd3"
    // productsT.style.padding="3px";
}
else if(pageurl.includes("http://127.0.0.1:5501/pages/home/home.html"))
{
    homeT.style.borderRadius="20px";
    homeT.style.border= "10px solid #00ffd3"
    homeT.style.padding="3px";
}
else if(pageurl.includes("http://127.0.0.1:5501/pages/login/login.html"))
{
    loginT.style.borderRadius="20px";
    loginT.style.border= "10px solid #00ffd3"
    loginT.style.padding="3px";

}
else if(pageurl.includes("http://127.0.0.1:5501/pages/about/about.html"))
{
    aboutT.style.borderRadius="20px";
    aboutT.style.border= "10px solid #00ffd3"
    aboutT.style.padding="3px";

}

// ניווט עליון - רשימה
const list = document.getElementById("list");
const listOpen = document.getElementById("listOpen")
list.onclick = () =>{
    const listbutton = document.createElement("button");
    listbutton.innerHTML = `<i class="fas fa-times-circle" id="icon"></i>`;
    listOpen.appendChild(listbutton);
    listOpen.style.display ="block";
    listOpen.innerHTML= listbutton.innerHTML+ `       
    <li ><a href="../../pages/home/home.html"><i class ="fas fa-home" ></i>  דף הבית</a></li>
    <li><a href="../../pages/about/about.html"><i class ="fas fa-poll-h" ></i>   אודות</a></li>
    <li><a href="../../pages/products/products.html"><i class ="fas fa-list" ></i>  קטלוג מוצרים</a> </li>
    <li> <a href="../../pages/questions/questions.html"><i class ="fas fa-question" ></i>  שאלות נפוצות</a></li>
    <li><a href="../../pages/login/login.html"><i class="fas fa-sign-in-alt"></i>  התחברות</a></li>
    <li><a href="../../pages/personal-area/personal-area.html"><i  class="fas fa-shopping-basket"></i>  סל קניות</a></li>`;
    document.addEventListener('click', function (event) {
        if (event.target.matches('#icon'))
          close();
      })
    const close=() =>{
        listOpen.style.display="none";
    }
} 
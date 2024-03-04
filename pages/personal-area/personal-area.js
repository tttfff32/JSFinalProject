
const myCart = document.getElementById("myCart");
const strPresentUser = localStorage.getItem('IdPresentUser');
const PresentUser = JSON.parse(strPresentUser);
const point = localStorage.getItem("pointsOf" + PresentUser.Idnumber1);
const page = window.location.href;
const prodList = document.getElementById("prodList");
const deletebutton = document.getElementById("garbage");
if (strPresentUser === "") {
    window.location.href = "../../pages/home/user.html"
}
if (page.includes("http://127.0.0.1:5501/pages/personal-area/personal-area.html")) {
    let c = 0;
    myCart.innerHTML = `  <i class ="fas fa-user" ></i>  ` + PresentUser.firstName1 + " " + PresentUser.lastName1 + ` <div><i class ="fas fa-shekel-sign" ></i>   ${point}  נקודות  </div>`;
    const myArr = localStorage.getItem(PresentUser.Idnumber1);

    const myNewArr = JSON.parse(myArr);
    myNewArr.prodArr1.forEach(prod => {

        divProd = document.createElement('div');
        divProd.innerHTML = `<div>${c++}.<img src="../../assets/${prod.url}" width="100px" height="100px">|<span>${prod.name}</span>|<div><p>${prod.price} </p>נקודות</div>| 
        <i class="fas fa-trash-alt" id="garbage"></i></div>`;
        prodList.appendChild(divProd);

    });

    document.addEventListener('click', function (event) {
        if (event.target.matches('#garbage')){
       const eventTarget = event.target; 
       const productDiv = eventTarget.parentNode;
        const brother = productDiv.querySelector('span');
        const productName = brother.innerHTML;
        const priceBack = productDiv.querySelector('p');
        const priceBackStr = priceBack.innerHTML;
        intPrice = parseInt(priceBackStr);
        const points = localStorage.getItem("pointsOf" + PresentUser.Idnumber1);
       let  p= parseInt(points)
        let x =p+intPrice;
        localStorage.setItem("pointsOf" + PresentUser.Idnumber1,x);
        deleteB(productName);
        alert("המוצר נמחק בהצלחה"), { class: "alert", };
        window.location.href="../../pages/personal-area/personal-area.html";
        return productName;
        }
   
           
    })

  
    
    function deleteB(productName) {
        
        const index = myNewArr.prodArr1.findIndex(p => p.name === productName);
        myNewArr.prodArr1.splice(index, 1);
        prodArr2 = myNewArr.prodArr1;
        m = JSON.stringify(myNewArr);
        localStorage.setItem(PresentUser.Idnumber1, m);

    }

}
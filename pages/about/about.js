
const page = window.location.href;
const Hospitol = document.getElementById("Hospitol");
const oldmen = document.getElementById("oldmen");
const spacialChildren = document.getElementById("spacial-children");
const learnWith = document.getElementById("learn-with-child");
const families = document.getElementById("families");
let value = 2;
let num = 1;
if (page.includes("http://127.0.0.1:5501/pages/about/about.html")) {
    if (num < 4) {
         setInterval(() => {
            value--;
            if (value === 0) {
                Hospitol.src = "../../assets/בית חולים" + num + ".jpg";
                oldmen.src = "../../assets/קשיש"+ num + ".jpg";
                spacialChildren.src = "../../assets/מיוחדים" + num + ".jpg";
                learnWith.src = "../../assets/מתקשים" + num + ".jpg";
                families.src = "../../assets/רווחה"+ num + ".jpg";
                num++;
                value = 2;
                if (num === 4) {
                    num = 1;
                }
            }
        }, 1000)
    }
}
const activ = document.getElementById("activ");
const activ1 = document.getElementById("activ1");
const activ2 = document.getElementById("activ2");
const activ3 = document.getElementById("activ3");
const activ4 = document.getElementById("activ4");

const addbutton1 = document.createElement('button');
addbutton1.innerHTML = 'קרא עוד <I class="fas fa-backward"></I>';
const addbutton2 = document.createElement('button');
addbutton2.innerHTML = 'קרא עוד <I class="fas fa-backward"></I>';
const addbutton3 = document.createElement('button');
addbutton3.innerHTML = 'קרא עוד <I class="fas fa-backward"></I>';
const addbutton4 = document.createElement('button');
addbutton4.innerHTML = 'קרא עוד <I class="fas fa-backward"></I>';
const addbutton5 = document.createElement('button');
addbutton5.innerHTML = 'קרא עוד <I class="fas fa-backward"></I>';

activ.appendChild(addbutton1);
activ1.appendChild(addbutton2);
activ2.appendChild(addbutton3);
activ3.appendChild(addbutton4);
activ4.appendChild(addbutton5);

addbutton1.onclick = () => {
    activ.innerHTML = " סיוע למשפחה המתמודדת בקיום שגרה נורמטיבית ומתפקדת, תוך סיוע בניהול וארגון הבית. סיוע למשפחות מתמודדות בעבודות הכביסה. לדאוג שתהיה נקייה, מגוהצת ומקופלת. עזרה בביצוע פעולות יומיומיות, שמירה על ילדים, הכנת ארוחות בבית או חלוקת ארוחות ממטבח לתת זה לקבל, עזרה בסידורים שונים.";
    activ.style.color="white";
    activ.style.fontFamily="VarelaRound-Regular";
    activ.style.fontSize="18px";
}
addbutton2.onclick = () => {
    activ1.innerHTML = "סיוע לחולים - ליווי לבדיקות ולטיפולים רפואיים שונים ומחלקים מזון לחולים המאושפזים. סיוע לבני משפחות החולים - מתנדבים שוהים לצד חולים בבתי חולים על מנת לאפשר למשפחה לנוח  בבית ולהחליף כוחות. בנוסף, הפעלת קפיטריות בבתי חולים - לעיתים מלווים שוהים בבית החולים שעות ארוכות, ללא אוכל ושתייה. לתת זה לקבל מפעילים קפיטריות במחלקות השונות בבתי חולים, שם יכולים מלווים לקבל מזון, שתייה חמה ומילת עידוד מהמתנדבים ולצבור כוחות  , שתייה חמה ומילת עידוד מהמתנדבים של לתת זה לקבל ולצבור כוחות להמשך השהייה בבית החולים. "
    activ1.style.color="white";
    activ1.style.fontFamily="VarelaRound-Regular";
    activ1.style.fontSize="18px"
}
addbutton3.onclick = () => {
    activ2.innerHTML = "ביקור קבוע בבתי קשישים עריריים, להוות עבורם אוזן קשבת ומכילה ואף לא פעם ללמוד מניסיון חייו של הקשיש, להפיג את בדידותו ולארח לו לחברה, סיוע טלפוני לקשישים ושמירה על קשר שוטף, ביקורים בבתי קשישים לצורך זיהוי צרכים שונים במטרה להעניק להם פתרונות. ";
    activ2.style.color="white";
    activ2.style.fontFamily="VarelaRound-Regular";
    activ2.style.fontSize="18px"
}
addbutton4.onclick = () => {
    activ3.innerHTML = " טיול ערב עם ילד מיוחד, הפעלת משחקיה ותוכניות מגוונות, נופשוני שבת המאפשרים למשפחה הפוגה קלה, נופשונים בחופשת הקיץ המקילים על המשפחה כשאין מסגרת מסודרת לילד, טיפולים לקידום הילדים על ידי אנשי מקצוע ועוד";
    activ3.style.color="white";
    activ3.style.fontFamily="VarelaRound-Regular";
    activ3.style.fontSize="18px"
}
addbutton5.onclick = () => {
    activ4.innerHTML = " סיוע בתפקוד הלימודי, סיוע בהכנת שיעורי בית, למידה למבחנים, סדר וארגון בילקוט ועוד לילדים מתקשים  ";
    activ4.style.color="white";
    activ4.style.fontFamily="VarelaRound-Regular";
    activ4.style.fontSize="18px"
}
document.addEventListener('click', function (event) {
    if (event.target.matches('#icon'))
        closess();
})
let sum;
let sum2;
const volenteer = document.getElementById("volenteer");
const learnWithChild2 = document.getElementById("learn-with-child2");
const spacialChildren2 = document.getElementById("spacial-children2");
const oldmen2 = document.getElementById("oldmen2");
const families2 = document.getElementById("families2");
const Hospitol2 = document.getElementById("Hospitol2");
sum = localStorage.getItem("sumValenteers");
volenteer.innerHTML = `שירותי העמותה ניתנים באמצעות כ – 5 מחלקות ו-${sum} מתנדבים ברחבי הארץ מתוכם:`;
sum2 = localStorage.getItem("sumLearn-with-child");
learnWithChild2.innerHTML = ` <div> % ${(sum2 / sum)*100}</div> לומדים עם ילדים מתקשים`;
sum2 = localStorage.getItem("sumOldmen");
oldmen2.innerHTML = `<div>% ${(sum2 / sum)*100} </div>מסייעים לקשישים`;
sum2 = localStorage.getItem("sumHospitol");
Hospitol2.innerHTML =  `<div>% ${(sum2 / sum)*100} </div>מתנדבים בבתי חולים`;
sum2 = localStorage.getItem("sumSpacial-children");
spacialChildren2.innerHTML = `<div>% ${(sum2 / sum)*100} </div>מתנדבים עם ילדים מיוחדים`;
sum2 = localStorage.getItem("sumFamilies");
families2.innerHTML = `<div>% ${(sum2 / sum)*100}</div> מסייעים למשפחות רווחה`;
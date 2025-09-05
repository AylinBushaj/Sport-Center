/* NavBar Scrolled Background Color */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) { // 50px ve üstü scrool olduğunda
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* BMI Start */
  const heightInput = document.getElementById("height");
  const weightInput = document.getElementById("weight");
  const bmiRange = document.getElementById("range");

function calculateBMI() { 

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight) {
    bmiRange.value = 0;
    return;
  }

  console.log("Fonksiyon çalıştı");
    
  let result = weight / ((height / 100) ** 2); /* bmi = kg / m2 */
  console.log("result:", result);

  if (result < 18.5) {
    bmiRange.value = 10;
  } else if (result >= 18.5 && result < 24.9) {
    bmiRange.value = 30;
  } else if (result >= 25 && result < 29.9) {
    bmiRange.value = 50;
  } else if (result >= 30 && result < 34.9) {
    bmiRange.value = 70;
  } else {
    bmiRange.value = 90;
  }
}

console.log("Range value set edildi:", range.value); 

heightInput.addEventListener("input", calculateBMI);
weightInput.addEventListener("input", calculateBMI);

/* BMI End */


/* Our Classes Buttons Start */
function showClasses() {

  const btn = document.querySelectorAll(".classes_btn");
  const content = document.querySelectorAll(".about_classes");

    btn.forEach((btn) => {
      btn.addEventListener("click", () => {
        //Tüm contenleri gizleme
        content.forEach((c) => c.classList.add("hidden"));

        //Aktif Butonun Target-data
        const target = btn.getAttribute("data-target");
        document.getElementById(target).classList.remove("hidden");

        //Aktif Butona renk + Şekil
        btn.forEach((b) => b.classList.remove("classes_btn"));
        btn.classList.add("classes_btn");
      });
    });

}
showClasses(); 


function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("hidden");
}

/* Our Classes Buttons End */

/* Nav */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".hamburger_navs");

hamburger.addEventListener('click', () => {
hamburger.classList.toggle("active");

navMenu.classList.toggle("active");
});


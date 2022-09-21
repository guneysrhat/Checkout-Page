const TexRate = 0.18;
const shippingPrice = 15;
const shippingFreePrice = 300;

window.addEventListener("load", () => {
  //! set items to localStorage
  localStorage.setItem("TexRate", TexRate);
  localStorage.setItem("shippingPrice", shippingPrice);
  localStorage.setItem("shippingFreePrice", shippingFreePrice);

  //! set items to sessionStorage
  sessionStorage.setItem("TexRate", TexRate);
  sessionStorage.setItem("shippingPrice", shippingPrice);
  sessionStorage.setItem("shippingFreePrice", shippingFreePrice);
});

const productsDiv = document.querySelector(".products");
//? Capturing vs. Bubbling
productsDiv.addEventListener("click", (event) => {
  if (event.target.className == "fa-solid fa-minus") {
    //console.log("minus btn is clicked!");
    if (event.target.parentElement.querySelector(".quantity").innerText > 1) {
      event.target.parentElement.querySelector(".quantity").innerText--;
    } else {
      if (confirm("Products will be removed?")) {
        //*remove
        event.target.parentElement.parentElement.parentElement.remove();
      }
    }
  } else if (event.target.classList.contains("fa-plus")) {
    //console.log("plus btn is clicked!");
    event.target.previousElementSibling.innerText++;
  } else if (event.target.className == "remove-product") {
    //console.log("remove btn is clicked!");
  } else {
    //console.log("other element is clicked!");
  }
});

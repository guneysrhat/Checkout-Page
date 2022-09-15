//? count arttirilcak azaltilcak
//? miktar pricela carpilip product totale eklencek
//? remove da dispaly none olcak count === 0

const VintageBackbagPrice = 25.98;
const LeviShoesPrice = 45.99;
const AntiqueClockPrice = 74.98;
let count1 = 1;


//* Vintage Backbag

document.querySelector("#plus1").addEventListener("click", () => {
  count1++;
  document.querySelector("#count1").textContent = count1;
  document.querySelector("#total1").textContent = (
    VintageBackbagPrice * count1
  ).toFixed(2);
});
document.querySelector("#minus1").addEventListener("click", () => {
  if (count1 != 0) {
    count1--;
    document.querySelector("#count1").textContent = count1;
    document.querySelector("#total1").textContent = (
      VintageBackbagPrice * count1
    ).toFixed(2);
  }
});
//* Levi Shoes
document.querySelector("#plus1").addEventListener("click", () => {
    count1++;
    document.querySelector("#count1").textContent = count1;
    document.querySelector("#total1").textContent = (
      VintageBackbagPrice * count1
    ).toFixed(2);
  });
  document.querySelector("#minus1").addEventListener("click", () => {
    if (count1 != 0) {
      count1--;
      document.querySelector("#count1").textContent = count1;
      document.querySelector("#total1").textContent = (
        VintageBackbagPrice * count1
      ).toFixed(2);
    }
  });
  //*Antique Clock
  document.querySelector("#plus1").addEventListener("click", () => {
    count1++;
    document.querySelector("#count1").textContent = count1;
    document.querySelector("#total1").textContent = (
      VintageBackbagPrice * count1
    ).toFixed(2);
  });
  document.querySelector("#minus1").addEventListener("click", () => {
    if (count1 != 0) {
      count1--;
      document.querySelector("#count1").textContent = count1;
      document.querySelector("#total1").textContent = (
        VintageBackbagPrice * count1
      ).toFixed(2);
    }
  });

const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const guitars = [
  {
    brand: "Gibson",
    name: "Les Paul Studio",
    image: "guitar2.jpg",
    price: "11万円",
    text: "太く甘いサウンドが特徴のメインギターです。",
  },
  {
    brand: "G&L",
    name: "Tribute ASAT Classic",
    image: "guitar1.jpg",
    price: "6.5万円",
    text: "歯切れの良い音で、カッティングに使いやすい一本です。",
  },
];

const others = [
  {
    brand: "Fender",
    name: "Player II Precision Bass",
    image: "bass.jpg",
    price: "9万円",
    text: "安定した低音で、バンド全体を支えるベースです。",
  },
  {
    brand: "James",
    name: "J-350C NAT",
    image: "ac-guitar.jpg",
    price: "6万円",
    text: "弾き語りや作曲に使いやすいアコースティックギターです。",
  }
];

function createGearCards(selector, items) {
  const list = document.querySelector(selector);

  if (!list) return;

  items.forEach((item) => {
    const content = `
      <article class="gear-card">
        <img src="images/${item.image}" alt="${item.name}">
        <div class="gear-body">
          <p class="brand">${item.brand}</p>
          <h3 class="gear-title">${item.name}</h3>
          <p class="gear-text">${item.text}</p>
          <p class="price">${item.price}</p>
          <a href="#" class="detail-btn">詳細を見る</a>
        </div>
      </article>
    `;

    list.insertAdjacentHTML("beforeend", content);
  });
}

createGearCards("#guitar-list", guitars);
createGearCards("#others-list", others);
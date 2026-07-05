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

/* 検索機能 */

const gears = [
  {
    name: "Gibson Les Paul Studio",
    category: "guitar",
    img: "guitar2.jpg",
    text: "メインで使用しているギターです。太くて繊細な音が特徴で、ギターソロなどがとても鮮やかになります。"
  },
  {
    name: "G&L Tribute ASAT Classic",
    category: "guitar",
    img: "guitar1.jpg",
    text: "サブで使用しているギターです。切れのいい音が特徴で最も好みの音です。"
  },
  {
    name: "Fender Player II Precision Bass",
    category: "bass",
    img: "bass.jpg",
    text: "新しく始めたベースです。定番のFenderでスタンダードなプレジジョンベースです。"
  },
  {
    name: "James J-350C NAT",
    category: "guitar",
    img: "ac-guitar.jpg",
    text: "唯一のアコギです。弾き語りや作曲に使用しており、素直な音が鳴ります。",
  },
  {
    name: "GX-100",
    category: "effect",
    img: "gx-100.jpg",
    text: "音作りに使用しているマルチエフェクターです。多種多様なサウンドが作成可能で、私は音作りはこれで完結させています。"
  }
];

const gearList = document.getElementById("gearList");
const searchInput = document.getElementById("searchInput");
const filterButtons = document.querySelectorAll(".filter-buttons button");

let currentCategory = "all";

function showGears() {
  const keyword = searchInput.value.toLowerCase();

  const filteredGears = gears.filter((gear) => {
    const matchKeyword = gear.name.toLowerCase().includes(keyword);
    const matchCategory =
      currentCategory === "all" || gear.category === currentCategory;

    return matchKeyword && matchCategory;
  });

  gearList.innerHTML = "";

  filteredGears.forEach((gear) => {
    const card = `
      <article class="gear-card">
        <img src="images/${gear.img}" alt="${gear.name}">
        <div class="gear-body">
          <h3>${gear.name}</h3>
          <p>${gear.text}</p>
        </div>
      </article>
    `;

    gearList.insertAdjacentHTML("beforeend", card);
  });
}

searchInput.addEventListener("input", showGears);

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentCategory = button.dataset.category;
    showGears();
  });
});

showGears();
const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const instractions = document.querySelector("#instractions");

const homeGears = [
  {
    name: "Gibson USA Les Paul Studio",
    img: "guitar2.jpg",
    price: "11万円",
    text: "太く力強いサウンドが魅力のレスポールタイプ。",
  },
  {
    name: "G&L Tribute ASAT Classic",
    img: "guitar1.jpg",
    price: "6.5万円",
    text: "歯切れのよい音で、カッティングにも使いやすい一本。",
  },
  {
    name: "Fender Player II Precision Bass",
    img: "bass.jpg",
    price: "9万円",
    text: "安定した低音で、バンドサウンドを支えるベース。",
  },
  {
    name: "James J-350C NAT",
    img: "ac-guitar.jpg",
    price: "6万円",
    text: "弾き語りや作曲に使いやすいアコースティックギター。",
  },
];

if (instractions) {
  homeGears.forEach((gear) => {
    const content = `
      <article class="gear-card">
        <img src="images/${gear.img}" alt="${gear.name}">
        <div class="gear-body">
          <h3>${gear.name}</h3>
          <p>${gear.text}</p>
          <p class="price">${gear.price}</p>
        </div>
      </article>
    `;

    instractions.insertAdjacentHTML("beforeend", content);
  });
}
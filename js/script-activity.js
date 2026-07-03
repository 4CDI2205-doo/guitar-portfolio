const menuBtn = document.querySelector("#menuBtn");
const nav = document.querySelector("#nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}

const activities = [
  {
    date: "2026.05.21",
    title: "下北沢ライブ出演",
    image: "play.png",
    text: "下北沢のライブハウスにて演奏予定。バンドでのアンサンブルを意識して練習中です。",
    tag: "LIVE",
  },
  {
    date: "2026.04.24",
    title: "新しい機材を導入",
    image: "guitar-bass-introduce.png",
    text: "音作りの幅を広げるため、新しい機材を購入しました。今後の演奏で活用していきます。",
    tag: "GEAR",
  },
  {
    date: "2026.04.15",
    title: "Webサイト開設",
    image: "content.png",
    text: "音楽活動や機材紹介をまとめるために、このWebサイトを開設しました。",
    tag: "WEB",
  },
];

const timelines = [
  {
    date: "中学1年",
    title: "ギターを始める",
    text: "音楽に興味を持ち、ギターを弾き始めました。",
  },
  {
    date: "高校時代",
    title: "バンドで作曲を経験",
    text: "部活のメンバーと作曲を行い、チームで音楽を作る楽しさを学びました。",
  },
  {
    date: "大学生",
    title: "ベースと作曲にも挑戦",
    text: "ギターに加えてベースを始め、作曲ソフトも導入しました。",
  },
  {
    date: "現在",
    title: "セッション・音楽理論を学習中",
    text: "演奏力だけでなく、理論面も学びながら活動の幅を広げています。",
  },
];

const activityList = document.querySelector("#activity-list");

if (activityList) {
  activities.forEach((activity) => {
    const content = `
      <article class="activity-card">
        <img src="images/${activity.image}" alt="${activity.title}">
        <div class="activity-body">
          <p class="activity-date">${activity.date}</p>
          <h3 class="activity-title">${activity.title}</h3>
          <p class="activity-text">${activity.text}</p>
          <span class="activity-tag">${activity.tag}</span>
        </div>
      </article>
    `;

    activityList.insertAdjacentHTML("beforeend", content);
  });
}

const timelineList = document.querySelector("#timeline-list");

if (timelineList) {
  timelines.forEach((timeline) => {
    const content = `
      <div class="timeline-item">
        <p class="timeline-date">${timeline.date}</p>
        <h3 class="timeline-title">${timeline.title}</h3>
        <p class="timeline-text">${timeline.text}</p>
      </div>
    `;

    timelineList.insertAdjacentHTML("beforeend", content);
  });
}
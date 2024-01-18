const members = [
  {
    name: "장한성",
    link: "https://bit.ly/423tfqk",
    github: "https://github.com/HansungJang",
    image:
      "https://img.freepik.com/premium-photo/a-potato-with-sunglasses-and-a-face-that-says-potato_916191-1794.jpg?w=1060",
  },
  {
    name: "이한나",
    link: "https://leehannaa.github.io/likeLion-profile/", // 추후 배포한 사이트 링크
    github: "https://github.com/LeeHannaa",
    image: "https://avatars.githubusercontent.com/u/103620720?v=4",
  },
  {
    name: "최예라",
    link: "https://yearachoi.github.io/Introduction-Mini-Project/",
    github: "https://github.com/YearaChoi",
    image:
      "https://yearachoi.github.io/Introduction-Mini-Project/images/myphoto.jpeg",
  },
  {
    name: "박은주 ",
    link: "https://ejpark43.github.io/likeLion_assignment1/",
    github: "https://github.com/ejPark43",
    image:
      "https://ejpark43.github.io/likeLion_assignment1/damgomDance_gif.gif",
  },
  {
    name: "유정섭",
    link: "https://skwldwld.github.io/p0/",
    github: "https://github.com/skwldwld",
    image: "https://skwldwld.github.io/p0/img/favorite/dog.JPG",
  },
];

const membersNode = document.querySelector("div.members");
const originNode = document.querySelector("div.member-card");

// 멤버 데이터 요소마다 반복
members.map((memberData) => {
  const node = originNode.cloneNode(true); // 기존 template 클론
  node.classList.remove("template"); // template 클래스를 삭제하여 display: none 해제
  node.querySelector(".info-name").innerText = memberData.name; // 이름 변경
  node
    .querySelector(".info-github > a")
    .setAttribute("href", memberData.github); // 깃헙주소 변경
  node
    .querySelector(".card-banner > a > img")
    .setAttribute("src", memberData.image);

  // 사이트 주소 링크(href) 와 Text 를 바꾸기 위해
  // .link-a 태그를 모두 가져옴.
  node.querySelectorAll(".link-a").forEach((el) => {
    el.setAttribute("href", memberData.link);

    // 하위 노드 개수가 1개이고 하위 노드가 텍스트 노드일경우 텍스트도 변경
    if (
      el.childNodes.length == 1 &&
      el.childNodes[0].nodeType === Node.TEXT_NODE
    )
      el.innerText = memberData.link;
  });

  membersNode.appendChild(node); // 만들어진 node 를 다시 추가
});

const members = [
  {
    name: "김예지",
    link: "https://skwldwld.github.io/p0",
    github: "https://github.com/skwldwld",
    image: "https://skwldwld.github.io/p0/img/favorite/dog.JPG",
  },
  {
    name: "김하은",
    link: "https://haeoii.github.io/basic-setting/",
    github: "https://github.com/HAEOII",
    image:
      " https://haeoii.github.io/basic-setting/img/KakaoTalk_Photo_2024-01-07-14-47-27%20001jpeg.jpeg",
  },
  {
    name: "한선규",
    link: "https://sungyu0309.github.io/Profile/",
    github: "https://github.com/sungyu0309",
    image:
      "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "심성환",
    link: "https://hwan129.github.io/myprofile/",
    github: "https://github.com/hwan129",
    image: "https://hwan129.github.io/myprofile/photos/photo4.jpg",
  },
  {
    name: "임종현",
    link: "https://dkrehd0519.github.io/ll-test/",
    github: "https://github.com/dkrehd0519",
    image: "https://dkrehd0519.github.io/ll-test/image/me.jpg",
  },
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
    name: "김하영",
    link: "https://hayoung04.github.io/Self-introduction/",
    github: "https://github.com/Hayoung04",
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2F20160218_67%2Fj23486_14557676251908Cd6S_JPEG%2F1430311276.57.jpg&type=sc960_832",
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

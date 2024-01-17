const members = [
  {
    name: "임종현",
    link: "https://google.com",
    github: "https://github.com/dkrehd0519",
    image: "https://placehold.co/400x250",
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

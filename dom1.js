const $cards=document.querySelector(".cards"),
$template=document.getElementById("template-card").content,
$fragment=document.createDocumentFragment(),
cardsContent = [
    {
      title: "Tecnología",
      img: "https://picsum.photos/id/60/200/300",
    },
    {
      title: "Animales",
      img: "https://picsum.photos/id/169/200/300",
    },
    {
      title: "Arquitectura",
      img: "https://picsum.photos/id/43/200/300",
    },
    {
      title: "Gente",
      img: "https://picsum.photos/id/27/200/300",
    },
    {
      title: "Naturaleza",
      img: "https://picsum.photos/id/28/200/300",
    },
  ];
cardsContent.forEach(el=>{
    $template.querySelector("img").setAttribute("src",el.img)
    $template.querySelector("img").setAttribute("alt",el.title)
    $template.querySelector("figcaption").textContent=el.title
    let $clone=document.importNode($template,true)
    $fragment.appendChild($clone)

})
$cards.appendChild($fragment)
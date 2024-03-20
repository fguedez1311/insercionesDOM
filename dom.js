const $figure=document.createElement("figure")
const $figure2=document.createElement("figure")
$img=document.createElement("img")
$figCaption=document.createElement("figcaption")
$figCaptionText=document.createTextNode("Paisaje")
$cards=document.querySelector(".cards")
$img.setAttribute("src","https://picsum.photos/id/17/200/300")
$img.setAttribute("alt","Paisaje")
$figure.classList.add("card")
$figCaption.appendChild($figCaptionText)
$figure.appendChild($img)
$figure.appendChild($figCaption)
$cards.appendChild($figure)

//Otra forma de crear nodos
$figure2.innerHTML=`
    <img src="https://picsum.photos/id/9/200/300" alt="Tecnología">
    <figcaption>Tech</figcaption>
`
$figure2.classList.add("card")
$cards.appendChild($figure2)

const estaciones=["Primavera","Verano","Otoño","Invierno"]
$ul=document.createElement("ul")
document.write("<h3>Estaciones del Año</h3>")
document.body.appendChild($ul)
estaciones.forEach(el=>{
    const $li=document.createElement("li")
    $li.textContent=el
    $ul.appendChild($li)
})

const continentes=["Africa","America","Asia","Europa","Oceanía"],
$ul2=document.createElement("ul")
document.write("<h3>Continentes del Mundo</h3>")
document.body.appendChild($ul2)
$ul2.innerHTML=""
continentes.forEach((el)=>{
    $ul2.innerHTML+=`<li>${el}</li>`
})

const meses=[
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]
$ul3=document.createElement("ul")
$fragment=document.createDocumentFragment()
meses.forEach((el)=>{
    const $li=document.createElement("li")
    $li.textContent=el
    $fragment.appendChild($li)
})
document.write("<h3>Mese del año</h3>")
$ul3.appendChild($fragment)
document.body.appendChild($ul3)

//array of persons
const persons = [
  {
    name: "Fatema",
    phone: "0521234567",
    email:"Fatema@gmail.com",
    image:"./image/fatema.png"
  }, 
  {
    name: "Ali",
    phone: "053123456",
    email:"Ali@gmail.com",
    image:"./image/Ali.jpg"
  },
  {
    name: "Nora",
    phone: "0541234567",
    email:"Nora@gmail.com",
    image:"./image/nora.webp"
  }
]

let ul = document.querySelector('.data_of_persons') //persons will be appear under ul
function add(){
  ul.innerHTML = "";
persons.forEach(eperson=>{
  const person = document.createElement('div')
  const li = document.createElement('li')
  let name=document.createElement('h3')
  name.textContent=eperson.name
  let phone = document.createElement('p')
  phone.textContent = eperson.phone
  let email= document.createElement('p')
  email.textContent = eperson.email
  const divleft = document.createElement('div')
  divleft.appendChild(name)
  divleft.appendChild(phone)
  divleft.appendChild(email)
  let image=document.createElement('img')
  image.src=eperson.image
  image.alt=eperson.name
  image.className ="img-person"
  person.appendChild(image)
  person.appendChild(divleft)
  person.className = "left"
  li.appendChild(person)
  li.appendChild(right_img.cloneNode(true));
  ul.appendChild(li)
})
}





function showAddContact() {
    document.querySelector(".add-contact-container").style.display = "flex";
    document.get
}
function closeAddContact() {
    document.querySelector(".add-contact-container").style.display = "none";
}


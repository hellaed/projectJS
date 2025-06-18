
//array of persons
const persons = [
  {
    name: "Fatema",
    phone: "0521234567",
    email:"Fatema@gmail.com",
    image:"https://www.hfm-berlin.de/fileadmin/_processed_/b/6/csm_Fatma_Said_3__c__James_Bort_f628835199.jpg"
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
function add() {
    persons.forEach((elem) => {
        const li = document.createElement('li');
        li.innerHTML = `
        <p><img src="${elem.image}" id="profile_picture">    ${elem.name}</p>
        <p class="Phone">Phone: ${elem.phone}</p>
        <p class="Email">Email: ${elem.email}</p>
        <p>
        <img src="./images/icons/rename_icon.png">
        <img src="./images/icons/trash_icon.png" onclick="deleteContact(this)">
        <img src="./images/icons/info_icon.png"></p>`
        ul.appendChild(li);
    })
}

add();




function showAddContact() {
    document.querySelector(".add-contact-container").style.display = "flex";
}

function closeAddContact() {
    document.querySelector(".add-contact-container").style.display = "none";
}
function deleteContact(element) {
    const li = element.closest('li');
    if (li) li.remove();
}




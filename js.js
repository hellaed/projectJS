
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
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcqmkbI8wq_KSBRtaIKma5qSm93z8-_Fw8vw&s"
  },
  {
    name: "Nora",
    phone: "0541234567",
    email:"Nora@gmail.com",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnoZXcOgXqyZMzBCEA4juHHENvUTkO4ZfQ6w&s"
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
function deleteAll() {
  ul.innerHTML = ""; 
}
function formSub(event) {
  event.preventDefault(); // stop form from reloading the page
  let name = document.getElementById("input-name").value;
  let phone = document.getElementById("input-phone").value;
  let email = document.getElementById("input-email").value;
  let img = document.getElementById("input-img").value;

  // Add to array 
  persons.push({
    name: name,
    phone: phone,
    email: email,
    image: img
  });

  const li = document.createElement('li');
  li.innerHTML = `
    <p><img src="${img}" id="profile_picture"> ${name}</p>
    <p class="Phone">Phone: ${phone}</p>
    <p class="Email">Email: ${email}</p>
    <p>
      <img src="./images/icons/rename_icon.png">
      <img src="./images/icons/trash_icon.png" onclick="deleteContact(this)">
      <img src="./images/icons/info_icon.png">
    </p>`;
    
  ul.appendChild(li);
  closeAddContact(); // hide the form
}




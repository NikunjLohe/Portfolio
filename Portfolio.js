const openModal = document.querySelector(".button");
const modal = document.querySelector(".project_popup");
const closeModal = document.querySelector(".x")

openModal.addEventListener('click' , () => {
    modal.classList.add('show');
});

closeModal.addEventListener('click' , () => {
    modal.classList.remove('show');
});


const openModal1 = document.querySelector(".button1");
const modal1 = document.querySelector(".project_popup1");
const closeModal1 = document.querySelector(".x1")

openModal1.addEventListener('click' , () => {
    modal1.classList.add('show1');
    console.log(2);
});

closeModal1.addEventListener('click' , () => {
    modal1.classList.remove('show1');
});


const openModal2 = document.querySelector(".button2");
const modal2 = document.querySelector(".project_popup2");
const closeModal2 = document.querySelector(".x2")

openModal2.addEventListener('click' , () => {
    modal2.classList.add('show2');
    console.log(2);
});

closeModal2.addEventListener('click' , () => {
    modal2.classList.remove('show2');
});
const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');
const checkIcon = true;
const deleteBtn = document.querySelector('.deleteBtn');
button.addEventListener('click', ()=> {
    if(input.value !=""){
        let paragraf = document.createElement('li');
    paragraf.classList.add('paragraf');
    contentDiv.appendChild(paragraf);
        let paragrafInText = document.createElement('p');
        paragrafInText.classList.add('paragrafInText');
    paragraf.appendChild(paragrafInText);
    paragrafInText.innerHTML = input.value;
    
    let deleteButton = document.createElement('div');
    deleteButton.classList.add('deleteBtn');
    paragraf.appendChild(deleteButton);
    input.value = "";
    deleteButton.addEventListener('click', () => {
        paragraf.remove();
    });
}
else if (input.value.trim() === '') { 
    alert("Zəhmət olmasa bir şeylər əlavə edin. Əks halda Boş yer açılmır");  
}
})       


let sort = document.querySelector('.sort');
let srt = 'sort-up';
sort.addEventListener('click', sorting);
function sorting(){
   
    const paragraph = document.querySelectorAll('.paragrafInText');
    let arr = [];
    for (let i = 0; i < paragraph.length; i++) {
        arr[i] = paragraph[i].innerHTML;
    }
    if (srt == 'sort-up') {
        srt = 'sort-down'; 
        sort.style.background = 'url(icons/sort-up-black.png)';
        sort.addEventListener('mouseout', (e) => {
            e.style.background = 'url(icons/sort-up.png)';
        });
        sort.addEventListener('mouseover', (e) => {
            e.style.background = 'url(icons/sort-up-black.png)';
        });
       
        // arr sort
        arr.sort((a, b) => {
            if (a < b){
                return -1;}
            if (a > b){
                return 1;}
            return 0;
            
        });
    }
    else {
        srt = 'sort-up';
        sort.style.background = 'url(icons/sort-down-black.png)';
        sort.addEventListener('mouseout', (e) => {
            e.style.background = 'url(icons/sort-down.png)';
        });
        sort.addEventListener('mouseover', (e) => {
            e.style.background = 'url(icons/sort-down-black.png)';
        }); 
        arr.sort((a, b) => {
            if (a < b){
                return 1;}
            if (a > b){
                return -1;}
            return 0;
            
        }  
    );
    }   
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = arr[i];
        
    }
  
}
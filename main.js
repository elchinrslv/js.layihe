const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');
const checkIcon = true;
button.addEventListener('click', function go(){
    if(input.value !=""){
    let paragraf = document.createElement('li');
    let deleteButton = document.createElement('div');
    paragraf.classList.add('paragraf');
    deleteButton.classList.add('deleteButton');
    paragraf.innerText = input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    input.value = "";
    deleteButton.addEventListener('click', ()=>{
        contentDiv.removeChild(paragraf);
    })
    
}
else if (input.value.trim() === '') { // Eğer input alanının değeri boşsa
    alert("Zəhmət olmasa bir şeylər əlavə edin. Əks halda Boş yer açılmır");
    
}
})
let sort = document.querySelector('.sort');
let srt = 'sort-up';
sort.addEventListener('click', sorting);
function sorting(){
    const paragraph = document.querySelectorAll('.paragraf');
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
            if (a < b)
                return -1;
            if (a > b)
                return 1;
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
            if (a < b)
                return 1;
            if (a > b)
                return -1;
            return 0;
        }  
    );
    }   
    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = arr[i];
    }
    
}
const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');
let checkIcon = true;
let sortdown = document.querySelector('.sortdown');
button.addEventListener('click', go);
function go(){
    if(input.value !=""){
    let paragraf = document.createElement('li');
    let deleteButton = document.createElement('div');
    let cancelImg = document.createElement('img');
    let cancelImgHover = document.createElement('img');
    cancelImg.src = 'icons/cancel.png';
    cancelImgHover = 'icons/cancel-hover.png';
    deleteButton.appendChild(cancelImg);
    paragraf.classList.add('paragraf');
    deleteButton.classList.add('deleteButton');
    paragraf.innerText = input.value;
    contentDiv.appendChild(paragraf);
    paragraf.appendChild(deleteButton);
    input.value = "";
    deleteButton.addEventListener('mouseover',(event) =>{
        event.target.style.background = 'url(icons/cancel-hover.png)';
    })
    deleteButton.addEventListener('mouseout', (event) => {
        event.target.style.background = 'url(icons/cancel.png)';
    });
    deleteButton.addEventListener('click',function(){
        contentDiv.removeChild(paragraf);
    })
}}
let sort = document.querySelector('.sort');
let srt = 'sort-up';
sort.addEventListener('click', () => {
    const paragraph = document.querySelectorAll('.paragraf');

    let arr = new Array();
    for (let i = 0; i < paragraph.length; i++) {
        arr[i] = paragraph[i].innerHTML;
    }

    if (srt == 'sort-up') {
        srt = 'sort-down';
        sort.style.background = 'url(icons/sort-up-black.png)';
        sort.addEventListener('mouseout', (event) => {
            event.target.style.background = 'url(icons/sort-up.png)';
        });
        sort.addEventListener('mouseover', (event) => {
            event.target.style.background = 'url(icons/sort-up-black.png)';
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
        sort.addEventListener('mouseout', (event) => {
            event.target.style.background = 'url(icons/sort-down.png)';
        });
        sort.addEventListener('mouseover', (event) => {
            event.target.style.background = 'url(icons/sort-down-black.png)';
        });
        arr.sort((a, b) => {
            if (a < b)
                return 1;
            if (a > b)
                return -1;
            return 0;
        });
    }

    for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].innerHTML = arr[i];
    }
});


const items = document.querySelector('.items'); 
const input = document.querySelector('.footer__input');
const addBtn = document.querySelector('.footer__button');

function onAdd(){
    // 1. 사용자가 입력한 텍스트 받아오기 
    const text = input.value; 

    if (text == ''){ // 텍스트에 아무것도 들어있지 않다면, 등록 불가 
        input.focus(); 
        return; 
    }
    console.log(text);
    // 2. 받아온 텍스트를 이용해서 새로운 아이템을 만든다. (텍스트 + 삭제 버튼)
    const item = createItem(text); 
    // 3. items 컨테이너 안에 새로 만든 아이템을 추가한다. 
    items.appendChild(item); 

    // 4. 새로 추가된 아이템으로 이동 스크롤링 
    item.scrollIntoView({block : "center"});
    // 5. 인풋을 초기화 한다.
    input.value = ''; 
    input.focus(); 
}

function createItem(text){

    // 변경할 일이 있다면 createElement로 요소 생성 
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item__row');

    const item = document.createElement('div');
    item.setAttribute('class', 'item');
    
    const name = document.createElement('span');
    name.setAttribute('class', 'item__name');
    name.innerText = text; 
 
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'item__delete');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', ()=>{
        items.removeChild(itemRow); 
    });


    const itemDivider = document.createElement('div');
    itemDivider.setAttribute('class', 'item__divider');
    
    item.appendChild(name); 
    item.appendChild(deleteBtn); 
    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider); 
    return itemRow;
 
}

addBtn.addEventListener('click', ()=>{
    onAdd(); 
}); 

input.addEventListener('keypress', event=>{
    if (event.key == 'Enter'){
        onAdd(); 
    }
}); 
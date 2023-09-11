let cost = Number (prompt('Введите стоимость товара'));
let money = Number (prompt('Введите количество ваших денег'));

if(cost == money){
    alert('покупка совершена');
}
else{
    if(cost > money){
        let x = cost - money;
         alert('для покупки не хватает ' + x + 'р');
     }else{
         let y = money - cost;
         alert('Покупка совершена. Ваша сдача ' + y + 'р');
     }
}

let transition_rotate = document.querySelector('.transition_rotate');

transition_rotate.style.textDecoration = 'none';
transition_rotate.style.position = 'relative';
transition_rotate.style.zIndex = '2';
transition_rotate.style.background = '#808991';
transition_rotate.style.color = '#fff';
transition_rotate.style.margin = '0 auto';
transition_rotate.style.padding = '10 px';
transition_rotate.style.textAlign = 'center';
transition_rotate.style.maxWidth = '500 px';
transition_rotate.style.fontSize = '20 px';
transition_rotate.style.border = '4px ridge black';
transition_rotate.style.cursor = 'pointer';
transition_rotate.style.transition = '1s linear';


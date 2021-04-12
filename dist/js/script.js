window.onload = function () {
//Табы
let tabs = document.querySelectorAll('.catalog__tab-item');
let catalog = document.querySelectorAll('.catalog__content');
let arr = Array.from(tabs);//преобразую Dom список в массив

let link_det = document.querySelectorAll('.catalog-item__content .catalog-item__link');
let link_back = document.querySelectorAll('.catalog-item__list .catalog-item__link');


[].forEach.call(tabs, function(el){ //перебираю все табы
    el.onclick = function(e){ //где el-это отдельно взятый элемент группы tabs
        let tab_ac = document.querySelector('.catalog__tab-item_active');//ищу активные tab
        let cont_ac = document.querySelector('.catalog__content_active');//ищу активные окна
            tab_ac.classList.remove('catalog__tab-item_active');//удаляю класс активности у таба
            el.classList.add('catalog__tab-item_active');//и добовляю к новому элементу класс активности
            cont_ac.classList.remove('catalog__content_active');//удаляю класс активности у окна

        let index = arr.indexOf(el); //ищу в массиве(tabs) индекс искомого элемента(который активный) 
        catalog[index].classList.add('catalog__content_active'); //добавляю класс активности к окну индекс которого сооветствует индексу активного таба
    }
});

 //
[].forEach.call(link_det, function(el){//перебираю ссылки "подробнее"
    el.onclick = function(e){
        let parent = el.parentElement;//нахожу родителя той ссылки на которую нажал, т.е. catalog-item__content
            parent.classList.remove('catalog-item__content_active');//и удаляю класс активности
        let list = parent.nextElementSibling; //соседний элемент беру, который catalog-item__list
            list.classList.add('catalog-item__list_active');     
    }
});
[].forEach.call(link_back, function(el){//перебираю ссылки "подробнее"
    el.onclick = function(e){
        let parent = el.parentElement;//нахожу родителя той ссылки на которую нажал, т.е. catalog-item__list
            parent.classList.remove('catalog-item__list_active');//и удаляю класс активности
        let list = parent.previousElementSibling; //соседний элемент беру, который catalog-item__content
            list.classList.add('catalog-item__content_active');     
    }
});
//модальные окна
let button_large = document.querySelector('.button_large');
let button = document.querySelector('.header__tel .button');
let button_submit = document.querySelector('.button_submit');
let button_card = document.querySelectorAll('.button_card');
let close = document.querySelectorAll('.modal__close');

    button.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay .modal:nth-child(1)').style.display = "block";
    };
    button_large.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay .modal:nth-child(1)').style.display = "block";
    };
    button_submit.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay .modal:nth-child(1)').style.display = "block";
    };
    //для карточек, когда нажимаю кнопку купить
    [].forEach.call(button_card, function(el){//перебираю все карточки
        el.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";    
        document.querySelector('.overlay .modal:nth-child(2)').style.display = "block";    
        //меняю содержание карточки (а именно наименование товара)
        //el.parentElement.previousElementSibling.
        }
    });    
    [].forEach.call(close, function(el){//перебираю все крестики
    el.onclick = function(e){
        el.parentElement.style.display = "none";
        el.parentElement.parentElement.style.display = "none";   
    }
});
}

 
 


function my_script(){
//Табы
let tabs = document.querySelectorAll('.catalog__tab-item');
let catalog = document.querySelectorAll('.catalog__content');


let link_det = document.querySelectorAll('.catalog-item__content .catalog-item__link');
let link_back = document.querySelectorAll('.catalog-item__list .catalog-item__link');


tabs.forEach(function(el){ //перебираю все табы
    
        el.addEventListener('click',function(event){//где el-это отдельно взятый элемент группы tabs
            let target = event.target;//таб на который нажал
            console.log(target);
            document.querySelector('.catalog__tab-item_active').classList.remove('catalog__tab-item_active');//ищу активные tab
            document.querySelector('.catalog__content_active').classList.remove('catalog__content_active');//ищу активные окна
            el.classList.add('catalog__tab-item_active');
                                for(let i=0; i<3; i++){
                                    if( target == tabs[i]){
                                         tabs[i].classList.add('catalog__tab-item_active');//и добовляю к новому элементу класс активности
                                        catalog[i].classList.add('catalog__content_active');//и добовляю к новому элементу класс активности
                                     break;
                                }
                               
                            }
                        
                   
        });
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
 let button_card = document.querySelectorAll('.button_card');


    button.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay .modal:nth-child(1)').style.display = "block";
        document.body.style.overflow = "hidden";
    };
    button_large.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";
        document.querySelector('.overlay .modal:nth-child(1)').style.display = "block";
        document.body.style.overflow = "hidden";
    };
    //для карточек, когда нажимаю кнопку купить
    [].forEach.call(button_card, function(el){//перебираю все карточки
        el.onclick = function(e){
        document.querySelector('.overlay').style.display = "block";    
        document.querySelector('.overlay .modal:nth-child(2)').style.display = "block";    
        document.body.style.overflow = "hidden";
        //меняю содержание карточки (а именно наименование товара)
        el.parentElement.previousElementSibling;
        }
    });    

}
module.exports = my_script;
 


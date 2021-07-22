import regeneratorRuntime from "regenerator-runtime";
import 'cross-fetch/polyfill';
function form(){
    let massage ={
        loading: "Загрузка...",
        succes: "Спасибо! Скоро мы с вами свяжемся!",
        failure: "Что-то пошло не так",
        filling: "Заполнены не все поля"
    };  
    let forms = document.querySelectorAll('form'),//все формы, их 3
        inputsform1= forms[0].getElementsByTagName('input'),//из первой формы inputs
        inputsform2= forms[1].getElementsByTagName('input'), //из второй формы inputs
        inputsform3= forms[2].getElementsByTagName('input'), //из 3-ей формы inputs
        modals = document.querySelectorAll('.modal'),
        statusMessage = document.createElement('div');
        
        statusMessage.classList.add('status');
        
    
        function closeModal(){
            let close = document.querySelectorAll('.modal__close');
            close.forEach(function(item){
                item.addEventListener('click', function(){
                    item.parentElement.style.display = "none";
                    item.parentElement.parentElement.style.display = "none"; 
                    document.querySelectorAll('.status').forEach(function(el){
                    el.textContent='';
                    }); 
                  document.body.style.overflow = "visible";    
                })
             
            });
            
        }
        function inputClear(inputs){//очистка input
            for(let i=0;i<inputs.length; i++ ){
                inputs[i].value ='';
             }
        }
        function statusClear(){//очистка статуса
            let status = document.querySelectorAll('.status');
            status.forEach( function(el){
                el.textContent='';
            });
        }  
        function inputCheck(inputs){//проверка на заполнение всех input
            for(let i=0;i<inputs.length; i++ ){
                if (inputs[i].value == '') {
                    console.log('поля не полные');
                    return false;
                    break;
                }
            }
                 
            for(let i=0;i<inputs.length; i++ ){
                if (inputs[i].value != '') {
                    console.log('все поля заполненны');
                    return true;
                    break;
                }
            }
        }
    closeModal();    
    function wrap(form_object,inputs){
        form_object.addEventListener('submit',formAjax);
        async function formAjax(event){
            form_object.appendChild(statusMessage);
            
            event.preventDefault();
            closeModal();
            if(inputCheck(inputs)){//еси все поля заполнены
                let formData = new FormData(form_object);
                let response = await fetch('server.php',{//создаю response(объект) который содержит запрос на сервер
                    method: 'POST',
                    body: formData
                });
                function changeModal(title, descr){
                        inputClear(inputs);
                        statusClear();
                        document.querySelector('.overlay').style.display = "block";
                        modals[1].style.display = "none";
                        modals[0].style.display = "none";
                        modals[2].style.display = "block";
                        modals[2].querySelector('.modal__title').textContent = title;
                        modals[2].querySelector('.modal__subtitle').textContent = descr;
                        document.body.style.overflow = "hidden";
                }
                if (response.ok && response.status == 200) {//если успешно
                         changeModal('Спасибо за вашу заявку!','Наш менеджер свяжется с вами в ближайшее время!');

                }
                else if(response.ok){//загрузка идёт
                    changeModal('Загрузка','Пожалуйста подождите...');
                    
                }
                else{//не получилось
                        changeModal('Заявка не прошла', 'Попробуйте связаться с нами попозже');
                        
                }  
            }
            else{//если не все поля заполнены
                statusMessage.innerHTML = massage.filling;
            }
        }
       
       
        
    }    
    wrap(forms[0],inputsform1);
    wrap(forms[1],inputsform2);
    wrap(forms[2],inputsform3);
}
// module.exports = form;
form();
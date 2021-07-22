//import 'core-js/features/promise'; //чтобы IE понимал promise
import $ from "jquery";
import slick from "./slick.min";
import my_script from "./script";

   if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }
window.addEventListener('DOMContentLoaded', function(){
    "use strict";
      slick();
      my_script();
      $('.slider').slick({
				centerPadding: '0px',
				arrows:true, //стрелки
				dots:false,	//точки
				adaptiveHeight:true, //адаптивная высота в зависимости от того какая высота у фото
				slidesToShow:1, //количество слайдов на экране
				slidesToScroll:1, //сколько слайдов будет пролистываться за один раз
				speed:1500, //скорость пролистывания
				easing:'ease-in',// свойство изменения
				infinite:true,//Слайдер бесконечен и открывается новый класс
				initialSlide:1,//номер слайда с которого начнётся показ
				autoplay:false, //слайдер сам перелистывает
				autoplaySpeed:2500, // скорость автоматического перелистывания
					pauseOnFocus:false,//если нажимаю то слайдер перестаёт сам пролистывать
					pauseOnHover:true,//ЕСЛИ навожу на изоброжение слайд перестаёт автоматически пролистывать
					pauseOnDotsHover:true, //ЕСЛИ навожу на точки слайд перестаёт автоматически пролистывать
				draggable:true,//Отключает свайп на ПК
				swipe:true,//Отвечает за свайп на мобильных
					touchThreshold:15, //видимо усилия для свайпа
					touchMove:true,//	Отвечает за движение кортинки "туда-сюда" без свайпа
				waitForAnimate:true,//позволяет самому пользователю регулировать скорость переключения слайдов	
				centerMode:true,//главный слайд встаёт в цент и ему присваивается новый класс-"slick-center"
				variableWidth:false,//выводит все картинки без отступов
				rows:1,//количество рядов в слайдере
				slidesPerRow:1,//этот пораметр умножает "slidesToShow" на себя -->
				vertical:false,//Слайдер становиться вертикальным, при его исользовании нужно отключать display-flex
					verticalSwiping:false,//для вертикального свайпа
				responsive:[
				
				],
			});
      
})
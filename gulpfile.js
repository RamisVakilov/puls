const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const maps = require('gulp-sourcemaps');
const webpack = require('webpack-stream');


let webConfig = {//настройка для webpack
    output:{
      filename: 'index_new.js'
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          loader:'babel-loader',
          exclude:'/node_modules/',
          options: { presets: ['@babel/preset-env'] }
        }
      ]
    },
    mode: 'production',//"production" или "development"
    //devtool: 'source-map',//создание карты js
};
let webConfig_form = {//настройка для webpack
    output:{
      filename: 'form_ajax.js'
    },
    module:{
      rules:[
        {
          test: /\.js$/,
          loader:'babel-loader',
          exclude:'/node_modules/',
          options: { presets: ['@babel/preset-env'] }
        }
      ]
    },
    mode: 'production',//"production" или "development"
    //devtool: 'source-map',//создание карты js
};

function html(done){//для работы с html файлами
  gulp.src('src/*.html')
  .pipe(gulp.dest("dist/"))
  .pipe(browserSync.stream());//чтобы в браузере отоброжались изменения
  done();
}

function style(done){//функция для работы со стилями
  gulp.src('src/scss/**/*.scss')
  .pipe(maps.init())
    .pipe(sass({
      errorLogConsole:true,//выводит в консоль все ошибки
      outputStyle:"compressed"//удаляет всё лишнее
    }))
      .on('error',console.error.bind(console))//когда ошибка вызывается обработчик событий
    .pipe(rename({suffix: '.min', prefix: ''}))
    .pipe(autoprefixer({
      cascade: false
  }))
    .pipe(cleanCSS({compatibility: 'ie10'}))
  .pipe(maps.write("./"))  
  .pipe(gulp.dest("dist/css/"))
  .pipe(browserSync.stream());
  done();
}

function sync(done){
  browserSync.init({
    server:{
      baseDir:"dist" //Где отслеживается
    },
    port:3000 //порт данного сервера
  });
  done();
}
function img(done){//Перемещаю картинки
  gulp.src('src/img/**/*+(png|jpg)')
  .pipe(gulp.dest("dist/img/"))
  .pipe(browserSync.stream());
  done();
}

function es6(done){
  gulp.src('./src/js/index_new.js')
   .pipe(webpack(webConfig))
   .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
   done();
}
function es6_form(done){
  gulp.src('./src/js/form_ajax.js')
   .pipe(webpack(webConfig_form))
   .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
   done();
}
function watchSass(){//Отслеживаю изменения во всех scss и не только
  gulp.watch('src/scss/**/*.scss',style);
  gulp.watch('src/*.html',html);
  gulp.watch('src/img/**/*+(png|jpg)',img);
  gulp.watch('src/js/**/*.js',es6);
  gulp.watch('src/js/**/*.js',es6_form);
}

 gulp.task(sync);
 gulp.task(watchSass);
 gulp.task(html);
 gulp.task(img);
 gulp.task(es6);
 gulp.task(es6_form);
 gulp.task(style);
//Функция по умолчанию
gulp.task('default', gulp.parallel(sync ,watchSass, html, img, es6, es6_form));



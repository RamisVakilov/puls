const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const maps = require('gulp-sourcemaps');

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
    .pipe(cleanCSS({compatibility: 'ie8'}))
  .pipe(maps.write("./"))  
  .pipe(gulp.dest("dist/css/"))
  .pipe(browserSync.stream());//чтобы в браузере отоброжались изменения
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

function java(done){
  gulp.src('src/js/**/*.js')
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.stream());
  done();
}

function watchSass(){//Отслеживаю изменения во всех scss и не только
  gulp.watch('src/scss/**/*.scss',style);
  gulp.watch('src/*.html',html);
  gulp.watch('src/img/**/*+(png|jpg)',img);
  gulp.watch('src/js/**/*.js',java);
}

 gulp.task(sync);
 gulp.task(watchSass);
 gulp.task(html);
 gulp.task(img);
 gulp.task(java);
//Функция по умолчанию
gulp.task('default', gulp.parallel(sync ,watchSass, html, img, java));



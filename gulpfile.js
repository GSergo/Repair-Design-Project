const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');

//Static server
function bs() {
  serveSass();
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};
 
//Отслеживание изменений
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")    //  /**/* - в любых папках и подпапках
    .pipe(sass())
    .pipe(autoprefixer({     //cтавим автопрефиксы
      cascade: false
    }))
    .pipe(dest("./css"))
    .pipe(browserSync.stream());
};

//Сжатие css файлов
function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))    //Берем все css файлы и передаем в плагин cleanСSS
    .pipe(dest('dist/css/'));                  //Затем выплевываем их в папку dist
  done();
}

//Сжатие js файлов
function buildJS(done) { 
  src('js/**.js')            //Берем все файлы JS, кроме уже минимизированных 
    .pipe(minify({
      noSource: true,
      ignoreFiles: ['**.min.js']
    }))                           //Минимизирует файлы                                       
    .pipe(dest('dist/js/'))
  src('js/**.min.js').pipe(dest('dist/js/'));  //Закидываем все файлы min.js в папку dist
  done();
}

//Сжатие html файлов
function html(done) {
  src('**.html')
    .pipe(htmlmin({collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

//Перенос php Файлов в папку dist
function php(done) {
  src(['**.php'])
    .pipe(dest('dist/'));
  src('phpmailer/**/**')
    .pipe(dest('dist/phpmailer'));
  done();
}

//Перенос шрифтов в папку dist
function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts'));
  done();
}

//Сжатие картинок через tiny
function imagemin(done) {
  src('img/**/**')
    .pipe(tinypng({key: 'S3Ntr8lrryDVjYSjHSkWnnfJMLLKtxL0'}))
    .pipe(dest('dist/img'));
  src('img/**/*.svg')
    .pipe(dest('dist/img'));
  done();
}



//Команды для консоли
exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);
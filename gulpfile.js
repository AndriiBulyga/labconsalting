var gulp        = require('gulp');
var sass        = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Создаем задачу для перезагрузки страниц при изменении
gulp.task('browser-sync', function() {
    browserSync.init({
      server: {
        baseDir: 'app'
      },
      notify: false,
    //   online: false, // Work offline without internet connection
      // tunnel: true, tunnel: 'projectname', // Demonstration page: http://projectname.localtunnel.me
    })
});

function bsReload(done) { browserSync.reload(); done() };

gulp.task('html', function(){
    return gulp.src('app/*.html')
        .pipe(browserSync.reload({stream: true}));
});

// Создаем задачу (таску) для компиляции (преобразования) scss файлов в css.
gulp.task('scss', function(){ 
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
});

// Создаем задачу для слежения за файлами и выполнения действия с ними
gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
    gulp.watch('app/*.html', gulp.parallel('html'));
});


// Дефолтная таска

gulp.task('default', gulp.parallel('html','scss','browser-sync', 'watch'));


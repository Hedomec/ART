/// <binding BeforeBuild='default' ProjectOpened='watch' />
/*
* Dependencias
*/
var gulp = require('gulp'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  templateCache = require('gulp-angular-templatecache'),
  htmlmin = require('gulp-htmlmin');
var concatCss = require('gulp-concat-css');

gulp.task('templates', function () {
    return gulp.src('wwwroot/app/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(templateCache('app-templates.js', { root: 'app/', module: 'app-templates', standalone: true }))
    .pipe(gulp.dest('temp/'));
});

gulp.task('scripts', ['templates'], function () {
    return gulp.src(['temp/app-templates.js', 'wwwroot/app/**/*.js'])
    .pipe(concat('app.js'))  
    .pipe(gulp.dest('wwwroot/build/'));
})

gulp.task('scripts.min', ['scripts'], function () {
    return gulp.src(['wwwroot/build/app.js'])
    .pipe(concat('app.min.js'))  
    .pipe(uglify())
    .pipe(gulp.dest('wwwroot/build/'));
})

gulp.task('vendor', function () {
    return gulp.src([
        'node_modules/angular/angular.min.js',
        'node_modules/angular-deferred-bootstrap/angular-deferred-bootstrap.min.js',
        'node_modules/angular-aria/angular-aria.min.js',
        'node_modules/angular-animate/angular-animate.min.js',
        'node_modules/angular-cookies/angular-cookies.min.js',
        'node_modules/angular-messages/angular-messages.min.js',

        'node_modules/angular-sanitize/angular-sanitize.min.js',

        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        'node_modules/angular-material/angular-material.min.js',
        'node_modules/angular-material-data-table/dist/md-data-table.min.js',
        'node_modules/angular-local-storage/dist/angular-local-storage.min.js',
        'node_modules/angular-loading-bar/build/loading-bar.min.js',
        'node_modules/lf-ng-md-file-input/dist/lf-ng-md-file-input.min.js',
        'node_modules/angular-css/angular-css.min.js',
        //'node_modules/md-crud/dist/md-crud.min.js',
        'node_modules/moment/min/moment.min.js',
        'node_modules/ng-scroll-bar/dist/ng-scroll-bar.min.js',
        'node_modules/ng-file-upload/dist/ng-file-upload-all.min.js',
        'wwwroot/lib/md-crud.min.js',
    ])
    .pipe(concat('vendor.min.js'))
    .pipe(gulp.dest('wwwroot/build/'));
})

// Crea un archivo con todos los css
gulp.task('vendor.css', function () {
    return gulp.src([
        "node_modules/angular-material/angular-material.css",
        "node_modules/angular-material-data-table/dist/md-data-table.css",
        "node_modules/angular-loading-bar/build/loading-bar.min.css",
        'node_modules/ng-scroll-bar/dist/ng-scroll-bar.min.css',
        'wwwroot/lib/md-crud.min.css'
    ])
    .pipe(concatCss("vendor.min.css"))
    .pipe(gulp.dest('wwwroot/build/'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
    var watcher = gulp.watch(['wwwroot/app/**/*.js', 'wwwroot/app/**/*.html'], ['templates', 'scripts', 'scripts.min']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

// The default task (called when you run `gulp` from cli)
//gulp.task('default', ['watch', 'scripts']);
gulp.task('default', ['scripts.min', 'vendor', 'vendor.css']);
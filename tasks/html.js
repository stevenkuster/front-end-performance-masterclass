const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin'); // docs: https://github.com/jonschlinkert/gulp-htmlmin

const baseDir = 'src/optimised/';



gulp.src(baseDir + '**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/optimised/'));
var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');
 
gulp.task('tinypng', function (done) {
    gulp.src('img/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'fnDJ8tnqZqNg2v5n9y40svqVGC2TMmQ5',
        }))
        .pipe(gulp.dest('images'));
        done();
});
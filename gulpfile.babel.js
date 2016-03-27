'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import using from 'gulp-using';

const dirs = {
    client: 'app/client/**/*.js',
    server: 'app/server/**/*.js',
    imports: 'app/imports/**/*.js',
    tests: 'app/tests/**/*.js'
};

gulp.task('mocha:client', () => {
    return gulp.src(dirs.client)
        .pipe(using())
        .pipe(mocha({
            reporter: 'progress'
        }));
});
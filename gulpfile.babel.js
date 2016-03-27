'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import using from 'gulp-using';

const dirs = {
    client: 'client/**/*.js',
    server: 'server/**/*.js',
    imports: 'imports/**/*.js',
    tests: 'tests/**/*.js'
};

gulp.task('mocha:client', () => {
    return gulp.src(dirs.client)
        .pipe(using())
        .pipe(mocha({
            reporter: 'progress'
        }));
});
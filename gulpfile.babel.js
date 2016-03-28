'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import using from 'gulp-using';

const dirs = {
    client: 'app/imports/client/**/*.js',
    tests: {
        client: 'app/tests/client/**/*.js'
    }
};

let tddClientFiles = [
    dirs.client,
    dirs.tests.client,
];

gulp.task('mocha:client', () => {
    return gulp.src(tddClientFiles)
        .pipe(using())
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.task('tdd:mocha:client', () => {
    gulp.watch(tddClientFiles, ['mocha:client']);
});

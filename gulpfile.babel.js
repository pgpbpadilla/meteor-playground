'use strict';

import gulp from 'gulp';
import mocha from 'gulp-mocha';
import using from 'gulp-using';

import { spawn } from 'child_process';

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

gulp.task('tdd:client', () => {
    return gulp.src(tddClientFiles)
        .pipe(using())
        .pipe(mocha({
            reporter: 'spec'
        }));
});

gulp.watch(tddClientFiles, ['tdd:client']);

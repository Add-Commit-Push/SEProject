'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyVendor', function() {

    return gulp.src([config.sourceDir + 'vendor/**/*'])
        .pipe(gulp.dest(config.buildDir + 'vendor/'));

});

'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyCSS', function() {

    return gulp.src([config.sourceDir + 'css/**/*'])
        .pipe(gulp.dest(config.buildDir + 'css/'));

});

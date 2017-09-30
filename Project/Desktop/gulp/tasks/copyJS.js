'use strict';

import gulp   from 'gulp';
import config from '../config';

gulp.task('copyJS', function() {

    return gulp.src([config.sourceDir + 'scripts/**/*'])
        .pipe(gulp.dest(config.buildDir + 'js/'));

});

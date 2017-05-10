var gulp = require("gulp")
var concat = require("gulp-concat")
var uglify = require("gulp-uglify")
var phastarVersion = require("./package.json").version
var easyStarVersion = require("./node_modules/easystarjs/package.json").version
var phastarSource = "src/phastar.js"
var easyStarSource = "node_modules/easystarjs/bin/easystar-" + easyStarVersion + ".js"

gulp.task("dist", ["concat", "minify"])

gulp.task("concat", function () {
  gulp.src([phastarSource, easyStarSource])
    .pipe(concat("phastar-" + phastarVersion + ".js"))
    .pipe(gulp.dest("bin"))
})

gulp.task("minify", function () {
  gulp.src([phastarSource, easyStarSource])
    .pipe(concat("phastar-" + phastarVersion + ".min.js"))
    .pipe(uglify())
    .pipe(gulp.dest("bin"))
})

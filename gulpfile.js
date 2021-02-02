const{series,src,dest,watch,parallel} =require('gulp');
const sass=require('gulp-sass');
const imagemin=require('gulp-imagemin');
const notify= require('gulp-notify');
const webp = require('gulp-webp');
//funcion que compila sass

function css(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(dest('./build/css'))
}
function minificarcss(){
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(dest('./build/css'))
}
function imagenes(){
    return src('src/img/**/*')
    .pipe(imagemin())
    .pipe(dest('./build/img'))
    .pipe(notify({message:'imagen minificada'}))
}
function versionwebp(){
    return src('src/img/**/*')
    .pipe(webp())
    .pipe(dest('./build/img'))
}
function watchArchivo(){
    watch('src/scss/**/*.css', css);
}


exports.css=css;
exports.watchArchivo=watchArchivo;
exports.imagenes=imagenes;
exports.versionwebp=versionwebp;
exports.default=series(css,imagenes,versionwebp,watchArchivo );
module.exports = function(grunt) {
  
  grunt.file.defaultEncoding = 'utf8';
  grunt.file.preserveBOM = true;
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  var pkg = grunt.file.readJSON('package.json');
  var js_build_path      = pkg.assets.js['build-folder'] + '/' + pkg.assets.js['build-file'];
  var js_build_min_path  = pkg.assets.js['build-folder'] + '/' + pkg.assets.js['build-file-min'];
  var css_build_path     = pkg.assets.css['build-folder'] + '/' + pkg.assets.css['build-file'];
  var css_build_min_path = pkg.assets.css['build-folder'] + '/' + pkg.assets.css['build-file-min'];
  
  grunt.initConfig({
  
    pkg: pkg,
    
    clean: {
      build: [pkg.assets.js['build-folder'], pkg.assets.css['build-folder']],
    },
    
    concat: {
      js: {
        src: pkg.assets.js.files,
        dest: js_build_path
      },
      css: {
        src: pkg.assets.css.files,
        dest: css_build_path
      }
    },
    
    uglify: {
      js: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          report: 'min'
        },
        src: js_build_path,
        dest: js_build_min_path
      }
    },
    
    cssmin: {
      css: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          report: 'min'
        },
        src: css_build_path,
        dest: css_build_min_path
      }
    }
    
  });

  grunt.registerTask('default', ['clean','concat','uglify','cssmin']);

};
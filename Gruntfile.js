module.exports = function(grunt) {
  
  grunt.file.defaultEncoding = 'utf8';
  grunt.file.preserveBOM = true;
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  
  var pkg = grunt.file.readJSON('package.json');
  
  grunt.initConfig({
    pkg: pkg,
    clean: {
      build: ["build"]
    },
    concat: {
      js: {
        files: {
          'build/extranet-core-<%= pkg.version %>.js':  pkg.assets.core_js,
          'build/extranet-login-<%= pkg.version %>.js': pkg.assets.login_js,
          'build/extranet-user-<%= pkg.version %>.js':  pkg.assets.user_js,
          'build/extranet-admin-<%= pkg.version %>.js': pkg.assets.admin_js
        }
      },
      css: {
        files: {
          'build/extranet-core-<%= pkg.version %>.css':  pkg.assets.core_css,
          'build/extranet-login-<%= pkg.version %>.css': pkg.assets.login_css,
          'build/extranet-user-<%= pkg.version %>.css':  pkg.assets.user_css,
          'build/extranet-admin-<%= pkg.version %>.css': pkg.assets.admin_css
        }
      }
    },
    uglify: {
      js: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          report: 'min'
        },
        files: {
          'build/extranet-core-<%= pkg.version %>.min.js':  'build/extranet-core-<%= pkg.version %>.js',
          'build/extranet-login-<%= pkg.version %>.min.js': 'build/extranet-login-<%= pkg.version %>.js',
          'build/extranet-user-<%= pkg.version %>.min.js':  'build/extranet-user-<%= pkg.version %>.js',
          'build/extranet-admin-<%= pkg.version %>.min.js': 'build/extranet-admin-<%= pkg.version %>.js'
        }
      }
    },
    cssmin: {
      css: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
          report: 'min'
        },
        files: {
          'build/extranet-core-<%= pkg.version %>.min.css':  'build/extranet-core-<%= pkg.version %>.css',
          'build/extranet-login-<%= pkg.version %>.min.css': 'build/extranet-login-<%= pkg.version %>.css',
          'build/extranet-user-<%= pkg.version %>.min.css':  'build/extranet-user-<%= pkg.version %>.css',
          'build/extranet-admin-<%= pkg.version %>.min.css': 'build/extranet-admin-<%= pkg.version %>.css'
        }
      }
    }
  });

  grunt.registerTask('default', ['clean','concat','uglify','cssmin']);

};
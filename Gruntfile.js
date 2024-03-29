module.exports = function(grunt) {

  // Configuration 
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      shell: {
        patternlab: {
          command: "php core/builder.php -gp"
      }
    },

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: [
          'source/js/init.js',
          'source/js/modernizr.js',
          'source/js/fitvids.js', 
          'source/js/jquery.leanModal.min.js',
          'source/js/all.js'
        ],
        dest: 'public/js/production.js'
      }
    },

    uglify: {
      build: {
        src: 'public/js/production.js',
        dest: 'public/js/production.min.js'
      }
    },
    
    sass: {
      dist: {
        options: {
          style: 'expanded',
          compass: true,
          require: 'susy'
        }, 
        files: {
          'public/css/style.css': 'source/css/style.scss'
        }
      }
    },

    watch: {
      html: {
        files: [
            'source/_patterns/**/*.mustache',
            'source/**/*.json',
            'source/_data/*.json'
            ],
        tasks: ['shell:patternlab'],
        options: {
          spawn: false,
          livereload: true
        }
      }, 
      css: {
        files: ['source/css/**/*.scss'], 
        tasks: ['sass'],
        options: {
          spawn: false, 
          livereload: true
        }
      },
      scripts: {
        files: ['source/js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false,
          livereload: true
        },
      }
    }
  });

    

  // Plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['shell:patternlab', 'sass', 'concat', 'uglify']);
};

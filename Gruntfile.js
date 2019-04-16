
module.exports = function(grunt) {
  grunt.initConfig({
    htmlhint: {
      html: {
        options: {
          htmlhintrc: '.htmlhintrc'
          },
        src: ['*.html']
      }
     },
    csslint: {
      options: {
        csslintrc: '.csslint'
      },
      src: ['*.css']
    },
    eslint: {
      options: {
        configFile: '.eslintrc.json'
      },
      target: ['*.js']
    }
    
  });
     grunt.loadNpmTasks('grunt-htmlhint');/*加载插件*/
     grunt.loadNpmTasks('grunt-contrib-csslint');//加载插件
     grunt.loadNpmTasks('grunt-eslint');//加载插件
     grunt.registerTask('default', ['htmlhint']);/*任务注册*/
     grunt.registerTask('default', ['csslint']);//任务注册
     grunt.registerTask('default', ['eslint']);//任务注册


  };


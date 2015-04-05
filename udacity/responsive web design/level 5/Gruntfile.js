'use strict';

module.exports = function(grunt){
  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {},
        sizes: [{
          width: 320,
          height: 240
        },{
          name: 'large',
          width: 640
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 0.6
        }],
        files: [{
          expand: true,
          src: ['images/**/*.{jpg,gif,png}'],
          cwd: 'src/',
          dest: 'dist/'
        }]
      }
    },
  });
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default', 'responsive_images');
};


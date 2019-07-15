module.exports = function(grunt) {
  grunt.initConfig({
    bump: {
      options: {
        files: ["package.json"],
        commit: false,
        createTag: false,
        push: false,
        globalReplace: false,
        prereleaseName: false,
        regExp: false
      }
    }
  })
  grunt.loadNpmTasks("grunt-bump")
  grunt.registerTask('default', ['bump'])
}
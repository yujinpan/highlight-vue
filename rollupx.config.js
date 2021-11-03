module.exports = {
  banner:
    '/*!\n' +
    ` * highlight-vue v${require('./package.json').version}\n` +
    ` * (c) 2019-${new Date().getFullYear()} yujinpan\n` +
    ' * Released under the MIT License.\n' +
    ' */\n',
  inputFiles: ['**/*'],
  outputDir: 'dist',
  stylesParseFiles: [],
  stylesCopyFiles: ['**/*'],
  typesOutputDir: 'dist',
  singleFile: false
};

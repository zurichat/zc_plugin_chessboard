const path = require('path');
const mergeImg = require('merge-img');

const generateImage = async (file) => {
  mergeImg([
    {
      src: 'https://ui-avatars.com/api/?name=--&background=random&uppercase=false',

      // x: 0,
      // y: 0,
    },
    {
      src: 'https://ui-avatars.com/api/?name=--&background=random&uppercase=false',

      // x: 32,
      // y: 0,
    },
  ]).then(async (img) => {
    img.write(path.join(__dirname, '..', '..', '..', 'frontend', 'dist', file), () => {
      console.log('done');
    });
  });
  return file;
};

// generateImage(imag1, imag2, file);
module.exports = generateImage;

const mergeImages = require('merge-images');
const path = require('path');
const { Canvas, Image } = require('canvas');
const { writeFile } = require('fs').promises;

const generateImage = async (imag1, imag2, file) => {
  const image = await mergeImages(
    [
      {
        src: imag1 || 'https://ui-avatars.com/api/?name=--&background=random&uppercase=false',
        x: 0,
        y: 0,
      },
      {
        src: imag2 || 'https://ui-avatars.com/api/?name=--&background=random&uppercase=false',
        x: 32,
        y: 0,
      },
    ],
    {
      Canvas,
      Image,
      crossOrigin: 'anonymous',
      width: 64,
      height: 64,
    },
  );
  await writeFile(
    path.join(__dirname, '..', '..', '..', 'frontend', 'dist', file),
    image.split(',')[1],
    {
      encoding: 'base64',
    },
  );
  return file;
};

// generateImage(imag1, imag2, file);
module.exports = generateImage;

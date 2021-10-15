const mergeImages = require("merge-images");
const path = require("path");
const { Canvas, Image } = require("canvas");
const { writeFile } = require("fs").promises;

// const imag1 = process.argv[2];
// const imag2 = process.argv[3];
// const file = process.argv[3];

const generateImage = async (imag1, imag2, file) => {
  const image = await mergeImages(
    [
      {
        src: imag1
          ? imag1
          : "https://ui-avatars.com/api/?name=--&background=random&uppercase=false",
        x: 0,
        y: 0,
      },
      {
        src: imag2
          ? imag2
          : "https://ui-avatars.com/api/?name=--&background=random&uppercase=false",
        x: 32,
        y: 0,
      },
    ],
    {
      Canvas: Canvas,
      Image: Image,
      crossOrigin: "anonymous",
      width: 64,
      height: 64,
    }
  );
  await writeFile(
    path.join(__dirname, "..", "..", "..", "chess", "dist", file),
    image.split(",")[1],
    {
      encoding: "base64",
    }
  );
  return file;
};

//generateImage(imag1, imag2, file);
module.exports = generateImage;

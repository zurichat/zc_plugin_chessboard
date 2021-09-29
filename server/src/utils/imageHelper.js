const mergeImages = require("merge-images");
const { Canvas, Image } = require("canvas");
// Imports
const path = require("path");
const { unlink, writeFile, readdir } = require("fs").promises;

const generateImage = async (imag1, imag2, org) => {
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

  const file = `${new Date().getTime()}_${org}_sidebar.png`;

  await writeFile(
    path.join(__dirname, "..", "..", "..", "chess", "dist", file),
    image.split(",")[1],
    {
      encoding: "base64",
    }
  );
  return file;
};

const disposeImage = async (org) => {
  const dirName = path.join(__dirname, "..", "..", "..", "chess", "dist");
  const names = await readdir(dirName);
  for (let file of names) {
    if (file.includes(`_${org}_sidebar`)) {
      await unlink(path.join(dirName, file));
    }
  }
};

module.exports = {
  generateImage,
  disposeImage,
};

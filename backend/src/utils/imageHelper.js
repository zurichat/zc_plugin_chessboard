const path = require("path");
const { unlink, readdir } = require("fs").promises;

const disposeImages = async (org) => {
  const dirName = path.join(__dirname, "..", "..", "..", "chess", "dist");
  const names = await readdir(dirName);
  for (let file of names) {
    if (file.includes(`_${org}_sidebar`)) {
      await unlink(path.join(dirName, file));
    }
  }
};

const disposeImage = async (org, game_id) => {
  const dirName = path.join(__dirname, "..", "..", "..", "chess", "dist");
  const names = await readdir(dirName);
  for (let file of names) {
    if (file.includes(`_${game_id}_${org}`)) {
      await unlink(path.join(dirName, file));
    }
  }
};

module.exports = {
  disposeImage,
  disposeImages,
};

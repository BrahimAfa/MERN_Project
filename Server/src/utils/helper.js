import fs from 'fs';
import path from 'path'
export const makeDir = (currentPlace, dirName) => {
    fs.mkdir(path.join(currentPlace, dirName), (err) => {
        if (err) {
            if (err.code === "EEXIST") return;
            return console.log(err);
        }
        console.log("Folder Created Successfully")
    });
}

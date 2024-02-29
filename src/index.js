import { list } from "./dependencies.mjs";
const audioFolder = './audios';
const audioFiles = [
    'a.mp3',
    'b.mp3',
    'c.mp3',
    'd.mp3',
    'e.mp3',
    'f.mp3'
]

audioFiles.forEach(file => {
    const audioPath = `${audioFolder}/${file}`;
    list.push(audioPath);
})

for (let i = 0; i < list.size(); i++) {
    console.log(list.getElementAt(i).getData());
}

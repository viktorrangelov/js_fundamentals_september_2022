function gramophone(bandName,albumName,songName) {
    let songDuration = (albumName.length * bandName.length) * songName.length / 2;
    let rotationNumber = songDuration / 2.5;
    console.log(`The plate was rotated ${Math.ceil(rotationNumber)} times.`)
}

gramophone('Black Sabbath', 'Paranoid','War Pigs');
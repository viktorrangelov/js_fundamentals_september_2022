function play(givenInfo) {
    class Song{
        constructor(type, name, time){
            this.type = type;
            this.name = name;
            this.time = time;
        }
        
    }
    let songs = [];
    let numberOfSongs = Number(givenInfo.shift());
    let typeSong = givenInfo.pop();

    for (let index = 0; index < numberOfSongs; index++) {
        let line = givenInfo[index].split('_');
        let type = line[0];
        let name = line[1];
        let time = line[2];

        let song = new Song(type,name,time);
        songs.push(song);
        
    }
    if (typeSong === 'all') {
        songs.forEach((i) => console.log(i.name));
        
    }else{
        let filtered = songs.filter((i) => i.type === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

play([3,

    'favourite_DownTown_3:14',
    
    'favourite_Kiss_4:16',
    
    'favourite_Smooth Criminal_4:01',
    
    'favourite'])
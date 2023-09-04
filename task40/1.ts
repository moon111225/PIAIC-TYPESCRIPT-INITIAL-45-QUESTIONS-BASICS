function make_album(artist:string, title:string, tracks:number) {
    let album = {
        artist: artist,
        title: title
    };

    if (tracks !== undefined) {
        album.tracks = tracks; //it means you're accessing the tracks property within the album object  
    }

    return album;
}

// Making album dictionaries using the function // we stored the call of function into varables
let album1 = make_album("Artist A", "Album A");
let album2 = make_album("Artist B", "Album B", 12);
let album3 = make_album("Artist C", "Album C", 8);

// Printing album information // priniting variables
console.log(album1);
console.log(album2);
console.log(album3);

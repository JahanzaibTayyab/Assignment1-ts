interface Album {
  artist: string;
  album: string;
  tracks?: number;
}

const make_album = (artist: string, album: string, tracks?: number) => {
  let albumObj: Album = {
    artist,
    album,
    ...(tracks != null && {
      tracks,
    }),
  };
  return albumObj;
};
console.log(make_album("Atif Aslam", "Laila Majnu"));
console.log(make_album("Shuja Haider", "Ru-Ba-Ru"));
console.log(make_album("Ed Sheeran", "Divide", 20));

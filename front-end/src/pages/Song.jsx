import { Link, useParams } from "react-router-dom";
import Player from "../components/Player";
import { songsArray } from "../assets/database/songs";
import { artistArray } from "../assets/database/artists";
const Song = () => {
  const { id } = useParams();

  const { image, name, duration, artist, audio } = songsArray.filter(
    (SongObj) => SongObj._id === id
  )[0];

  const artistObj = artistArray.filter(
    (ArtistObj) => ArtistObj.name === artist
  )[0];

  const songsArrayFromArtist = songsArray.filter(
    (songObj) => songObj.artist === artist
  );

  const randomIndex = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist = songsArrayFromArtist[randomIndex]._id;

  const randomIndex2 = Math.floor(
    Math.random() * (songsArrayFromArtist.length - 1)
  );

  const randomIdFromArtist2 = songsArrayFromArtist[randomIndex2]._id;

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={image} alt={`Imagem da Música ${name}`} />
        </div>
      </div>

      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`"Imagem do Artista ${artist}`}
          />
        </Link>

        <Player
          duration={duration}
          randomIdFromArtist={randomIdFromArtist}
          randomIdFromArtist2={randomIdFromArtist2}
          audio={audio}
        />

        <div>
          <p className="song__name">{name}</p>
          <p>{artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;

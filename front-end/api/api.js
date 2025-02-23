import axios from "axios";

const URL = "https://fullstackspotify.onrender.com/api";

const responseArtist = await axios.get(`${URL}/artists`);

const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtist.data;
export const songsArray = responseSongs.data;

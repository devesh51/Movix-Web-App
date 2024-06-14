import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";

const TMBD_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YTM1MjQ2ZGZhZjM4MDcwZTM2YTJlNmNlMWVjZTY3YSIsInN1YiI6IjY0NzA3ZGVjNzcwNzAwMDBhOTQ3ZDM2ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W6TATCM9D1z2KoN-0T0VM2_bFOIDUtJNb4erOfeuxy8";

const headers = {
  Authorization: "bearer " + TMBD_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
  try {
    const { data } = await axios.get(BASE_URL + url, {
      headers,
      params,
    });
    return data;
  } catch (err) {
    console.log(err);
    return err;
  }
};

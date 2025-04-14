export const API_OPTIONS= {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWE5ZTk1ZjgzYjI4Nzc2ZWNhYmY0MWZmMzRjNzA2MiIsIm5iZiI6MTc0Mzc2NzMxNy41OTMsInN1YiI6IjY3ZWZjNzE1MGM3OTFiZWI1N2FjZjhlMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-TiwvYEDxrXRoCvMVdFEvPTpexGYzAZdXqDUe104kM0'
  }
};
export const MOVIE_LIST_URL= 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const MOVIE_NAME_URL = 'https://api.themoviedb.org/3/search/movie?query=raj&include_adult=false&language=en-US&page=1'

export const IMG_URL="https://image.tmdb.org/t/p/w500"

export const BG_URL="https://assets.nflxext.com/ffe/siteui/vlv3/fa4630b1-ca1e-4788-94a9-eccef9f7af86/web_tall_panel/IN-en-20250407-TRIFECTA-perspective_8be2cd93-f2e6-4e34-acba-05b716385704_small.jpg";
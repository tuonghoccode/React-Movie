const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "57093d829398a1ad3402f09be207fbdb",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig
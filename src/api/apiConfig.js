const apiConfig = {
    baseUrl: '3c3a0e4d83714f197e351f1b476bad43',
    apiKey: 'get from themoviedb.org',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;

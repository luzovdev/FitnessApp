export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '32bbfe00cfmsheed26f06afebcc5p10d0efjsnf0c338aaca5c',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const exerciseVideosOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '32bbfe00cfmsheed26f06afebcc5p10d0efjsnf0c338aaca5c',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};


export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();
   return data;
}
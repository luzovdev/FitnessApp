export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': 'a330778f45mshaaf8b2a11c8b354p1036c9jsnc752d537530d',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const exerciseVideosOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': 'a330778f45mshaaf8b2a11c8b354p1036c9jsnc752d537530d',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};


export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();
   return data;
}
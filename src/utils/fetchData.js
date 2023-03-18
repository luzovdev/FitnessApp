export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '0df344da2emsh92ba76fc8eb0fa4p1109d5jsnc62f28598cde',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const exerciseVideosOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '0df344da2emsh92ba76fc8eb0fa4p1109d5jsnc62f28598cde',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};

export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();

   return data;
}
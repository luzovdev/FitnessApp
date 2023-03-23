export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '7573ed37b0msh98509eb7588c853p1d65ddjsnf07c0393ba1a',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const exerciseVideosOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '7573ed37b0msh98509eb7588c853p1d65ddjsnf07c0393ba1a',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
   }
};


export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();
   return data;
}
export const exerciseOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': 'aaaedcd8edmsh063fccc022015b7p111a2bjsnedf9c4d54d75',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
   }
};

export const fetchData = async (url, options) => {
   const response = await fetch(url, options);
   const data = await response.json();

   return data;
}
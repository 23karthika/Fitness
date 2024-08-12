export const exerciseOptions = {
    method: 'GET',
    headers: {
      //  'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      // 'X-RapidAPI-Key':'f797a95274msh52f045bf6581c23p102b82jsn64afc64d100c',
       'x-rapidapi-key': 'f797a95274msh52f045bf6581c23p102b82jsn64afc64d100c',
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
    },
  };
  
  // export const youtubeOptions = {
  //   method: 'GET',
  //   headers: {
  
  //     'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  //       'x-rapidapi-key': 'f797a95274msh52f045bf6581c23p102b82jsn64afc64d100c'
  //   },
  // };
  
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };
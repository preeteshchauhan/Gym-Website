//from RapidAPI
export const exerciseOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "12f0376cc3mshf9a8c73e2a500b9p1ae18ajsnbaae4caa1a7b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises/bodyPart/back",
  params: { limit: "10" },
  headers: {
    "X-RapidAPI-Key": "12f0376cc3mshf9a8c73e2a500b9p1ae18ajsnbaae4caa1a7b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json(); //we have to extract the data if we don't use axios i.e it we use fetch.

  return data;
};

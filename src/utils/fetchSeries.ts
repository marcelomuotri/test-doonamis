import { Series } from "../models/Series";
import { SeriesDetails } from "../models/SeriesDetails";

const API_KEY = "c6aeee577586ba38e487b74dfede5deb";
const DISCOVER_URL = "https://api.themoviedb.org/3/discover/tv";
const TV_URL = "https://api.themoviedb.org/3/tv";

export const fetchSeriesByCountry = async (
  country: string,
  page: number = 1
): Promise<Series[]> => {
  const response = await fetch(
    `${DISCOVER_URL}?api_key=${API_KEY}&with_origin_country=${country}&page=${page}`
  );
  const data = await response.json();
  return data.results.map((item: Series) => Series.fromJson(item));
};

export const fetchSeries = async (
  countries: string[]
): Promise<{ [key: string]: Series[] }> => {
  const seriesByCountry: { [key: string]: Series[] } = {};
  for (const country of countries) {
    seriesByCountry[country] = await fetchSeriesByCountry(country);
  }
  return seriesByCountry;
};

export const fetchSeriesDetails = async (id: number): Promise<SeriesDetails> => {
  const response = await fetch(
    `${TV_URL}/${id}?api_key=${API_KEY}&append_to_response=credits`
  );
  const data = await response.json();
  return SeriesDetails.fromJson(data);
};

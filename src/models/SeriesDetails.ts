export class SeriesDetails {
    id: number;
    name: string;
    backdrop_path: string | null;
    poster_path: string | null;
    overview: string;
    first_air_date: string;
    number_of_seasons: number;
    number_of_episodes: number;
    genres: { name: string }[];
    vote_average: number;
    credits: {
      cast: { name: string }[];
    };
  
    constructor(
      id: number,
      name: string,
      backdrop_path: string | null,
      poster_path: string | null,
      overview: string,
      first_air_date: string,
      number_of_seasons: number,
      number_of_episodes: number,
      genres: { name: string }[],
      vote_average: number,
      credits: { cast: { name: string }[] }
    ) {
      this.id = id;
      this.name = name;
      this.backdrop_path = backdrop_path;
      this.poster_path = poster_path;
      this.overview = overview;
      this.first_air_date = first_air_date;
      this.number_of_seasons = number_of_seasons;
      this.number_of_episodes = number_of_episodes;
      this.genres = genres;
      this.vote_average = vote_average;
      this.credits = credits;
    }
  
    // Método estático para crear una instancia a partir de un objeto JSON
    static fromJson(data: SeriesDetails) {
      return new SeriesDetails(
        data.id,
        data.name,
        data.backdrop_path,
        data.poster_path,
        data.overview,
        data.first_air_date,
        data.number_of_seasons,
        data.number_of_episodes,
        data.genres,
        data.vote_average,
        {
          cast: data.credits.cast.map((actor: {name: string}) => ({
            name: actor.name
          }))
        }
      );
    }
  }
  
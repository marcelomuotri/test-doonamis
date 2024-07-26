export class Series {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  origin_country: string;

  constructor(
    id: number,
    name: string,
    overview: string,
    poster_path: string,
    origin_country: string
  ) {
    this.id = id;
    this.name = name;
    this.overview = overview;
    this.poster_path = poster_path;
    this.origin_country = origin_country;
  }

  static fromJson(data: Series) {
    return new Series(
      data.id,
      data.name,
      data.overview,
      data.poster_path,
      data.origin_country
    );
  }
}

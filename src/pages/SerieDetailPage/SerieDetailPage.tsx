import { Component } from "react";
import { useParams } from "react-router-dom";
import { fetchSeriesDetails } from "../../utils/fetchSeries";
import "./serieDetailPage.scss";
import { SeriesDetails } from "../../models/SeriesDetails";

interface SeriesDetailPageProps {
  params: {
    id: string;
  };
}

interface SeriesDetailPageState {
  details: SeriesDetails | null;
  loading: boolean;
}

class SeriesDetailPage extends Component<
  SeriesDetailPageProps,
  SeriesDetailPageState
> {
  constructor(props: SeriesDetailPageProps) {
    super(props);
    this.state = {
      details: null,
      loading: true,
    };
  }

  componentDidMount() {
    const { id } = this.props.params;
    fetchSeriesDetails(Number(id))
      .then((details) => {
        this.setState({ details, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching series details:", error);
        this.setState({ loading: false });
      });
  }

  render() {
    const { details, loading } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!details) {
      return <div>No details available</div>;
    }

    return (
      <div
        className="series-detail"
        style={
          details.backdrop_path
            ? {
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/w780${details.backdrop_path})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                textAlign: "center",
                color: "#fff",
                //height: "75vh", //ver
              }
            : {}
        }
      >
        <h1>{details.name}</h1>
        <div className="series-detail__content">
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w300${details.poster_path}`}
              alt={details.name}
              className="series-detail__poster"
            />
          </div>
          <div className="series-detail__description">
            <p>{details.overview}</p>
            <p>
              <strong>First Air Date:</strong> {details.first_air_date}
            </p>
            <p>
              <strong>Number of Seasons: </strong> {details.number_of_seasons}
            </p>
            <p>
              <strong>Number of Episodes: </strong> {details.number_of_episodes}
            </p>
            <p>
              <strong>Genres: </strong>
              {details.genres?.map((genre) => genre.name).join(", ")}
            </p>
            <p>
              <strong>Vote Average:</strong> {details.vote_average}
            </p>
            <p>
              <strong>Cast: </strong>
              {(
                details.credits?.cast
                  ?.slice(0, 5)
                  .map((actor) => actor.name) || ["No cast information"]
              ).join(", ")}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const SeriesDetailPageWithParams = () => {
  const params = useParams<{ id: string }>();

  if (!params.id) {
    return <div>Invalid series ID</div>;
  }

  return <SeriesDetailPage params={{ id: params.id }} />;
};

export default SeriesDetailPageWithParams;

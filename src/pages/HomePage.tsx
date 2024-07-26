import { Component } from "react";
import Slider from "react-slick";
import { Series } from "../models/Series";
import { fetchSeries } from "../utils/fetchSeries";
import CardSerie from "../components/CardSerie/CardSerie";
import "./HomePage.scss";

type CountryCode = "US" | "ES" | "GB";

const language: Record<CountryCode, string> = {
  US: "English",
  ES: "Spanish",
  GB: "English",
};

interface HomePageProps {}

interface HomePageState {
  series: { [key: string]: Series[] };
  loading: boolean;
  error: string | null;
}

class HomePage extends Component<HomePageProps, HomePageState> {
  private countries: CountryCode[] = ["US", "ES", "GB"];
  private sliderSettings = {
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  constructor(props: HomePageProps) {
    super(props);
    this.state = {
      series: {},
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetchSeries(this.countries)
      .then((seriesList) => {
        this.setState({ series: seriesList, loading: false });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        this.setState({ loading: false, error: "Failed to load series data." });
      });
  }

  render() {
    const { series, loading, error } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <div className="home-page">
        {Object.keys(series).map((country) => (
          <div key={country} className="homePage__seriesList">
            <h2 className="homePage__country">
              {language[country as CountryCode]}
            </h2>
            <div className="homePage__slider">
              <Slider {...this.sliderSettings}>
                {series[country].map((serie) => (
                  <CardSerie key={serie.id} serie={serie} />
                ))}
              </Slider>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default HomePage;

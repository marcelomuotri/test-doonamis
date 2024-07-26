import { Component } from "react";
import "./cardSerie.scss";
import { Link } from "react-router-dom";

interface CardProps {
  serie: {
    id: number;
    name: string;
    poster_path: string;
  };
}

class CardSerie extends Component<CardProps> {
  render() {
    const { serie } = this.props;
    return (
      <Link to={`/series/${serie.id}`} className="card-serie">
        <div className="card-serie">
          <img
            src={`https://image.tmdb.org/t/p/w200${serie.poster_path}`}
            alt={serie.name}
            className="card-serie__image"
          />
          <h3>{serie.name}</h3>
        </div>
      </Link>
    );
  }
}

export default CardSerie;

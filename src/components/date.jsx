import "../App.css";
import { format } from "date-fns";

const CurrentDate = () => {
  const time = format(new Date(), "h:mm b");
  const date = format(new Date(), "MMM dd");
  const day = format(new Date(), "EEEE");
  console.log(day);
  return (
    <div className="movie-date-time">
      <span className="movie-time">{time}</span>
      <div className="movie-date">
        <span className="movie-date-date">{date}</span>
        <span className="movie-date-day">{day}</span>
      </div>
    </div>
  );
};

export default CurrentDate;

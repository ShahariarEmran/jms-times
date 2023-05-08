import NewsCardBody from "./NewsCardBody";

const NewsCard = () => {
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/80x40"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <p className="card-text">
          <NewsCardBody />
        </p>
      </div>
    </div>
  );
};

export default NewsCard;

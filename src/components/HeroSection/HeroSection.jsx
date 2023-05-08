import NewsCard from "../../ui/NewsCard";
import NewsCardBody from "../../ui/NewsCardBody";

const HeroSection = () => {
  return (
    <div className="container-fluid px-4">
      <div className="row g-3">
        <div className="col-md-10">
          <div className="border bg-light d-grid gap-3">
            <div className="d-md-flex border g-3 row">
              <div className="col-md-9 border">
                <img
                  src="https://via.placeholder.com/80x30"
                  className="card-img-top"
                  alt="..."
                />
              </div>
              <div className="col-md-3 border">
                <NewsCard />
              </div>
            </div>
            <div className="d-md-flex border g-3 row">
              <div className="col-md-3 border">
                <NewsCard />
              </div>
              <div className="col-md-3 border">
                <NewsCard />
              </div>
              <div className="col-md-3 border">
                <NewsCard />
              </div>
              <div className="col-md-3 border">
                <NewsCard />
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 ">
          <div className="pb-3">
            <img
              src="https://via.placeholder.com/80x60"
              className="card-img-top"
              alt="..."
            />
          </div>

          <div>
            <NewsCardBody />
            <NewsCardBody />
            <NewsCardBody />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

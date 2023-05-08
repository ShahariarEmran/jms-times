import NewsCard from "../../ui/NewsCard";

const NewsSectionC = () => {
  return (
    <div>
      <div className="container-fluid d-grid gap-3">
        <div className="row g-4">
          <div className="col-md-10">
            <div className="row row-cols-md-4 g-4">
              <div>
                <NewsCard />
              </div>
              <div>
                <NewsCard />
              </div>
              <div>
                <NewsCard />
              </div>
              <div>
                <NewsCard />
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="row">
              <img
                src="https://via.placeholder.com/80x60?text=Square+Ads"
                className="img-fluid"
                alt="..."
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md my-4 my-md-0">
            <img
              src="https://via.placeholder.com/400x200?text=Right Image"
              className="img-fluid w-100 h-auto"
              alt="..."
            />
          </div>
          <div className="col-md ">
            <div className="row row-cols-md-2 g-4">
              <div>
                <img
                  src="https://via.placeholder.com/400x200?text=Image"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/400x200?text=Image"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/400x200?text=Image"
                  className="img-fluid"
                  alt="..."
                />
              </div>
              <div>
                <img
                  src="https://via.placeholder.com/400x200?text=Image"
                  className="img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSectionC;

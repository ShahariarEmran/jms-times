import NewsCard from "../../ui/NewsCard";

const NewsSectionA = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row g-4">
          <div className="col-md">
            <NewsCard />
          </div>
          <div className="col">
            <div className="row row-cols-md-2 g-4">
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
        </div>
      </div>
    </div>
  );
};

export default NewsSectionA;

import NewsCard from "../../ui/NewsCard";
import NewsCardBody from "../../ui/NewsCardBody";

const NewsSection = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
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
            <div>
              <NewsCardBody />
            </div>
            <div>
              <NewsCardBody />
            </div>
            <div>
              <NewsCardBody />
            </div>

            <div className="bg-success col-md-12">
              <img
                src="https://via.placeholder.com/100x100?text=Square+Ads"
                className="img-fluid w-100 "
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsSection;

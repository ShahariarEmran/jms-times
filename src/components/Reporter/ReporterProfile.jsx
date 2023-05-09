import { BsFacebook } from "react-icons/bs";
import ReporterNewsList from "./ReporterNewsList";

const ReporterProfile = () => {
  return (
    <div className="container ">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-md-6 bg-secondary">
            <div className="row p-4 g-4">
              <div className="col">
                <div>
                  <h3 className="bg-warning">42/ Jone Doe</h3>
                  <p className="bg-warning">16/ Staff Reporter</p>
                </div>
                <div className="d-flex gap-2">
                  <div>
                    <BsFacebook size={23} />
                  </div>
                  <div>
                    <BsFacebook size={23} />
                  </div>
                  <div>
                    <BsFacebook size={23} />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <img
                  src="https://via.placeholder.com/150x150?text=Image"
                  className="img-fluid w-100 "
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center ">
          <div className="col-md-5 row g-2">
            <div>
              <ReporterNewsList />
            </div>
            <div>
              <ReporterNewsList />
            </div>
            <div>
              <ReporterNewsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReporterProfile;

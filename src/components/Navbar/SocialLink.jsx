import { BsFacebook } from "react-icons/bs";

const SocialLink = () => {
  return (
    <section className="bg-secondary my-2">
      <div className="container d-flex justify-content-between p-2">
        <div>
          <span className="me-2">
            <BsFacebook size={23} />
          </span>
          <span className="me-2">
            <BsFacebook size={23} />
          </span>
          <span className="me-2">
            <BsFacebook size={23} />
          </span>
          <span className="me-2">
            <BsFacebook size={23} />
          </span>
        </div>

        <div>
          <span className="btn btn-sm btn-dark me-2">Demo Text</span>
          <span className="btn btn-sm btn-dark ">Demo Text</span>
        </div>
      </div>
    </section>
  );
};

export default SocialLink;

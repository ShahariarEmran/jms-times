import { BsFacebook } from "react-icons/bs";
import NewsCard from "../../ui/NewsCard";

const NewsArticle = () => {
  return (
    <>
      <div className="container d-grid gap-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h6 className="text-danger">16/ Dhaka</h6>
            <h2 className="text-center">
              কাউন্সিলর পদে নেতা–কর্মীদের প্রার্থিতা ঠেকাতে বিএনপির তৎপরতা
            </h2>
          </div>
        </div>

        <div className="container-fluid px-4 ">
          <div className="row row-cols-md-3 g-5 g-md-0">
            <div className="col-md-auto px-5">
              <div className="border p-3 d-grid gap-2">
                <div className="bg-light d-flex align-items-center gap-2">
                  <div className="col-auto">
                    <img
                      style={{ height: "80px", width: "80px" }}
                      src="https://randomuser.me/api/portraits/men/84.jpg"
                      className="rounded-circle shadow-4-strong w-"
                      alt="profile pic"
                    />
                  </div>
                  <div className="col">
                    <p className="fw-bold">Lorem ipsum dolo</p>
                    <p>Staff Reporter</p>
                  </div>
                </div>
                <h6 className="">২৯ সেপ্টেম্বর ২০১৮, ১২: ৩৩ </h6>
                <div className="d-flex justify-content-center">
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
              </div>
            </div>
            <div className="col-md-6">
              <div className="">
                <div>
                  <img
                    src="https://images.prothomalo.com/prothomalo-bangla%2F2023-05%2F6de0a1e4-f3b9-4c21-a958-18a8746ceb06%2F1_SYLHET_PHOTO_7_0105751SYL_9_JPG.JPG?auto=format%2Ccompress&fmt=webp&format=webp&w=640&dpr=1.0"
                    className="img-fluid w-100"
                    alt="Image"
                  />
                  <p>
                    মহান মে দিবস উপলক্ষে কর্মী-সমর্থকদের নিয়ে শোভাযাত্রা বের
                    করেন সিলেট সিটি মেয়র আরিফুল হক চৌধুরীফাইল ছবি
                  </p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, eum, impedit enim deleniti reiciendis ratione hic
                  veritatis eveniet animi est aut ea illum atque quam qui quod.
                  Adipisci, aperiam quisquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, eum, impedit enim deleniti reiciendis ratione hic
                  veritatis eveniet animi est aut ea illum atque quam qui quod.
                  Adipisci, aperiam quisquam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Fugiat, eum, impedit enim deleniti reiciendis ratione hic
                  veritatis eveniet animi est aut ea illum atque quam qui quod.
                  Adipisci, aperiam quisquam.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section>
          <h5 className="text-danger">16/ Higher Education</h5>
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
          </div>
        </section>
      </div>
    </>
  );
};

export default NewsArticle;

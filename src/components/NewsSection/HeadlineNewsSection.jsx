const HeadlineNewsSection = () => {
  return (
    <div className="container-fluid px-3">
      <div className="row p-3 bg-success">
        <div className="col row px-0">
          <h6>১৬/ জাতীয়</h6>
          <h1 className="text-center fs-2">৩২/ টাইটেল</h1>
          <p>বিস্তারিত</p>
        </div>
        <div className="col">
          <img
            src="https://via.placeholder.com/100x60?text=Image"
            className="img-fluid w-100 "
            alt="..."
          />
          <p className="text-end">১৪/ ইমেজ টাইটেল</p>
        </div>
      </div>
    </div>
  );
};

export default HeadlineNewsSection;

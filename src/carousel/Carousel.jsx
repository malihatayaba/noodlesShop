const Carousel = () => {
  return (
    <div className="m-10 p-10">
      <h1 className="m-5 p-7 text-yellow-500 font-bold text-6xl text-center">
        Every Noodles-tastes different
      </h1>
      <div className="carousel rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/style-still-life-with-noodles-bowl_1150-19764.jpg?t=st=1710981335~exp=1710984935~hmac=ac9f408fc150bae556356cedc4ebc34bd1ca33ff5d7f678bef20ba07efd9a34f&w=360"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/high-angle-delicious-ramen-bowl_23-2148678758.jpg?t=st=1710981411~exp=1710985011~hmac=8a9eb4b4d390d5ef87fb208b849f11329d8387364d2836ed6c1fd3d0efd7e8c4&w=360"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/high-angle-tasty-composition-noodles-table_23-2148803860.jpg?t=st=1710981552~exp=1710985152~hmac=cb642fa8ab54f25a3807febfdfd115ce6b390b6bd634ea6dd237e36b9d96f9e2&w=360"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/rice-noodles-with-chicken-vegetables_23-2148195630.jpg?t=st=1710981627~exp=1710985227~hmac=7aad19b6cfe386eee06a8f9a896a1a8984fb3753a5901fa72e12c4d7635e5743&w=360"
            alt="Burger"
          />
        </div>
        
      </div>
    </div>
  );
};

export default Carousel;

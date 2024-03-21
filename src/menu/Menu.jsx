import menu1 from "../assets/images/noodles.jpg";

const Menu = () => {
  return (
    <div>
        <h1 className="m-10 p-20 text-yellow-500 font-bold text-6xl text-center">Discover Our Menu</h1>
      <div className="grid grid-cols-3 ">
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure className="">
            <img src={menu1} alt="noodles" className="rounded-full " />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure>
            <img src={menu1} alt="noodles" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure>
            <img src={menu1} alt="noodles" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure>
            <img src={menu1} alt="noodles" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure>
            <img src={menu1} alt="noodles" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl m-6">
          <figure>
            <img src={menu1} alt="noodles" className="rounded-full" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sesame Noodles!</h2>
            <p>Price:5$</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

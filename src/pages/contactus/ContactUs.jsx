const ContactUs = () => {
  return (
    <div className="m-10 p-10">
      <div className="flex flex-row gap-5">
        <div className="card w-96 bg-black shadow-xl ">
          <div className="card-body p-20">
            <h2 className="card-title text-yellow-500 text-3xl ">Call Us</h2>
            <p className="text-yellow-500 text-xl ">I01723450990</p>
          </div>
        </div>
        <div className="card w-96 bg-black shadow-xl">
          <div className="card-body p-20">
            <h2 className="card-title text-yellow-500 text-3xl ">E-mail Us</h2>
            <p className="text-yellow-500 text-2xl ">info@nshop.com
            </p>
          </div>
        </div>
        <div className="card w-96 bg-black shadow-xl">
          <div className="card-body p-20">
            <h2 className="card-title text-yellow-500 text-3xl ">Bussiness Hour</h2>
            <p className="text-yellow-500 text-xl ">MON-SAT: 10AM to 10PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

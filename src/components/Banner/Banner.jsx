import bannerImage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[554px]">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src={bannerImage}
              className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
             
              <button className="btn btn-primary mt-12">View The List</button>
            </div>
          </div>
        </div>
    );
};

export default Banner;
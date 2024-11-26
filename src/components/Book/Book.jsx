import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 w-80 shadow-xl p-6 border-[1px] h-full">
              <figure className=" py-8 bg-blue-200 rounded-2xl">
                <img
                  src={image}
                  className="h-[166px]"
                  alt={bookName} />
              </figure>
              <div className="card-body">
                <div className="flex justify-center gap-4 ">
                    {
                        tags.map(tag => <button className="btn btn-xs text-red-500">{tag}</button>)
                    }
                </div>
                <h2 className="card-title">
    
                  {bookName}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <div className="border-t-[1px] border-dashed "></div>
                <p>{author}</p>
                <div className="card-actions justify-between">
                  <div className="badge badge-outline">{category}</div>
                  <div className="rating">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input
                      type="radio"
                      name="rating-2"
                      className="mask mask-star-2 bg-orange-400"
                      defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-200" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-100" />
                    </div>
                </div>
              </div>
            </div>
        </Link>
    );
};

export default Book;
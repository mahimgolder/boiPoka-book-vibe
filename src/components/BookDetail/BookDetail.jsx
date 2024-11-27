import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const BookDetail = () => {

    const {bookId} = useParams();
    const data = useLoaderData();
    const findData = data.find(obj => obj.bookId === parseInt(bookId));
    console.log(findData)
    const {bookId: currentBookId, bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = findData;

    console.log(bookId);
    return (
        <div>
            <h2>BookdDetails.jsx : {bookId}</h2>
            <div className="flex my-12">
                {/* <div className="inline p-16 border-2"> */}
                <span className="border-2 rounded-2xl p-14">
                    <img className=" w-[425px] h-[564px] border-2" src={image} alt={bookName} />
                </span>
                {/* </div> */}

                
                <div className="border-2 ml-12 flex flex-col justify-between">
                    <div>
                        <h3 className="font-bold text-4xl mb-4">{bookName}</h3>
                        <span className="border-2">By : {author}</span>
                    </div>
                    <div className="border-t-[1px] mb-4"></div>
                    <span>{category}</span>
                    <div className="border-t-[1px] mt-4"></div>
                    <p className="max-w-xl font-normal text-base  my-6">
                        <span className="font-bold text-base">Review :</span>
                        {review}
                    </p>
                    <span  className="border-2 ">
                        <span className="mr-3 font-bold text-base">Tags:</span>
                        <span className="mr-4 font-medium text-base text-orange-600">#{tags[0]}</span>
                        <span className="font-medium text-base text-orange-600 font-serif">#{tags[1]}</span>
                    </span>
                    <div className="border-t-[1px] my-6"></div>
                    <div className="flex gap-14">
                        <div className="flex flex-col gap-3">
                            <p>Number of Pages:</p>
                            <p>Publisher:</p>
                            <p>Year of Publishing:</p>
                            <p>Rating:</p>
                        </div>
                        <div className="flex flex-col gap-3 font-semibold text-base mb-8">
                            <p>{totalPages}</p>
                            <p>{publisher}</p>
                            <p>{yearOfPublishing}</p>
                            <p>{rating}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <button className="btn btn-outline btn-accent">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default BookDetail;
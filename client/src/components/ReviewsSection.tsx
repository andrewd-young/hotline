import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as fullStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { hotliners } from '../data/sampleData';

const ReviewsSection = () => {
  const [selectedHotliner] = useState(hotliners[0]);
  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newReview && newRating > 0 && newRating <= 5) {
      setNewReview('');
      setNewRating(0);
    }
  };

  return (
    <section className="mt-12">
      <h3 className="text-3xl font-semibold mb-4">Your Reviews</h3>
      <p className="text-gray-700 mb-4">After each appointment, share your thoughts and earn loyalty points!</p>

      <div className="space-y-4">
        {selectedHotliner.reviews?.map((review) => (
          <div
            key={review.id}
            className="p-4 border bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FontAwesomeIcon
                  key={i}
                  icon={i < review.rating ? fullStar : emptyStar}
                  className="text-yellow-400 mr-1"
                />
              ))}
            </div>
            <p className="text-gray-800">{review.text}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-4">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Leave a review..."
          className="border border-gray-300 p-3 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <div className="flex items-center space-x-4">
          <label className="text-gray-700 font-medium">Rating:</label>
          {[1, 2, 3, 4, 5].map((value) => (
            <button
              type="button"
              key={value}
              onClick={() => setNewRating(value)}
              className={`text-xl ${
                value <= newRating ? 'text-yellow-400' : 'text-gray-300'
              } hover:text-yellow-500`}
            >
              <FontAwesomeIcon icon={fullStar} />
            </button>
          ))}
        </div>
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-black text-white hover:bg-gray-800"
        >
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default ReviewsSection;
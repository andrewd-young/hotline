import { useState } from 'react';

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    { id: 1, text: 'Great service!', rating: 5 },
    { id: 2, text: 'Very satisfied with my haircut.', rating: 4 },
  ]);

  const [newReview, setNewReview] = useState('');
  const [newRating, setNewRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview && newRating) {
      setReviews([...reviews, { id: reviews.length + 1, text: newReview, rating: newRating }]);
      setNewReview('');
      setNewRating(0);
    }
  };

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Your Reviews</h3>
      <p className="text-gray-700 mb-2">After each appointment:</p>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        {reviews.map(review => (
          <li key={review.id}>
            {review.text} - {review.rating} stars
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
          placeholder="Leave a review..."
          className="border p-2 w-full"
        />
        <input
          type="number"
          value={newRating}
          onChange={(e) => setNewRating(Number(e.target.value))}
          placeholder="Rate 1-5"
          className="border p-2 w-full mt-2"
          min="1"
          max="5"
        />
        <button type="submit" className="mt-2 px-6 py-2 bg-gray-900 text-white hover:bg-gray-700">
          Submit Review
        </button>
      </form>
    </section>
  );
};

export default ReviewsSection;  
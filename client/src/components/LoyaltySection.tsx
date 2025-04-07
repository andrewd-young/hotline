import { useState } from 'react';

const LoyaltySection = () => {
  const [points, setPoints] = useState(150); // Example points

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-4">Customer Loyalty Profile</h3>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Every booking = Points</li>
        <li>Leaving a review = Bonus points</li>
        <li>Points = Discounts for salons & services</li>
      </ul>
      <p className="mt-4">You currently have {points} loyalty points.</p>
      <button className="mt-2 px-4 py-2 bg-green-500 text-white rounded cursor-pointer">
        Redeem Points
      </button>
    </section>
  );
};

export default LoyaltySection;
  
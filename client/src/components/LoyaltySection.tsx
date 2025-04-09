import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const LoyaltySection = () => {
  const [points, setPoints] = useState(150); // Example current points
  const rewardThreshold = 200;

  const getTier = (pts: number) => {
    if (pts >= 300) return 'Gold';
    if (pts >= 200) return 'Silver';
    return 'Bronze';
  };

  const tier = getTier(points);
  const progress = Math.min((points / rewardThreshold) * 100, 100);

  return (
    <section className="mt-12 p-6 bg-gray-100 shadow-md max-w-xl mx-auto">
      <h3 className="text-3xl font-bold mb-2 text-black">Loyalty Program</h3>
      <p className="text-gray-600 mb-6">Earn rewards every time you book or leave a review.</p>

      {/* Points + Tier */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-xl font-semibold text-black">{points} Points</p>
          <p className="text-sm text-gray-500">Current Tier: <span className="font-semibold">{tier}</span></p>
        </div>
        <div className={`px-3 py-1 text-white text-sm font-medium ${
          tier === 'Gold' ? 'bg-yellow-500' : tier === 'Silver' ? 'bg-gray-500' : 'bg-orange-400'
        }`}>
          {tier}
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Next reward at {rewardThreshold} points</span>
          <span>{Math.max(rewardThreshold - points, 0)} to go</span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-green-500 transition-all"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Ways to earn */}
      <div className="mb-6 mt-6">
        <h4 className="text-lg font-semibold mb-2">Ways to Earn</h4>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
            Booking an appointment = <span className="font-medium text-black">+25 points</span>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
            Leaving a review = <span className="font-medium text-black">+15 bonus points</span>
          </li>
          <li className="flex items-center gap-2">
            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" />
            Referring a friend = <span className="font-medium text-black">+50 points</span>
          </li>
        </ul>
      </div>

      {/* Redeem */}
      <div className="text-center">
        <button
          className={`mt-2 px-6 py-3 w-full text-white font-semibold transition ${
            points >= rewardThreshold
              ? 'bg-purple-600 hover:bg-purple-700'
              : 'bg-gray-300 cursor-not-allowed'
          }`}
          disabled={points < rewardThreshold}
        >
          <FontAwesomeIcon icon={faGift} className="mr-2" />
          Redeem {rewardThreshold} Points
        </button>
        {points < rewardThreshold && (
          <p className="text-sm text-gray-500 mt-2">
            Earn more points to unlock your next reward!
          </p>
        )}
      </div>
    </section>
  );
};

export default LoyaltySection;

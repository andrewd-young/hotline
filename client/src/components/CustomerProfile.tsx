import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { hotliners } from '../data/sampleData';
import BookingsSection from './BookingsSection';
import LoyaltySection from './LoyaltySection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faStar, faLocationDot, faUserFriends } from '@fortawesome/free-solid-svg-icons';

const CustomerProfile = () => {
  const { id } = useParams();
  const profileData = hotliners.find(h => h.id === id);
  const [showFriendsModal, setShowFriendsModal] = useState(false);
  const [showFollowersModal, setShowFollowersModal] = useState(false);
  const [showFollowingModal, setShowFollowingModal] = useState(false);

  // Sample friends data - in a real app this would come from an API
  const friends = [
    { id: '1', name: 'Sarah Johnson', imageUrl: '/images/sarah.jpg', recentService: 'Nail Art', location: 'Downtown Nails', rating: 4.8 },
    { id: '2', name: 'Mike Chen', imageUrl: '/images/mike.jpg', recentService: 'Haircut', location: 'Style Studio', rating: 4.5 },
    { id: '3', name: 'Emma Davis', imageUrl: '/images/emma.jpg', recentService: 'Makeup', location: 'Glamour Beauty', rating: 4.9 },
  ];


  if (!profileData) {
    return <div className="text-center py-12">Profile not found</div>;
  }

  // Helper for avatar initial
  const getInitial = (name: string) => name ? name[0].toUpperCase() : '?';

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Top Profile Section (Depop style, wider) */}
      <div className="flex items-center gap-6 mb-6">
        {profileData.imageUrl ? (
          <img
            src={profileData.imageUrl}
            alt={profileData.name}
            className="w-24 h-24 object-cover rounded-full bg-gray-300"
          />
        ) : (
          <div className="w-24 h-24 rounded-full bg-gray-500 flex items-center justify-center text-white text-4xl font-bold">
            {getInitial(profileData.name)}
          </div>
        )}
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold">{profileData.name.replace(/\s/g, '_').toLowerCase()}</span>
          </div>
          <div className="flex items-center gap-1 mt-1 text-gray-700">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className="text-gray-400" />
            ))}
            <span className="ml-1 text-gray-500 text-sm">(0)</span>
          </div>
          <div className="text-gray-500 text-sm mt-1">Active today</div>
          <div className="flex gap-8 mt-4">
            <button
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm focus:outline-none cursor-pointer"
              onClick={() => setShowFriendsModal(true)}
            >
              <FontAwesomeIcon icon={faUserFriends} /> Friends
            </button>
          </div>
        </div>
      </div>

      {/* Bookings and Loyalty always visible below */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <BookingsSection />
        </div>
        <div className="space-y-12">
          <LoyaltySection />
        </div>
      </div>

      {/* Friends Modal */}
      {showFriendsModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowFriendsModal(false)}
            >
              &times;
            </button>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FontAwesomeIcon icon={faUserFriends} /> Friends
              </h2>
              <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm cursor-pointer">
                <FontAwesomeIcon icon={faUserPlus} /> Add Friends
              </button>
            </div>
            {/* Friend Requests Placeholder */}
            <div className="mb-4">
              <span className="font-medium">Friend Requests</span>
              <div className="text-gray-500 text-sm">(No new requests)</div>
            </div>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {friends.map(friend => (
                <div key={friend.id} className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <img
                    src={friend.imageUrl}
                    alt={friend.name}
                    className="w-10 h-10 object-cover rounded-full mr-3"
                  />
                  <div className="flex-1">
                    <h3 className="font-medium text-sm">{friend.name}</h3>
                    <div className="flex items-center gap-2 text-xs text-gray-600">
                      <span>{friend.recentService}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
                        {friend.location}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500 text-xs">
                    <FontAwesomeIcon icon={faStar} />
                    <span>{friend.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Followers Modal */}
      {showFollowersModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl cursor-pointer"
              onClick={() => setShowFollowersModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Followers</h2>
            <div className="text-gray-500">(Followers list placeholder)</div>
          </div>
        </div>
      )}

      {/* Following Modal */}
      {showFollowingModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
              onClick={() => setShowFollowingModal(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">Following</h2>
            <div className="text-gray-500">(Following list placeholder)</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerProfile; 
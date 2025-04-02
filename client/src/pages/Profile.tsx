import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { hotliners } from '../data/sampleData';

const Profile = () => {
  const { id } = useParams();
  
  const profileData = hotliners.find(h => h.id === id);
  
  if (!profileData) {
    return <div className="text-center py-12">Profile not found</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Section 1: Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div>
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            src={profileData.imageUrl}
            alt={profileData.name}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-light mb-2">{profileData.name}</h1>
          <h2 className="text-2xl text-gray-600 mb-4">{profileData.title}</h2>
          <div className="flex items-center gap-2 mb-4">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
            <span className="text-gray-600">{profileData.location}</span>
            <span className="text-sm text-gray-400">({profileData.distance})</span>
          </div>
          <div className="flex items-center gap-2 mb-6">
            <FontAwesomeIcon icon={farStar} className="text-yellow-400" />
            <span className="text-xl">{profileData.rating}</span>
          </div>
          <button className="w-full md:w-auto px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors cursor-pointer">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 
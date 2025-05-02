import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import ReviewsSection from './ReviewsSection';
import ServicesOffered from './ServicesOffered';
import { useParams } from 'react-router-dom';
import { hotliners } from '../data/sampleData';
import { useEffect } from 'react';

const SellerProfile = () => {
  const { id } = useParams();
  const profileData = hotliners.find(h => h.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!profileData) {
    return <div className="text-center py-12">Profile not found</div>;
  }

  // Combine all images into one array
  const allImages = [
    ...(profileData.workImages || []),
    ...(profileData.services?.flatMap(service => service.images || []) || [])
  ];

  const services = profileData.services || [];

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Header Section */}
      <div className="mb-16">
        <h1 className="text-8xl font-bold mb-6">{profileData.name}</h1>
        <div className="text-gray-600 space-y-2">
          <h2 className="text-xl">{profileData.title}</h2>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
            <span>{profileData.location}</span>
            <span className="text-sm">({profileData.distance})</span>
          </div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={farStar} className="text-yellow-400" />
            <span>{profileData.rating}</span>
          </div>
        </div>
      </div>

      {/* Work Showcase Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Work</h2>
        <div className="relative w-full overflow-x-auto">
          <div className="flex gap-4 pb-4 min-w-full">
            {allImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.2 }}
                className="flex-none w-[300px]"
              >
                <img
                  src={image}
                  alt={`${profileData.name}'s work ${index + 1}`}
                  className="w-full h-[300px] object-cover shadow-md hover:shadow-xl transition-shadow"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">About Me</h2>
        <div className="bg-gray-50 p-6">
          <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
        </div>
      </div>

      {/* Services and Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Services</h2>
          <ServicesOffered services={services} />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-6">Location</h2>
          {/* Placeholder Map */}
          <div className="w-full h-[400px] bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <FontAwesomeIcon icon={faLocationDot} className="text-gray-400 text-4xl mb-2" />
              <p className="text-gray-500">Located near {profileData.location}</p>
              <p className="text-gray-400 text-sm">{profileData.distance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-16">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default SellerProfile;
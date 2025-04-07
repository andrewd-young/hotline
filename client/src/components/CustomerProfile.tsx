import { useParams } from 'react-router-dom';
import { hotliners } from '../data/sampleData';
import BookingsSection from './BookingsSection';
import LoyaltySection from './LoyaltySection';

const CustomerProfile = () => {
  const { id } = useParams();
  const profileData = hotliners.find(h => h.id === id);

  if (!profileData) {
    return <div className="text-center py-12">Profile not found</div>;
  }

  return (
    <div className="max-w-[1400px] mx-auto px-8 py-12">
      {/* Profile Information Section */}
      <div className="flex items-center mb-12">
        <img 
          src={profileData.imageUrl} 
          alt={profileData.name} 
          className="w-32 h-32 rounded-full object-cover mr-6"
        />
        <div>
          <h1 className="text-3xl font-semibold">{profileData.name}</h1>
          <p className="text-gray-600">{profileData.email}</p>
          <p className="text-gray-600">{profileData.location}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-12">
          <BookingsSection />
        </div>
        <div className="space-y-12">
          <LoyaltySection />
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile; 
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faClipboardList, faCalendarPlus } from '@fortawesome/free-solid-svg-icons';
import { Service } from '../data/sampleData';

interface ServicesOfferedProps {
  services: Service[];
}

const ServicesOffered: React.FC<ServicesOfferedProps> = ({ services }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });

  const toggleDropdown = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  const openBookingModal = (service: Service) => {
    setSelectedService(service);
    setBookingConfirmed(false);
    setFormData({ name: '', date: '', time: '' });
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
  };

  return (
    <div className="mb-12">
      <div className="space-y-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 p-6 bg-white shadow-md transition hover:shadow-lg"
          >
            <button
              className="flex items-center justify-between w-full text-left"
              onClick={() => toggleDropdown(index)}
            >
              <div className="flex items-center space-x-3 text-xl font-semibold">
                <FontAwesomeIcon icon={faClipboardList} className="text-gray-500" />
                <span>{service.name}</span>
                <span className="text-base text-gray-500 font-normal">(${service.price})</span>
              </div>
              <FontAwesomeIcon
                icon={openIndex === index ? faChevronUp : faChevronDown}
                className="text-gray-500"
              />
            </button>

            {openIndex === index && (
              <div className="mt-4 text-gray-700">
                <p className="mb-4">{service.description || 'No description yet.'}</p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                  {(service.images || []).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${service.name} example ${i + 1}`}
                      className="object-cover h-32 w-full shadow-sm"
                    />
                  ))}
                </div>
                <button
                  onClick={() => openBookingModal(service)}
                  className="mt-2 px-4 py-2 bg-black text-white text-sm font-medium hover:bg-gray-800"
                >
                  <FontAwesomeIcon icon={faCalendarPlus} className="mr-2" />
                  Book This Service
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 w-full max-w-md shadow-lg">
            {!bookingConfirmed ? (
              <>
                <h4 className="text-xl font-semibold mb-4">
                  Book: {selectedService.name}
                </h4>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full border rounded-lg px-3 py-2"
                    required
                  />
                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="px-4 py-2 text-gray-600 hover:text-black"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center">
                <p className="text-lg font-medium mb-2">🎉 Booking Confirmed!</p>
                <p className="text-sm text-gray-500">We'll send a confirmation email.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesOffered;

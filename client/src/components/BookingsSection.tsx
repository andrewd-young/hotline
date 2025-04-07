import { useState } from 'react';

const BookingsSection = () => {
  const [upcomingBookings] = useState([
    { id: 1, service: 'Haircut', date: '2023-10-15', time: '10:00 AM' },
    { id: 2, service: 'Nail Appointment', date: '2023-10-20', time: '2:00 PM' },
  ]);

  const [pastAppointments] = useState([
    { id: 1, service: 'Facial', date: '2023-09-10' },
    { id: 2, service: 'Massage', date: '2023-09-15' },
  ]);

  return (
    <section>
      <h3 className="text-2xl font-semibold mb-6">Bookings</h3>

      {/* Upcoming Bookings */}
      <h4 className="text-xl font-semibold mb-3">Upcoming Bookings</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        {upcomingBookings.map(booking => (
          <div
            key={booking.id}
            className="p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition"
          >
            <h5 className="text-lg font-medium">{booking.service}</h5>
            <p className="text-gray-600 mt-1">{booking.date}</p>
            <p className="text-gray-500">{booking.time}</p>
            <button className="mt-4 px-4 py-1 text-sm bg-black text-white rounded hover:bg-gray-800 cursor-pointer">
              Reschedule
            </button>
          </div>
        ))}
      </div>

      {/* Past Appointments */}
      <h4 className="text-xl font-semibold mb-3">Past Appointments</h4>
      <div className="space-y-4 border-l-2 border-gray-200 pl-6 bg-gray-50 p-4 rounded-lg">
        {pastAppointments.map(appointment => (
          <div key={appointment.id} className="relative p-2 bg-white rounded-lg shadow-sm">
            <div>
              <p className="text-gray-800 font-medium">{appointment.service}</p>
              <p className="text-sm text-gray-500">{appointment.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookingsSection;

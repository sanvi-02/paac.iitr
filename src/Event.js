import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Event.css";

const events = [
  {
    title: "Cosmic Voyage",
    date: "March 2025", // Change to future date (upcoming)
    description:
      "PaAC is back with Cosmic Voyage, our annual cosmic fiesta. With lectures from esteemed professors, open discussions, and exciting quizzes!",
    image: "voyage.jpg",
    upcoming: true,
  },
  {
    title: "Galactic Exploration",
    date: "August 2023",
    description:
      "Join us for an immersive space journey with expert talks, hands-on telescope sessions, and thrilling space quizzes!",
    image: "/assets/image2.jpg",
    upcoming: true,
  },
  {
    title: "Star Gazing Night",
    date: "December 2023",
    description:
      "Experience a night under the stars with guided celestial observations and interactive discussions about constellations.",
    image: "star.jpg",
    upcoming: false,
  },
  {
    title: "Astrophotog workshops",
    date: "March 2025", // Change to future date (upcoming)
    description:"An artistic approach to photographing the night sky. You’ll get to learn how to capture fancy images like these and process them, here!",
    image: "event3.jpg",
    upcoming: false,
  },
  {
    title: "Integration Bee",
    date: "October 2023", // Change to future date (upcoming)
    description:
      "PaAC brings you IITR’s own Integration Bee this year! Deriving inspiration from MIT’s Integration Bee, the tournament will be conducted by integrating the same spirit with our fun and quirky elements.",
    upcoming: false,
    image:"bee1.jpg",
  },
    {
    title: "Guest Lectures",
    date: "March 21, 2023", // Change to future date (upcoming)
    description:
      "These lectures cover a wide range of topics and aim to inspire and educate students. They offer an opportunity to learn from experienced professionals and gain a deeper understanding of various subjects.",
    upcoming: false,
    image:"guestlecture.jpg",
  },
    {
    title: "Journal Club",
    date: "September 6, 2023", // Change to future date (upcoming)
    description:
     "Journal Club is a platform for students to discuss and analyze recent scientific papers in the field of physics. It provides an opportunity to delve deeper into various research topics and gain insights from peers.",
    upcoming: false,
    image:"event2.jpg",
  },
  {
    title: "Student Lectures",
    date: "October 2023", // Change to future date (upcoming)
    description:
     "These lectures are conducted by students intended for fellow students. The topics are fundamental that are commonly challenging or difficult to understand.",
    upcoming: false,
    image:"lecture.jpg",
  },
];

const EventsSection = () => {
  const upcomingEvents = events.filter((event) => event.upcoming);
  const pastEvents = events.filter((event) => !event.upcoming);

  return (
    <div class="stars">
    <div className="events-section">
      {/* Title for upcoming events */}
      <h1 className="section-title">🚀 Upcoming Events</h1>

      {/* Swiper for upcoming events */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="event-slider"
      >
        {upcomingEvents.map((event, index) => (
          <SwiperSlide key={index}>
            <div className="event-card1">
              <img src={event.image} alt={event.title} className="event-image1" />
              <h2 className="event-title1">{event.title}</h2>
              <p className="event-date1">📅 {event.date}</p>
              <p className="event-description1">{event.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Title for past events */}
      <h1 className="section-title">⭐ Past Events</h1>

      {/* Display past events without slider */}
      <div className="past-events">
        {pastEvents.map((event, index) => (
          <div className="event-card past-event-card" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h2 className="event-title">{event.title}</h2>
            <p className="event-date">📅 {event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default EventsSection;

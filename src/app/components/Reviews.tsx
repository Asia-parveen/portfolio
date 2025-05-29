'use client';

import React, { useState } from 'react';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

const reviews = [
  {
    name: 'Sophia Khan',
    comment: 'Asia turned our vision into a fully functional, beautiful product. Highly professional!',
    image: '/images/clnt4.jpg',
    rating: 5,
  },
  {
    name: 'Shazia Khan',
    comment: 'The integration of AI and smooth UI blew us away. Will definitely work again!',
    image: '/images/clnt1.jpg',
    rating: 4,
  },
  {
    name: 'Amelia Clark',
    comment: 'Great attention to detail, excellent communication, and an amazing final result!',
    image: '/images/clnt2.jpg',
    rating: 5,
  },
  {
    name: 'David Rao',
    comment: 'Asia brought a perfect blend of creativity and functionality to our app.',
    image: '/images/clnt3.jpg',
    rating: 4,
  },
];

// Autoplay plugin without pause on hover
const Autoplay: KeenSliderPlugin = (slider) => {
  let timeout: ReturnType<typeof setTimeout>;

  // function clearNextTimeout() {
  //   clearTimeout(timeout);
  // }

  function nextTimeout() {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      slider.next();
    }, 4000);
  }

  slider.on('created', () => {
    nextTimeout();
  });

  slider.on('slideChanged', () => {
    nextTimeout();
  });

  slider.on('destroyed', () => {
    clearTimeout(timeout);
  });
};

const Reviews = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      slides: { perView: 1 },
      slideChanged(sliderInstance: KeenSliderInstance) {
        setCurrentSlide(sliderInstance.track.details.rel);
      },
    },
    [Autoplay]
  );

  return (
    <section
      id="reviews"
      className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-4">
          What <span className="text-cyan-400">Clients Say</span>
        </h2>
        <p className="text-center text-slate-400 max-w-2xl mx-auto mb-12">
          Honest words from people I’ve had the pleasure of working with.
        </p>

        <div ref={sliderRef} className="keen-slider">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="keen-slider__slide flex flex-col items-center px-6"

              
            >
              {/* Client Image */}
              <Image
  src={review.image}
  alt={`${review.name} photo`}
  width={128} // width in pixels
  height={128} // height in pixels
  className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-cyan-400"
/>

              {/* <Image
                src={review.image}
                alt={`${review.name} photo`}
                width={100}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-cyan-400"
              /> */}

              {/* Star Ratings */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <svg
                    key={idx}
                    className={`w-5 h-5 ${
                      idx < review.rating ? 'text-yellow-400' : 'text-gray-500'
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.946a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.36 2.444a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.538 1.118l-3.36-2.444a1 1 0 00-1.175 0l-3.36 2.444c-.783.57-1.838-.197-1.538-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.026 9.373c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.946z" />
                  </svg>
                ))}
              </div>

              {/* Review Comment */}
              <p className="text-md md:text-xl  text-cyan-300 leading-relaxed max-w-3xl text-center transition-opacity duration-700">
                “{review.comment}”
              </p>
              <p className="mt-6 text-md font-medium text-white tracking-wide">
                — {review.name}
              </p>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-10 gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => slider?.current?.moveToIdx(idx)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                currentSlide === idx ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;















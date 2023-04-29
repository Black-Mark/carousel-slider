import { useState } from "react";

function ImageCarousel({images}) {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  return (
    <div className="relative w-96 h-64 overflow-hidden mb-4">
      {images.map((image, index) => (
        <div
          key={image.id}
          className={`absolute w-full h-full transition-transform ${
            index === currentImage ? "" : "-translate-x-full"
          }`}
        >
          <img
            className="object-cover w-full h-full"
            src={image.src}
            alt={image.alt}
          />
        </div>
      ))}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center">
        <div className="flex items-center">
          <div className="flex">
            {images.map((image, index) => (
              <button
                key={image.id}
                className={`mx-1 w-4 h-4 rounded-full bg-gray-600 ${
                  index === currentImage ? "bg-white" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 px-2 py-1 bg-gray-800 rounded-l">
        <button
          className="w-8 h-8 text-white"
          onClick={handlePrev}
        >
          {"<"}
        </button>
      </div>
      <div className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 px-2 py-1 bg-gray-800 rounded-r">
        <button
          className="w-8 h-8 text-white"
          onClick={handleNext}
        >
          {">"}
        </button>
      </div>
    </div>
  );
}

export default ImageCarousel;
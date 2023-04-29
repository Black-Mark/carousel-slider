import './App.css'
import React from "react";
import Carousel from "./Carousel";

function App(){
  const images = [
    {
      id: 1,
      src:
        "https://dummyimage.com/600x400/1abc9c/ffffff&text=Image+1",
      alt: "Image 1",
    },
    {
      id: 2,
      src:
        "https://dummyimage.com/600x400/3498db/ffffff&text=Image+2",
      alt: "Image 2",
    },
    {
      id: 3,
      src:
        "https://dummyimage.com/600x400/9b59b6/ffffff&text=Image+3",
      alt: "Image 3",
    },
    {
      id: 4,
      src:
        "https://dummyimage.com/600x400/e74c3c/ffffff&text=Image+4",
      alt: "Image 4",
    },
    {
      id: 5,
      src:
        "https://dummyimage.com/600x400/f1c40f/ffffff&text=Image+5",
      alt: "Image 5",
    },
    {
      id: 6,
      src:
        "https://dummyimage.com/600x400/2c3e50/ffffff&text=Image+6",
      alt: "Image 6",
    },
    {
      id: 6,
      src:
        "https://dummyimage.com/600x400/2c3e50/ffffff&text=Image+7",
      alt: "Image 6",
    }
  ];
  return (
    <div>
      <Carousel images={images} />
    </div>
  );
}

export default App;
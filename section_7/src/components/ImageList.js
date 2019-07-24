import React from 'react';
import './ImageList.css';
import ImageCard from './ImageCard';

const ImageList = props => {
  const images = props.images.map((img, i) => (
    <ImageCard key={img.id} img={img} />
  ));

  return <div className="image-list">{images}</div>;
};
export default ImageList;

import { useState } from 'react';

interface Props {
  webformatURL: string;
  largeImageURL: string;
  tags: string;
  onClick: () => void;
  updateData: (imageUrl: string) => void;
}

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  tags,
  onClick,
  updateData,
}: Props) {
  const [largeImage, setLargeImage] = useState(largeImageURL);

  return (
    <li
      className="ImageGalleryItem"
      onClick={() => {
        onClick();
        updateData(largeImage);
      }}
    >
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
}

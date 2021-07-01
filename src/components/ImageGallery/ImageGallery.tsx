import ImageGalleryItem from '../ImageGalleryItem';
import IImage from '../../interfaces/App.interfaces';

interface Props {
  images: IImage[];
  onClick: () => void;
  updateData: (data: string) => void;
}

export default function ImageGallery({ images, onClick, updateData }: Props) {
  return (
    <ul className="ImageGallery">
      {images.map(({ webformatURL, tags, id, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          onClick={onClick}
          updateData={updateData}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

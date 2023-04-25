import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItemBox } from 'components';

export function ImageGallery({ imageList }) {
  return (
    <ImageGalleryList>
      {imageList.map(galleryItem => (
        <ImageGalleryItemBox
          key={galleryItem.id}
          imageListUrl={galleryItem.webformatURL}
          imageModal={galleryItem.largeImageURL}
          isAnchor={galleryItem.isAnchor}
        />
      ))}
    </ImageGalleryList>
  );
}

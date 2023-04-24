import { Component } from 'react';
import { ImageGalleryItem, ImageGalleryImage } from './ImageGalleryItem.styled';
import { Modal } from 'components';

export class ImageGalleryItemBox extends Component {
  state = {
    showModal: false,
  };

  togleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { togleModal } = this;
    const { imageListUrl, imageModal } = this.props;
    return (
      <>
        <ImageGalleryItem onClick={togleModal}>
          <ImageGalleryImage src={imageListUrl} alt="" />
        </ImageGalleryItem>
        {this.state.showModal && (
          <Modal onClose={togleModal} largeImage={imageModal} />
        )}
      </>
    );
  }
}

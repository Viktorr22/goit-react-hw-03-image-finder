import { Component, createRef } from 'react';
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

  liRef = createRef();

  componentDidMount() {
    if (!this.liRef.current) return;
    const elementPosition = this.liRef.current.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - 100;
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }

  render() {
    const { imageListUrl, isAnchor, imageModal } = this.props;
    return (
      <>
        <ImageGalleryItem
          ref={isAnchor ? this.liRef : null}
          onClick={this.togleModal}
        >
          <ImageGalleryImage src={imageListUrl} alt="" />
        </ImageGalleryItem>
        {this.state.showModal && (
          <Modal onClose={this.togleModal} largeImage={imageModal} />
        )}
      </>
    );
  }
}

// export class ImageGalleryItemBox extends Component {
//   state = {
//     showModal: false,
//   };

//   togleModal = () => {
//     this.setState(({ showModal }) => ({
//       showModal: !showModal,
//     }));
//   };

//   render() {
//     const { togleModal } = this;
//     const { imageListUrl, imageModal } = this.props;
//     return (
//       <>
//         <ImageGalleryItem onClick={togleModal}>
//           <ImageGalleryImage src={imageListUrl} alt="" />
//         </ImageGalleryItem>
//         {this.state.showModal && (
//           <Modal onClose={togleModal} largeImage={imageModal} />
//         )}
//       </>
//     );
//   }
// }

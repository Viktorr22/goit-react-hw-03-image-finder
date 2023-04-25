// import { Component } from 'react';
import { ImageGalleryList } from './ImageGallery.styled';
import { ImageGalleryItemBox } from 'components';

export function ImageGallery({ imageList, toOpenModal }) {
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

// const KEY = '32921151-b779d8ccd68aa0b72c6aa486f';

// export class ImageGallery extends Component {
//   state = {
//     request: null,
//     error: null,
//     status: 'idle',
//   };

//   componentDidUpdate(prevProps, prevState) {
//     if (prevProps.requestName !== this.props.requestName) {
//       console.log('Изменился пропс в галерее');
//       this.setState({ status: 'pending' });
//       setTimeout(() => {
//         fetch(
//           `https://pixabay.com/api/?q=${this.props.requestName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}&page=${this.state.page}`
//         )
//           .then(res => {
//             if (res.ok) {
//               return res.json();
//             }
//             return Promise.reject(new Error('Ничего не найдено'));
//           })
//           .then(request => this.setState({ request, status: 'resolved' }))
//           .catch(error => this.setState({ error, status: 'rejected' }));
//       }, 500);
//     }
//   }

//   render() {
//     const { request, error, status } = this.state;

//     if (request && request.total === 0) {
//       return <h1>По данному запросу ничего не найдено!</h1>;
//     }

//     if (status === 'rejected') {
//       return <h1>{error.message}</h1>;
//     }

//     if (status === 'pending') {
//       return <Loader />;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGalleryList>
//             {request.hits.map(galleryItem => (
//               <ImageGalleryItemBox
//                 key={galleryItem.id}
//                 imageListUrl={galleryItem.webformatURL}
//                 imageModal={galleryItem.largeImageURL}
//               />
//             ))}
//           </ImageGalleryList>
//           <Button onClick={this.onLoadPage} />
//         </>
//       );
//     }
//   }
// }

// statuses: 'idle', 'resolved', 'rejected', 'pending'

// onLoadPage = () => {
//   this.setState(prevState => ({ page: prevState.page + 1 }));
//   console.log(this.state.page);
//   this.setState(prevState => ({
//     perPage: prevState.perPage + 12,
//   }));
//   console.log(this.state.perPage);
//   fetch(
//     `https://pixabay.com/api/?q=${this.props.requestName}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12&page=${this.state.page}`
//   )
//     .then(res => {
//       if (res.ok) {
//         return res.json();
//       }
//       return Promise.reject(new Error('Ничего не найдено'));
//     })
//     .then(request => this.setState({ request, status: 'resolved' }))
//     .catch(error => this.setState({ error, status: 'rejected' }));
//   console.log(this.state.request);

// };

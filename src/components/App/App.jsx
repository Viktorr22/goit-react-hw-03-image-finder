import { Component } from 'react';
import { AppBox, Searchbar, ImageGallery, Button, Loader } from 'components';
import { fetchPicture } from 'components/Api';
// import { getImages } from 'components/Api';

// const API_KEY = '32921151-b779d8ccd68aa0b72c6aa486f';

export class App extends Component {
  state = {
    query: '',
    page: 1,
    images: [],
    // perPage: 12,
    total: 0,
    error: '',
    loading: false,
    showModal: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      // setTimeout(() => {
      this.setState({ total: 0, loading: true, error: '' });
      this.setState({ loading: true });
      fetchPicture(this.state.query, this.state.page)
        .then(({ total, hits }) => {
          // console.log(hits);
          const images = hits.map(
            ({ id, webformatURL, largeImageURL }, idx) => ({
              id,
              webformatURL,
              largeImageURL,
              isAnchor: !idx,
            })
          );
          console.log(images);
          return { total, images };
        })
        .then(({ total, images }) => {
          if (!total) return;
          this.setState(prevState => ({
            total,
            images: [...prevState.images, ...images],
          }));
        })
        .catch(error => {
          this.setState({ error: error.message });
        })
        .finally(() => {
          this.setState({ loading: false });
        });
      // }, 1000);
    }
  }

  handleFormSubmit = query => {
    if (query === this.state.query) return;
    this.setState({ query, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images, total, query, error } = this.state;
    const { handleFormSubmit, onLoadMore } = this;
    const buttonVisible = !loading && images.length < total;
    return (
      <AppBox>
        <Searchbar onSubmitForm={handleFormSubmit} />
        {loading && <Loader />}
        {query && total === 0 && !loading ? (
          <h1>По данному запросу ничего не найдено!</h1>
        ) : (
          <ImageGallery imageList={images} />
        )}
        {buttonVisible && <Button onClick={onLoadMore} />}
        {error && <p>{error}</p>}
      </AppBox>
    );
  }
}

// export class App extends Component {
//   state = {
//     requestName: '',
//   };

//   handleFormSubmit = requestName => {
//     this.setState({ requestName });
//   };

//   render() {
//     const { requestName } = this.state;
//     const { handleFormSubmit } = this;

//     return (
//       <AppBox>
//         <Searchbar onSubmitForm={handleFormSubmit} />
//         <ImageGallery requestName={requestName} />
//       </AppBox>
//     );
//   }
// }

//  fetch(
//    `https://pixabay.com/api/?q=${this.state.qwery}&page=1&key=32921151-b779d8ccd68aa0b72c6aa486f&image_type=photo&orientation=horizontal&per_page=${this.state.perPage}&page=${this.state.page}`
//  )
//    .then(res => {
//      if (res.ok) {
//        return res.json();
//      }
//      return Promise.reject(new Error('Ничего не найдено'));
//    })
//    // .then(request => this.setState({ request, status: 'resolved' }))
//    .then(console.log)
//    .catch(error => this.setState({ error, status: 'rejected' }));

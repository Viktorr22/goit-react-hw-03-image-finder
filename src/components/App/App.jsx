import { Component } from 'react';
import { Searchbar, AppBox, ImageGallery } from 'components';

export class App extends Component {
  state = {
    requestName: '',
  };

  handleFormSubmit = requestName => {
    this.setState({ requestName });
  };

  render() {
    const { requestName } = this.state;
    const { handleFormSubmit } = this;

    return (
      <AppBox>
        <Searchbar onSubmitForm={handleFormSubmit} />
        <ImageGallery requestName={requestName} />
      </AppBox>
    );
  }
}

import { ButtonLoadMore } from './Button.styled';

export function Button({ onClick }) {
  return (
    <ButtonLoadMore onClick={onClick} type="button">
      Load More
    </ButtonLoadMore>
  );
}

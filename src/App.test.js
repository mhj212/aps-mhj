import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('list is generated', () => {
  render(<App />);
  jest.spyOn(global, "fetch").mockImplementation((url => {
    if (url.includes('jsonplaceholder.typicode.com/photos')) {
      return [{
        albumId: 1,
        id: 1,
        thumbnailUrl: "https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url: "https://via.placeholder.com/600/92c952",
      }]
    }
  }));

  const linkElement = screen.getByText(/accusamus beatae ad facilis cum similique qui sunt/i);
  expect(linkElement).toBeInTheDocument();


});
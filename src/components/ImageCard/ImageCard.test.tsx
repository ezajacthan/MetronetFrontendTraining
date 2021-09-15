import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import ImageCard from '.';
import {render} from '@testing-library/react';
import userEvent, { TargetElement } from '@testing-library/user-event';

test('Button is not visible when onClick does not exist', () => {
    //render ImageCard without onClick
    render(
      <ImageCard   src={"testpic"} 
      caption="React Logo"
      onClick={ undefined }/>
    );
    const refreshButton = screen.queryByRole('button');
    expect(refreshButton).not.toBeInTheDocument();
});


test('Button is visible when onClick exists', () => {
  //render ImageCard without onClick
  render(
    <ImageCard   src={"testpic"} 
    caption="React Logo"
    onClick={ () => {alert("Click")} }/>
  );
  const refreshButton = screen.queryByRole('button');
  expect(refreshButton).toBeInTheDocument();
});

test('Button calls passed-in onClick()', () => {
  //render ImageCard without onClick
  const mockOnClick = jest.fn(() => console.log("Hello World"));
  render(
    <ImageCard   src={"testpic"} 
    caption="React Logo"
    onClick={ mockOnClick }/>
  );
  const refreshButton = screen.queryByRole('button');
  userEvent.click(refreshButton as TargetElement);
  expect(mockOnClick).toHaveBeenCalled();
});
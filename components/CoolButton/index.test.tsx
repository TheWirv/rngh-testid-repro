import type {FunctionComponent} from 'react';
import {render, fireEvent} from '../../test-utils';
import CoolButton from './index';

describe('Component test: CoolButton', () => {
  let amount = 1;
  const onPress = () => {
    amount++;
  };

  const TestCoolButton: FunctionComponent = () => (
    <CoolButton theme="dark" amount={amount} onPress={onPress} />
  );

  test('Correct rendering', () => {
    const tree = render(<TestCoolButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('Functionality: `increaseAmount`', () => {
    const {getByTestId} = render(<TestCoolButton />);
    fireEvent.press(getByTestId('increaseAmount'));
    fireEvent.press(getByTestId('increaseAmount'));

    expect(amount).toEqual(3);
  });
});

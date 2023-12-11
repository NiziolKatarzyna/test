import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import ResultBox from './ResultBox';
describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from='PLN' to='USD' amount={100} />);
  });
  it('should render proper info about conversion when PLN -> USD', () => {
    const testCases = [
      { from: 'PLN', to: 'USD', amount: 100, result: '28.57' },
      { from: 'PLN', to: 'USD', amount: 20, result: '5.71' },
      { from: 'PLN', to: 'USD', amount: 200, result: '57.14' },
      { from: 'PLN', to: 'USD', amount: 345, result: '98.57' },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={Number(testObj.amount)}
        />
      );
      const output = screen.getByTestId('output');
      const expectedText = `PLN ${testObj.amount.toFixed(2)} = $${
        testObj.result
      }`;
      expect(output).toHaveTextContent(expectedText);
      // unmount component
      cleanup();
    }
  });
  it('should render proper info about conversion when USD -> PLN', () => {
    const testCases = [
      { from: 'USD', to: 'PLN', amount: 100, result: '350.00' },
      { from: 'USD', to: 'PLN', amount: 20, result: '70.00' },
      { from: 'USD', to: 'PLN', amount: 202, result: '707.00' },
      { from: 'USD', to: 'PLN', amount: 14, result: '49.00' },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={Number(testObj.amount)}
        />
      );
      const output = screen.getByTestId('output');
      const expectedText = `$${testObj.amount.toFixed(2)} = PLN ${
        testObj.result
      }`;
      expect(output).toHaveTextContent(expectedText);
      // unmount component
      cleanup();
    }
  });
  it('should render proper info about conversion when PLN -> PLN', () => {
    const testCases = [
      { from: 'PLN', to: 'PLN', amount: 100, result: '100.00' },
      { from: 'PLN', to: 'PLN', amount: 20, result: '20.00' },
      { from: 'PLN', to: 'PLN', amount: 202, result: '202.00' },
      { from: 'PLN', to: 'PLN', amount: 14, result: '14.00' },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={Number(testObj.amount)}
        />
      );
      const output = screen.getByTestId('output');
      const expectedText = `PLN ${testObj.amount.toFixed(2)} = PLN ${
        testObj.result
      }`;
      expect(output).toHaveTextContent(expectedText);
      // unmount component
      cleanup();
    }
  });

  it('should render proper info about conversion when value is lower than zero', () => {
    const testCases = [
      { from: 'PLN', to: 'PLN', amount: -100, result: 'Wrong value…' },
      { from: 'PLN', to: 'PLN', amount: -20, result: 'Wrong value…' },
      { from: 'USD', to: 'USD', amount: -202, result: 'Wrong value…' },
      { from: 'USD', to: 'USD', amount: -14, result: 'Wrong value…' },
      { from: 'PLN', to: 'USD', amount: -100, result: 'Wrong value…' },
      { from: 'PLN', to: 'USD', amount: -20, result: 'Wrong value…' },
      { from: 'USD', to: 'PLN', amount: -202, result: 'Wrong value…' },
      { from: 'USD', to: 'PLN', amount: -14, result: 'Wrong value…' },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={Number(testObj.amount)}
        />
      );
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent('Wrong value…');
      // unmount component
      cleanup();
    }
  });
  it('should render proper info about conversion when value is lower than zero', () => {
    const testCases = [
      { from: 'PLN', to: 'PLN', amount: '-100', result: 'Wrong value…' },
      { from: 'PLN', to: 'PLN', amount: '-20', result: 'Wrong value…' },
      { from: 'USD', to: 'USD', amount: '-202', result: 'Wrong value…' },
      { from: 'USD', to: 'USD', amount: '-14', result: 'Wrong value…' },
      { from: 'PLN', to: 'USD', amount: '-100', result: 'Wrong value…' },
      { from: 'PLN', to: 'USD', amount: '-20', result: 'Wrong value…' },
      { from: 'USD', to: 'PLN', amount: '-202', result: 'Wrong value…' },
      { from: 'USD', to: 'PLN', amount: '-14', result: 'Wrong value…' },
    ];
    for (const testObj of testCases) {
      render(
        <ResultBox
          from={testObj.from}
          to={testObj.to}
          amount={Number(testObj.amount)}
        />
      );
      const output = screen.getByTestId('output');

      expect(output).toHaveTextContent('Wrong value…');
      // unmount component
      cleanup();
    }
  });
});

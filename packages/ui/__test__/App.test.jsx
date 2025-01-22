import { render, screen } from '@testing-library/react';
import { it } from 'vitest';
import { describe } from 'vitest';
import App from '../src/App';
import { expect } from 'vitest';

describe('App Component', () => {
  it('should have Welcome text', () => {
    render(<App />);
    let message = screen.getByText('Welcome');
    expect(message).toBeVisible();
  });
});

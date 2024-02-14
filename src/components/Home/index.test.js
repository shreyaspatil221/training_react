import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './index';

jest.mock('../../auth', () => ({
    useAuth: jest.fn(() => ({
        user: null, // Mocking no user initially
    })),
}));

describe('App component', () => {
    test('renders "You do not have access to this page" when there is no user', () => {
        // Mocking useAuth hook to return null user
        require('../../auth').useAuth.mockReturnValueOnce({ user: null });

        render(<App />);
        expect(screen.getByText('You do not have access to this page')).toBeInTheDocument();
    });

    test('renders user name and Greeting component when user is present', () => {
        const mockUser = 'John';
        jest.spyOn(require('../../auth'), 'useAuth').mockImplementation(() => ({
            user: mockUser,
        }));

        render(<App />);
        expect(screen.getByText(`Welcome to app, John`)).toBeInTheDocument();
    });
});

import { render, screen } from '@testing-library/react';
import React from 'react';
import Name from './index';

describe('Name Component', () => {


    test('renders the name correctly', () => {
        render(<Name name="John" />);

        expect(screen.getByText(`Welcome to app, John`)).toBeInTheDocument();
    });

    test('renders default message if name prop is not provided', () => {
        render(<Name />);

        expect(screen.getByText('Welcome to app,')).toBeInTheDocument();
    });
});

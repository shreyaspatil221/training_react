import { render, screen } from '@testing-library/react';
import React from 'react';
import Greeting from './index';

// Mocking Date object to control the time in tests
const mockDate = (hours, minutes = 0, seconds = 0) => {
    const realDate = Date;
    global.Date = class extends realDate {
        constructor() {
            super();
            this.setHours(hours, minutes, seconds);
        }
    };
};

describe('Greeting Component', () => {
    afterEach(() => {
        // Restore original Date object after each test
        global.Date = Date;
    });

    test('renders "Good Morning!" before 12 PM', () => {
        mockDate(9); // Mocking time to 9:00 AM
        render(<Greeting />);
        expect(screen.getByText('Good Morning!')).toBeInTheDocument();
    });

    test('renders "Good Afternoon!" between 12 PM and 5 PM', () => {
        mockDate(14); // Mocking time to 2:00 PM
        render(<Greeting />);
        expect(screen.getByText('Good Afternoon!')).toBeInTheDocument();
    });

    test('renders "Good Evening!" between 5 PM and 9 PM', () => {
        mockDate(19); // Mocking time to 7:00 PM
        render(<Greeting />);
        expect(screen.getByText('Good Evening!')).toBeInTheDocument();
    });

    test('renders "Good Night!" after 9 PM', () => {
        mockDate(23); // Mocking time to 11:00 PM
        render(<Greeting />);
        expect(screen.getByText('Good Night!')).toBeInTheDocument();
    });

    test('renders "Hello" at midnight', () => {
        mockDate(0); // Mocking time to 12:00 AM (midnight)
        render(<Greeting />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });

    test('renders "Hello" if date not found', () => {
        mockDate(null); // Mocking time to null
        render(<Greeting />);
        expect(screen.getByText('Hello')).toBeInTheDocument();
    });
});

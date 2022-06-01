import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { Home } from '../src/pages/Home';

describe('HomePage', () => {
    it('must display a title', () => {
        render(<Home />)
        expect(screen.queryByText(/create recipe/i)).toBeInTheDocument()
    })
})
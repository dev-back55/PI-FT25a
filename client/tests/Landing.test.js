import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllRecipes, getDbDiets } from '../src/redux/actions';
import { render, screen } from '@testing-library/react';
import { Landing } from "../src/pages/Landing";
import { Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AppRouter } from '../src/routes/AppRouter';
import { store } from '../src/redux/store';

describe('LandingPage', () => {
    it('must display a title', () => {
        render(<Landing />)
        expect(screen.queryByText(/welcome/i)).toBeInTheDocument()
    })
})
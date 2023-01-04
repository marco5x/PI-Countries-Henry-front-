import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Nav from '../Components/NavBar/NavBar';

configure({ adapter: new Adapter() });

describe('<Nav />', () => {
    let wrapper
    beforeEach(() => {
        wrapper = shallow(<Nav />)
    })

    it('Deberia renderizar Dos <Link />', () => {
        expect(wrapper.find(Link)).toHaveLength(1);
        expect(wrapper.find(NavLink)).toHaveLength(1);
    });
    it('El primer Link debe tener el texto "HOME" y cambiar la ruta hacia "/".', () => {
        expect(wrapper.find(Link).at(0).prop('to')).toEqual('/');
    });
    it('El segundo Link debe tener el texto "Create Activity" y cambiar la ruta hacia "/activities"', () => {
        expect(wrapper.find(NavLink).at(0).prop('to')).toEqual('/activities');
    });
})

import React from 'react';
import { mount } from 'enzyme';
import PrivateRoute from './PrivateRoute';
import { MemoryRouter } from 'react-router';

describe('<PrivateRoute/>', () => {
  it('should render child component if there is a token in local storage', () => {
    Storage.prototype.getItem = jest.fn(() => 'token');

    const MockComponent = () => {
      return (
        <h1>Test</h1>
      );
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/shop']}>
        <PrivateRoute path="/shop" component={MockComponent} />
      </MemoryRouter>
    );

    expect(wrapper.find('h1')).toHaveLength(1);
    expect(localStorage.getItem).toHaveBeenCalledWith('token');
  });

  it('should not render child component if there is no token in local storage', () => {
    Storage.prototype.getItem = jest.fn(() => null);

    const MockComponent = () => {
      return (
        <h1>Test</h1>
      );
    };

    const wrapper = mount(
      <MemoryRouter initialEntries={['/shop']}>
        <PrivateRoute path="/shop" component={MockComponent} />
      </MemoryRouter>
    );

    expect(wrapper.find('h1')).toHaveLength(0);
  });
});

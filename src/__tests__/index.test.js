import 'react-native';
import React from 'react';
import Index from '../index.js';
import renderer from 'react-test-renderer'; // Note: test renderer must be required after react-native.

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />
  );
});

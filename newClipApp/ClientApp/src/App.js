import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './containers/Home/Home';
import Upload from './containers/Upload/Upload';
import Player from './containers/Player/Player';

export default () => (
  <Layout>
    <Route exact path='/' component={Home} />
    <Route exact path='/player' component={Player} />
    <Route path='/upload' component={Upload} />
  </Layout>
);

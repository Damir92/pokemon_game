import Header from './components/Header';
import Layout from './components/Layout';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <Header
        title='This is title!'
        descr='This is Description!'
      />
      <Layout
        id='1'
        title='Title 1'
        desc='Description 1'
        urlBg='bg1'
      />
      <Layout
        id='2'
        title='Title 2'
        desc='Description 2'
        colorBg='lightblue'
      />
      <Layout
        id='3'
        title='Title 3'
        desc='Description 3'
        urlBg='bg2'
      />
      <Footer />
    </>
  );
}

export default App;

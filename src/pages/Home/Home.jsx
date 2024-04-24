import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import AppDownload from '../../components/AppDownload/AppDownload';

const Home = () => {

  const [category, setCategory] = useState('All');

  return (
    <section id='home'>
        <Header />

        <ExploreMenu category={category} setCategory={setCategory}/>

        <FoodDisplay category={category}/>

        <AppDownload />
    </section>
  )
}

export default Home
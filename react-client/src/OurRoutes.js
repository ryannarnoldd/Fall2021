import React from 'react';
import { Route, Routes } from 'react-router';
import Hero from './components/Hero'; 
import session from './services/session';
import Post from './components/Post';
import Feed from './views/Feed';

// const About = ()=> <h1 className="title">About Page.</h1>;
const Home = <Hero title="Home Page" subtitle="This is the Home Page."/>;
const About = <Hero title="About Page" subtitle="This is the About Page."/>;

const Users = <Hero title="Users Page" subtitle="This is the Users Page."/>;





export default function OurRoutes() {
    return (
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/About" element={ <About /> } />
            <Route path="/Feed" element={ <Feed /> } />
            <Route path="/Users" element={ <Users /> } />
        </Routes>
    );
}
import React from 'react';
import { Route, Routes } from 'react-router';
import Hero from './components/Hero'; 
import session from './services/session';
import Post from './components/Post';

// const About = ()=> <h1 className="title">About Page.</h1>;
const Home = <Hero title="Home Page" subtitle="This is the Home Page."/>;
const About = <Hero title="About Page" subtitle="This is the About Page."/>;
const Feed = ()=> <Post post={ {
    src: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60', user: session.user,
}}/>;
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
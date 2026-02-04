import React from "react";
import "./App.css";

function Header({ title }) {
  return (
    <header className="header">
      <h1>{title}</h1>
    </header>
  );
}

function Author({ name, bio }) {
  return (
    <div className="author">
      <h3>Author</h3>
      <p><strong>{name}</strong></p>
      <p>{bio}</p>
    </div>
  );
}

function Article({ title, image, text, authorName, authorBio, link }) {
  return (
    <article className="article">
      <h2>{title}</h2>

      <img src={image} alt="Article" />

      <p>{text}</p>

      <a href={link} target="_blank" rel="noreferrer">
        Learn more
      </a>

      <Author name={authorName} bio={authorBio} />
    </article>
  );
}

function App() {
  return (
    <div className="app">
      <Header title="React Blog" />

      <Article
        title="Why React Is Popular"
        image="https://via.placeholder.com/700x300"
        text="React is a JavaScript library for building user interfaces.
        It helps developers create reusable components and modern web
        applications easily."
        authorName="Alex Johnson"
        authorBio="Frontend developer"
        link="https://react.dev"
      />
    </div>
  );
}

export default App;
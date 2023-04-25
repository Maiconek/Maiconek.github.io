import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

function Header() {
  return (
    <header>
      Navigation bar
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function Content({ data }) {
  return (
    <article>
      <h1>Popular web browsers</h1>
      {data.map((item) => (
        <section>
          <h3>{item.title}</h3>
          <img src={item.image}></img>
          <p>{item.text}</p>
        </section>
      ))}
    </article>
  );
}

function FooterElement() {
  return <footer>Copyright by Bogate Interfejsy Webowe</footer>;
}

const data = [
  {
    title: 'Mozilla Firefox',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png',
    text: 'Mozilla Firefox is an open-source web browser developed by Mozilla',
  },
  {
    title: 'Google Chrome',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/e/e1/Google_Chrome_icon_%28February_2022%29.svg',
    text: 'Google Chrome is a web browser developed by Google, released in 2008',
  },
  {
    title: 'Microsoft Edge',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Microsoft_Edge_logo_%282019%29.svg/2048px-Microsoft_Edge_logo_%282019%29.svg.png',
    text: 'Microsoft Edge is a web browser developed by Microsoft, released in 2015',
  },
];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Header />
    <Content data={data} />
    <FooterElement />
  </StrictMode>
);


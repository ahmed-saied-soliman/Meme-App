import troll from '../images/troll.png';

export default function Header() {
  return (
    <header>
      <img src={troll} alt="troll face" className="header_img" />
      <h2 className="header_title">Meme Generator</h2>
      <h4 className="header_project">React Course - Project 3</h4>
    </header>
  );
}

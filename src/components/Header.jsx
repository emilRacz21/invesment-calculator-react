import headerImg from "../assets/logo.png";
export default function Header() {
  return (
    <header>
      <img src={headerImg} alt="calculator logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

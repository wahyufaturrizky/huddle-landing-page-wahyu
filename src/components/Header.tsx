import "styles/Header.css";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as ImageMockup } from "assets/images/illustration-mockups.svg";
import Button from "./Button";

interface HeaderPropsInterface {
  labelButton?: string;
  desc?: string;
}
const Header = (props: HeaderPropsInterface) => {
  return (
    <div className="container-header-intro">
      <header className="container-header">
        <Logo />
        <Button label={props.labelButton} />
      </header>

      <section className="intro">
        <div className="container-text-intro">
          <h1 className="font-poppins-600 very-dark-cyan">
            Build The Community
          </h1>
          <h1 className="font-poppins-600 very-dark-cyan">
            Your Fans Will Love
          </h1>
          <p className="font-poppins-400 very-dark-cyan mt-40">{props.desc}</p>
          <div className="mt-32">
            <Button width={280} isPink label="Get Started For Free" />
          </div>
        </div>
        <div className="container-image">
          <ImageMockup />
        </div>
      </section>
    </div>
  );
};

export default Header;

import "styles/Header.css";
import { ReactComponent as Logo } from "assets/images/logo.svg";
import { ReactComponent as LogoMobile } from "assets/images/logo-mobile.svg";
import { ReactComponent as ImageMockup } from "assets/images/illustration-mockups.svg";
import { ReactComponent as ImageMockupMobile } from "assets/images/illustration-mockups-mobile.svg";
import Button from "./Button";

interface HeaderPropsInterface {
  labelButton?: string;
  desc?: string;
}
const Header = (props: HeaderPropsInterface) => {
  return (
    <div className="container-header-intro">
      <header className="container-header">
        <div className="hide-in-mobile">
          <Logo />
        </div>
        <div className="show-in-mobile">
          <LogoMobile />
        </div>
        <div className="hide-in-mobile">
          <Button label={props.labelButton} />
        </div>
        <div className="show-in-mobile">
          <Button padding={4} label={props.labelButton} width={100} />
        </div>
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
          <div className="hide-in-mobile">
            <ImageMockup />
          </div>
          <div className="show-in-mobile">
            <div className="mt-16">
              <ImageMockupMobile />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;

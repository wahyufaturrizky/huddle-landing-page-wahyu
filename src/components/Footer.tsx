import "styles/Footer.css";
import { ReactComponent as LogoWhite } from "assets/images/logo-white.svg";
import { ReactComponent as LogoLoc } from "assets/images/icon-location.svg";
import { ReactComponent as LogoPhone } from "assets/images/icon-phone.svg";
import { ReactComponent as LogoEmail } from "assets/images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <LogoWhite />

      <section className="footer-sosmed mt-40">
        <div className="item-sosmed">
          <div className="hide-in-mobile">
            <div style={{ width: 368 }} className="sub-item-sosmed">
              <div className="mr-16">
                <LogoLoc />
              </div>
              <p className="font-open-sans-400 white">
                Dusun X RT.005/RW.003 Desa Buntubedimbar, Kabupaten Deli
                Serdang, Kecamatan Tanjung Morawa, No Rumah 88A, 20362,
                Indonesia
              </p>
            </div>
          </div>
          <div className="show-in-mobile">
            <div className="sub-item-sosmed">
              <div className="mr-16">
                <LogoLoc />
              </div>
              <p className="font-open-sans-400 white">
                Dusun X RT.005/RW.003 Desa Buntubedimbar, Kabupaten Deli
                Serdang, Kecamatan Tanjung Morawa, No Rumah 88A, 20362,
                Indonesia
              </p>
            </div>
          </div>
          <div className="sub-item-sosmed mt-16">
            <div className="mr-16">
              <LogoPhone />
            </div>
            <p className="font-open-sans-400 white">+6282274586011</p>
          </div>
          <div className="sub-item-sosmed mt-16">
            <div className="mr-16">
              <LogoEmail />
            </div>
            <p className="font-open-sans-400 white">
              wahyufaturrizkyy@gmail.com
            </p>
          </div>
        </div>
        <div className="item-sosmed pl-24 pl-0-xs mt-16-xs">
          <p className="font-open-sans-400 white mb-16">About Us</p>
          <p className="font-open-sans-400 white mb-16">What We Do</p>
          <p className="font-open-sans-400 white">FAQ</p>
        </div>
        <div className="item-sosmed pl-24 pl-0-xs mt-16-xs">
          <p className="font-open-sans-400 white mb-16">Career</p>
          <p className="font-open-sans-400 white mb-16">Blog</p>
          <p className="font-open-sans-400 white">Contact us</p>
        </div>
        <div className="item-sosmed pl-24 pl-0-xs text-center-xs mt-16-xs">
          <img
            onClick={() =>
              window.open(
                "https://www.facebook.com/wahyu.faturrizky/",
                "_blank"
              )
            }
            alt="social"
            className="cursor-pointer"
            src="https://img.icons8.com/ios/32/FFFFFF/facebook-circled--v5.png"
          />
          <img
            onClick={() =>
              window.open("https://twitter.com/wbocahbijak1", "_blank")
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/twitter-circled--v4.png"
          />
          <img
            onClick={() =>
              window.open(
                "https://www.instagram.com/wahyufaturrizky/",
                "_blank"
              )
            }
            className="ml-16 cursor-pointer"
            alt="social"
            src="https://img.icons8.com/ios/32/FFFFFF/instagram-new--v1.png"
          />
        </div>
      </section>

      <p className="copy font-open-sans-400 white text-12 text-center-xs mt-16-xs">
        &copy; Copyright 2022 Huddle Wahyu Fatur Rizki. All rights reserved.
      </p>

      <div className="attribution">
        Challenge by{" "}
        <a
          rel="noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          rel="noreferrer"
          href="https://www.linkedin.com/in/wahyu-fatur-rizky"
          target="_blank"
        >
          Wahyu Fatur Rizki
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              BENİ <span className="purple"> YAKINDAN </span> TANIYIN
            </h1>
            <p className="home-about-body">
              Programlamaya olan ilgimle tanıştım ve sanırım bir şeyler öğrendim
              🤷‍♂️
              <br />
              <br />
              Frontend geliştirmede kullandığım diller
              <i>
                <b className="purple"> HTML, CSS, Javascript </b>
              </i>
              <br />
              <br />
              İlgi alanlarım, yeni &nbsp;
              <i>
                <b className="purple">Web Teknolojileri ve Ürünleri</b> ortaya
                çıkrtmak ve aynı zamanda
                <b className="purple">
                  {" "}
                  Arayüz geliştirme ile ilgili çalışmalar yapmak.
                </b>
              </i>
              <br />
              <br />
              Kendimi geliştirmek için
              <b className="purple"> Node.js</b> ve
              Modern Javascript Kütüphaneleri ve Framework'leri
              örneğin
              <i>
                <b className="purple">
                  {" "}
                     React.js ve Next.js
                  {" "}
                </b>
              </i> 
               öğrenerek zaman geçiririm.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Beni Takip Edin</h1>
            <p>
              Ayrıca <span className="purple">iletişime geçmek </span>tamamen ücretsiz 😂
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/unalisi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/unturco_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/unalisi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/unalisi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

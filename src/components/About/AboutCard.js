import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hepiniz Hoş Geldiniz! Ben <span className="purple"><b>Ünal İsi</b> </span> 
            <br />
            <span className="purple"><b>Eskişehir'de</b> </span>doğup büyüdüm. Üniversiteye kadar olan eğitimimi yine Eskişehir'de tamamladım 
            <br />
            Şu anda ise <span className="purple"> <b>Düzce Üniversitesi'nde</b></span> Bilgisayar Mühendisliği öğrencisiyim.
            <br />
            Loscart adında bir Start-Up'ta <span className="purple"> Frontend Developer Intern</span> olarak çalışıyorum.
            <br />
            <br />
            <br />
            Web Geliştirme Alanı Dışında Yapmaktan Keyif Aldığım Şeyler:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Sosyal Medyada Gezinmek
            </li>
            <li className="about-activity">
              <ImPointRight /> Yazı Yazmak
            </li>
            <li className="about-activity">
              <ImPointRight /> Arkadaşlarımla Zaman Geçirmek
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Naptığımı bilmesemde, kod yazmak istiyorum."{" "}
          </p>
          <footer className="blockquote-footer">Ünal İsi</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

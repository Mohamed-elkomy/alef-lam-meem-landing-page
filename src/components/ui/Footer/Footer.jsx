import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  FaArrowCircleUp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

import logo from "../../../assets/images/logo.png";
import brmjaLogo from "../../../assets/images/logo.svg";
import styles from "./Footer.module.css";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* FOOTER */}
      <footer className={`${styles.footer} text-end`} dir="rtl">
        <div
          className={`${styles.footerContent} d-flex flex-wrap justify-content-between`}
        >
          {/* About */}
          <div className={styles.footerColumn}>
            <h3>عن التطبيق</h3>
            <p>
              أ ل ف – لاَم – م ي م هو منصة تعليمية متخصّصة في تعلّم القرآن
              الكريم عبر دروس تفاعلية، مستويات متدرجة، ومعلمين معتمدين يساعدونك
              على تحسين التلاوة وإتقان أحكام التجويد بسهولة من أي مكان.
            </p>
          </div>

          {/* Links */}
          <div className={styles.footerColumn}>
            <h3>روابط هامة</h3>
            <ul>
              <li>
                <Link to="/">الرئيسية</Link>
              </li>
              <li>
                <Link to="/privacy">سياسة الخصوصية</Link>
              </li>
              <li>
                <Link to="/return">سياسة الاسترجاع والاسترداد</Link>
              </li>
              <li>
                <Link to="/terms">الشروط والأحكام</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.footerColumn}>
            <h3>تواصل معنا</h3>

            <p>
              📞{" "}
              <a href="tel:01000000000" className={styles.contactLink}>
                01000000000
              </a>
            </p>

            <p>
              ✉️{" "}
              <a
                href="mailto:support@alf-lam-meem.com"
                className={styles.contactLink}
              >
                support@alf-lam-meem.com
              </a>
            </p>

            <p>📍 القاهرة - مصر</p>

            {/* Social */}
            <div className={styles.social}>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
            <img src={logo} alt="Alf Lam Meem Logo" />
          </div>
        </div>

        <hr />

        {/* Brand */}
        <div className={styles.copyright}>
          <a
            href="https://brmja.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brandInline}
          >
            <img src={brmjaLogo} alt="Brmja Tech" loading="lazy" />
            <span>
              © {new Date().getFullYear()} Brmja Tech – جميع الحقوق محفوظة
            </span>
          </a>
        </div>
      </footer>

      {/* Scroll To Top */}
      <button
        type="button"
        className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""}`}
        onClick={scrollToTop}
        aria-label="الرجوع إلى أعلى الصفحة"
      >
        <FaArrowCircleUp />
      </button>
    </>
  );
}

import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import styles from "./Footer.module.css";
import { useEffect, useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";

export default function Footer() {
    const [showButton, setShowButton] = useState(false);

    /* Handle Scroll-To-Top Button */
    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 250);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () =>
        window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <>
            {/* FOOTER */}
            <footer className={`${styles.footer} text-end`} dir="rtl">
                <div
                    className={`${styles.footerContent} d-flex flex-wrap justify-content-between`}
                >
                    {/* About Column */}
                    <div className={styles.footerColumn}>
                        <h3>عن التطبيق</h3>
                        <p>
                            أ ل ف – لاَم – م ي م هو منصة تعليمية متخصّصة في تعلّم القرآن الكريم
                            عبر دروس تفاعلية، مستويات متدرجة، ومعلمين معتمدين يساعدونك على تحسين
                            التلاوة وإتقان أحكام التجويد بسهولة من أي مكان.
                        </p>
                    </div>

                    {/* Important Links */}
                    <div className={styles.footerColumn}>
                        <h3>روابط هامة</h3>
                        <ul>
                            <li><Link to="/">الرئيسية</Link></li>
                            <li><Link to="/privacy">سياسة الخصوصية</Link></li>
                            <li><Link to="/return">سياسة الاسترجاع والاسترداد</Link></li>
                            <li><Link to="/terms">الشروط والأحكام</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className={styles.footerColumn}>
                        <h3>تواصل معنا</h3>
                        <p>01000000000 📞</p>
                        <p>support@alf-lam-meem.com ✉️</p>
                        <p>القاهرة - مصر 📍</p>
                    </div>

                    {/* Logo */}
                    <div className={`${styles.footerColumn} ${styles.footerLogo}`}>
                        <img src={logo} alt="Logo" />
                    </div>
                </div>

                <hr />

                <div className={`${styles.copyright} text-center`}>
                    © 2025 جميع الحقوق محفوظة - تطبيق أ ل ف – لاَم – م ي م لتعلّم القرآن
                    الكريم
                </div>
            </footer>

            {/* SCROLL TO TOP */}
            <button
                className={`${styles.scrollTopBtn} ${showButton ? styles.show : ""
                    }`}
                onClick={scrollToTop}
                aria-label="Scroll to top"
            >
                <FaArrowCircleUp />
            </button>
        </>
    );
}

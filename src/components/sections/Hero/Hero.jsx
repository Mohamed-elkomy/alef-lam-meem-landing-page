import heroimage from "../../../assets/images/homePage.png";
import google from "../../../assets/images/googlePlay.png";
import apple from "../../../assets/images/appleStore.png";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.hero} container`}>
      <div className="row align-items-center">

        {/* TEXT SIDE */}
        <div className={`col-lg-6 col-md-6 col-12 text-end ${styles.heroRight}`}>
          <h1 className={`${styles.title} animate__animated animate__fadeInUp`}>
            أ ل ف – لاَم – م ي م — مدرستك الرقمية لتعلّم القرآن الكريم
          </h1>

          <h2
            className={`${styles.subtitle} animate__animated animate__fadeInUp animate__delay-1s`}
          >
            تجربة متكاملة لتعلّم القرآن الكريم بالتلاوة والتجويد عبر أحدث الطرق
            التعليمية
          </h2>

          <p
            className={`${styles.desc} animate__animated animate__fadeInUp animate__delay-2s`}
          >
            يقدّم تطبيق أ ل ف – لاَم – م ي م منظومة تعليمية متكاملة تشمل دروسًا
            تفاعلية، جلسات مباشرة مع معلّمين معتمدين، اختبارات تعزّز الفهم،
            ومصحفًا رقميًا يساعدك على القراءة والمراجعة بكل سهولة. نرافقك خطوة
            بخطوة في رحلتك مع كتاب الله.
          </p>

          {/* Store buttons */}
          <div
            className={`${styles.storeButtons} d-flex justify-content-lg-start justify-content-center gap-2 animate__animated animate__fadeInUp animate__delay-3s`}
          >
            <button
              type="button"
              className="p-0 border-0 bg-transparent"
              aria-label="Download on the Apple App Store"
            >
              <img src={apple} className={styles.storeBtn} alt="App Store" />
            </button>

            <button
              type="button"
              className="p-0 border-0 bg-transparent"
              aria-label="Download on Google Play"
            >
              <img src={google} className={styles.storeBtn} alt="Google Play" />
            </button>
          </div>
        </div>

        {/* IMAGE SIDE */}
        <div className="col-lg-6 col-md-6 col-12 text-center mt-4 mt-lg-0">
          <img
            src={heroimage}
            className={`${styles.heroImg} animate__animated animate__zoomIn animate__delay-1s`}
            alt="صورة التطبيق"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
}

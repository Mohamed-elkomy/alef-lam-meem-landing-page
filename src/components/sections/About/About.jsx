import styles from "./About.module.css";

import img1 from "../../../assets/images/Rectangle.png";
// import img2 from "../../../assets/images/Rectangle.png";
// import img3 from "../../../assets/images/Rectangle.png";

export default function About() {
  return (
    <section className={styles.aboutSection} id="about">
      <div className="container">
        <div className="row align-items-center">
          {/* النص */}
          <div className="col-lg-6 col-md-6 col-12 text-end">
            <h1 className={styles.aboutTitle}>من نحن</h1>

            <p className={styles.aboutText}>
              تطبيق أ ل ف – لاَم – م ي م هو منصة تعليمية مبتكرة تهدف إلى تسهيل
              تعلّم القرآن الكريم وإتقان التلاوة والتجويد عبر تجربة حديثة
              وتفاعلية. يجمع التطبيق بين الأساليب التعليمية المتدرجة، الدروس
              الصوتية والمرئية، الجلسات المباشرة مع معلّمين معتمدين، ونظام
              مستويات يساعدك على متابعة تقدّمك خطوة بخطوة. نسعى لتقديم بيئة
              تعليمية تجمع بين الأصالة والسهولة، لتكون رحلتك مع القرآن أقرب
              وأسهل في أي وقت ومن أي مكان.
            </p>

            {/* Feature 1 */}
            <div className={styles.aboutFeature}>
              <div className={styles.iconCircle}>✔</div>
              <div>
                <h3>إرشادات تجويدية دقيقة</h3>
                <p>
                  شرح مبسّط وواضح لقواعد التجويد مع أمثلة عملية تساعدك على تحسين
                  النطق، ضبط المخارج، وإتقان التلاوة خطوة بخطوة بأسلوب سهل
                  وواضح.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className={styles.aboutFeature}>
              <div className={styles.iconCircle}>⚙</div>
              <div>
                <h3>متابعة تقدّمك التعليمي</h3>
                <p>
                  نظام تعليمي ذكي يتيح لك متابعة مستوى التلاوة والتجويد، نتائج
                  الاختبارات، مواعيد الجلسات، وكل خطوة من خطوات تقدمك داخل
                  التطبيق بسهولة ووضوح.
                </p>
              </div>
            </div>
          </div>

          {/* الصورة + الكاروسيل */}
          <div className="col-lg-6 col-md-6 col-12 text-center mt-4 mt-md-0">
            <div
              id="aboutCarousel"
              className={`carousel slide ${styles.aboutCarousel}`}
              data-bs-ride="false"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="الشريحة الأولى"
                />
                {/* <button
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide-to="1"
                  aria-label="الشريحة الثانية"
                />
                <button
                  type="button"
                  data-bs-target="#aboutCarousel"
                  data-bs-slide-to="2"
                  aria-label="الشريحة الثالثة"
                /> */}
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src={img1}
                    className={`d-block w-100 ${styles.aboutImg}`}
                    alt="صورة 1"
                    loading="lazy"
                  />
                </div>
                {/* <div className="carousel-item">
                  <img
                    src={img2}
                    className={`d-block w-100 ${styles.aboutImg}`}
                    alt="صورة 2"
                    loading="lazy"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src={img3}
                    className={`d-block w-100 ${styles.aboutImg}`}
                    alt="صورة 3"
                    loading="lazy"
                  />
                </div> */}
              </div>

              {/* <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#aboutCarousel"
                data-bs-slide="prev"
                aria-label="السابق"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
              </button>

              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#aboutCarousel"
                data-bs-slide="next"
                aria-label="التالي"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

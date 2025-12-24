import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import styles from "./Features.module.css";

const FEATURES = [
  {
    icon: "📘",
    title: "دروس تفاعلية في التلاوة والتجويد",
    text:
      "محتوى تعليمي مبسّط يساعدك على تعلّم التلاوة الصحيحة وفهم قواعد التجويد خطوة بخطوة.",
  },
  {
    icon: "👨‍🏫",
    title: "معلمون ومعلمات معتمدون",
    text:
      "نخبة من المتخصصين في تعليم القرآن الكريم، مع إمكانية متابعة تقدمك بشكل مستمر.",
  },
  {
    icon: "📝",
    title: "اختبارات وكويزات لتحسين مستواك",
    text:
      "تقييمات تفاعلية بعد كل درس تساعدك على تثبيت المعلومات ومعرفة نقاط القوة والضعف لديك.",
  },
  {
    icon: "📖",
    title: "مصحف رقمي مع أدوات بحث وتنقل",
    text:
      "قراءة مريحة مع إمكانية الانتقال بين الصفحات، البحث في السور، والاستماع لتلاوات متعددة.",
  },
  {
    icon: "🎧",
    title: "جلسات مباشرة ومسجّلة",
    text:
      "شارك في جلسات مباشرة مع المعلم، أو أعد الاستماع للجلسات المسجلة في أي وقت يناسبك.",
  },
  {
    icon: "📊",
    title: "نظام مستويات وتتبع التقدّم",
    text:
      "صعود تدريجي في مستويات التلاوة، مع متابعة دقيقة لإنجازك داخل لوحة التحكم الخاصة بك.",
  },
];

export default function Features() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section id="features" className={styles.featuresSection}>
      <div className="container text-center">
        <h1 className={styles.featuresTitle}>
          مميزات تطبيق أ ل ف - لاَم - م ي م
        </h1>

        <p className={styles.featuresSubtitle}>
          مميزات تطبيق أ ل ف – لاَم – م ي م لتعلّم القرآن الكريم بسهولة واحترافية
        </p>

        <div className={styles.sliderWrapper}>
          {/* Custom navigation buttons */}
          <button ref={prevRef} className={styles.prevBtn} aria-label="السابق" />
          <button ref={nextRef} className={styles.nextBtn} aria-label="التالي" />

          <Swiper
            modules={[Navigation, Autoplay]}
            loop
            autoplay={{
              delay: 1600,
              disableOnInteraction: false,
            }}
            spaceBetween={24}
            breakpoints={{
              0: { slidesPerView: 1 },
              577: { slidesPerView: 2 },
              993: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            className={styles.featuresSwiper}
          >
            {FEATURES.map((item, index) => (
              <SwiperSlide key={index}>
                <div className={styles.featureCard}>
                  <div className={styles.icon}>{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import google from "../../../assets/images/googlePlay.png";
import apple from "../../../assets/images/appleStore.png";
import frame from "../../../assets/images/firstPage.png";

import styles from "./Download.module.css";

export default function Download() {
  return (
    <section
      id="download"
      className={`${styles.downloadSection} d-flex justify-content-between align-items-center`}
    >
      {/* IMAGE */}
      <div className={`${styles.downloadRight} d-flex justify-content-center`}>
        <img
          src={frame}
          className={styles.downloadImg}
          alt="صورة التطبيق"
          loading="lazy"
        />
      </div>

      {/* TEXT */}
      <div className={`${styles.downloadLeft} text-end`}>
        <h1 className={styles.downloadTitle}>حمّل تطبيق أ ل ف - لا‘م - م ي م الآن</h1>

        <p className={styles.downloadText}>
          تطبيق أ ل ف – لاَم – م ي م هو منصّة تعليمية متكاملة تساعدك على تعلّم
          القرآن الكريم وإتقان التلاوة والتجويد من خلال دروس تفاعلية وجلسات
          مباشرة مع معلّمين معتمدين. يقدّم لك التطبيق نظام مستويات متدرّج،
          اختبارات تفاعلية، ومصحفًا رقميًا يدعم البحث والتنقّل بسهولة. ابدأ
          رحلتك مع القرآن الآن أينما كنت وفي أي وقت.
        </p>

        <div className={`${styles.downloadButtons} d-flex justify-content-start`}>
          <button
            type="button"
            className="p-0 border-0 bg-transparent"
            aria-label="تحميل من متجر آبل"
          >
            <img
              src={apple}
              className={styles.downloadBtn}
              alt="تحميل من متجر آبل"
            />
          </button>

          <button
            type="button"
            className="p-0 border-0 bg-transparent"
            aria-label="تحميل من متجر جوجل"
          >
            <img
              src={google}
              className={styles.downloadBtn}
              alt="تحميل من متجر جوجل"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

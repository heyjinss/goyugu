// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(HttpBackend) // 백엔드를 통해 번역 파일 로드
  .use(LanguageDetector) // 사용자의 언어 감지
  .use(initReactI18next) // react-i18next와 연결
  .init({
    fallbackLng: "en", // 기본 언어 설정
    debug: true, // 디버그 모드 활성화
    interpolation: {
      escapeValue: false, // React에서는 XSS 보호를 따로 처리하므로 비활성화
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json", // 번역 파일 경로 설정
    },
  });

export default i18n;

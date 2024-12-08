import React, { useState } from "react";
import {
  Grid,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Pagination,
  Box,
} from "@mui/material";
import { useTranslation } from "react-i18next"; // i18n 라이브러리 사용 시
import logo from "../img/goyu.png"; // 로고 이미지를 import로 가져오기
import logo2 from "../img/goyu.png"; // 로고 이미지를 import로 가져오기
import video from "../img/video.mp4"; // 로고 이미지를 import로 가져오기
import video3 from "../img/video3.mp4"; // 로고 이미지를 import로 가져오기
import video4 from "../img/video4.mp4"; // 로고 이미지를 import로 가져오기
import video5 from "../img/video5.mp4"; // 로고 이미지를 import로 가져오기
import logo3 from "../img/goyu111.jpg"; // 로고 이미지를 import로 가져오기
import logo4 from "../img/goyu112.jpg"; // 로고 이미지를 import로 가져오기
import gonji from "../img/gonji.jpg"; // 로고 이미지를 import로 가져오기
import byunk from "../img/byunk.jpg"; // 로고 이미지를 import로 가져오기
import hampyeng from "../img/hampyeng.jpg"; // 로고 이미지를 import로 가져오기
import seongju from "../img/seongju.jpg"; // 로고 이미지를 import로 가져오기
import sinwon from "../img/sinwon.jpg"; // 로고 이미지를 import로 가져오기
import hanam from "../img/hanam.jpg"; // 로고 이미지를 import로 가져오기
import intro from "../img/intro.png"; // 로고 이미지를 import로 가져오기
import back from "../img/back.png"; // 로고 이미지를 import로 가져오기
import { Button } from "@mui/material";
import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
// 더미 데이터
const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  margin: "10px",
  padding: "15px 30px",
  color: "white",
  backgroundColor: "#9DAE72",
  borderRadius: "5px",
  textDecoration: "none",
  transition: "background-color 0.3s",
  width: "100%", // 부모 요소의 너비에 맞추어 버튼을 100%로 설정
  maxWidth: "500px", // 너무 길어지지 않도록 최대 너비 설정
  textAlign: "center", // 텍스트 가운데 정렬
};
// 메인 컴포넌트
const Goyugu0600: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ko"); // 기본값은 한국어

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ko" ? "en" : "ko"));
  };
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const itemsPerPage = 6; // 페이지당 아이템 수
  const [activeTab, setActiveTab] = useState(0); // 현재 활성화된 탭

  return (
    <div style={{ padding: "0px" }}>
      <Box
        sx={{
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          // marginTop: { xs: "10px" }, // 네비게이션 바 높이에 맞춰서 아래로 내려오도록 설정
          justifyContent: "center",
          height: "60vh", // 화면 높이에 맞추기
          width: "100%", // 부모 Box의 너비에 맞추기 // 화면 너비에 맞추기
          border: "8px solid rgba(255, 245, 225, 0.8)", // 테두리 색상과 두께 설정
          //borderRadius: "16px", // 둥근 테두리 설정
        }}
      >
        {/* 모바일용 비디오 */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)", // 중앙에 배치
            width: "auto", // 너비는 자동으로 설정
            height: "100%", // 높이는 100%로 설정
            objectFit: "contain", // 비디오가 화면을 초과하지 않도록 설정
            zIndex: 0, // 배경으로 설정
          }}
          sx={{
            display: { xs: "block", sm: "none" }, // 모바일 화면에서는 보이고, 큰 화면에서는 숨기도록 설정
          }}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* 오버레이 */}
        {/* <Box
          className="overlay"
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%", // 전체 화면 너비에 맞추기
            height: "100%", // 전체 화면 높이에 맞추기
            backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
            zIndex: 0, // 오버레이가 비디오 위에 오도록 설정
          }}
        /> */}

        {/* 텍스트 */}
        <Box
          className="text"
          sx={{
            position: "relative",
            color: "#333",
            textAlign: "center",
            zIndex: 1,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mb: 2,
              fontSize: {
                xs: "1.1rem", // mobile size (xs)
                sm: "2rem", // tablet size (sm)
                md: "2.5rem", // desktop size (md)
                opacity: 0, // 초기 상태에서 보이지 않도록 설정
                animation: "fadeIn 4s forwards", // 애니메이션 적
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "scale(0.95)" },
                  "100%": { opacity: 1, transform: "scale(1)" },
                },
              },
            }}
          >
            {language === "ko"
              ? "유기견 한마리를 입양한다고"
              : "The world might not change"}
            <br />
            {language === "ko"
              ? "세상이 달라지진 않지만"
              : "if you adopt just one stray dog,"}
            <br />
            {language === "ko"
              ? "그 강아지에게는 온세상이 바뀌는 일입니다."
              : "but for that dog, their whole world changes."}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: {
                xs: "1.2rem", // mobile size (xs)
                opacity: 0, // 초기 상태에서 보이지 않도록 설정
                animation: "fadeIn 4s forwards", // 애니메이션 적
                "@keyframes fadeIn": {
                  "0%": { opacity: 0, transform: "scale(0.95)" },
                  "100%": { opacity: 1, transform: "scale(1)" },
                },
              },
            }}
          >
            {language === "ko"
              ? "고유거 애니밴드입니다."
              : "The world might not change"}
            <br />
            {language === "ko"
              ? "따스한 눈길과 발걸음으로"
              : "Please reach out to our dogs"}
            <br />
            {language === "ko"
              ? "우리 아이들에게 손을 내밀어 주세요"
              : "with a warm gaze and gentle steps."}
          </Typography>
        </Box>
      </Box>
      <div
        style={{
          backgroundColor: "rgba(255, 245, 225, 0.6)", // 오버레이 색상
          // marginTop: "30px",  // 전체 화면에서의 marginTop 설정
          //padding: "20px", // 내용이 화면에서 잘리거나 가까워지지 않도록 패딩 추가 (선택 사항)
        }}
      ></div>
      <Box
        id="with"
        sx={{
          padding: { xs: "20px", sm: "40px" },
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <div style={{ textAlign: "center", padding: "20px" }}>
          <img
            src={logo}
            alt="Cute Dog"
            style={{ width: "100px", borderRadius: "10px" }}
          />
          <Typography
            variant="h4"
            sx={{
              fontSize: { xs: "1.1em", sm: "1.7em" }, // 모바일에서는 1.3em, 큰 화면에서는 1.7em
              color: "#333",
              margin: "20px 0",
              fontWeight: "bold",
            }}
          >
            후원은 마음으로 하는 입양입니다. <br />
            아이들의 세상을 밝혀줄 발걸음에 <br />
            동참해주세요.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95em", sm: "1.2em" }, // 모바일에서는 1em, 큰 화면에서는 1.2em
              color: "#555",
            }}
          >
            우리에게 찾아온 이 아이들의
            <br />
            새로운 희망이 되어주세요.
          </Typography>

          {/* Buttons Section */}
          <div style={{ marginTop: "30px", marginRight: "20px" }}>
            <a
              href="https://mrmweb.hsit.co.kr/v2/?server=Wb%2BZaYV0JAwgOT5NsJauAg==&action=join"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              정기후원 <br />
              (Monthly donation)
            </a>
            <a
              href="https://band.us/band/73964201/post/10"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              봉사신청
              <br /> (Support application)
            </a>
            <a
              href="https://www.instagram.com/aniband_gouku/"
              style={buttonStyle}
              target="_blank"
              rel="noopener noreferrer"
            >
              입양상담하기 <br />
              (Adoption application)
            </a>
          </div>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          marginTop: "20px", // 상단 여백
        }}
      ></Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          padding: { xs: "0 5%", sm: "0 20px" }, // 모바일에서 좌우 패딩을 줄임
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
        >
          (사) 경기도 고양시 덕양구 토당로 52 (토당동) 능곡역프라자 103호 (우)
          90508
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
        >
          MAIL: rniduwl@naver.com <br />
          TEL: 070-4793-2020
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontSize: "0.7rem", marginBottom: "5px" }}
        >
          사업자등록번호: 785-82-00048
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
          COPYRIGHT 2024 사단법인 고유거 ALL RIGHTS RESERVED
        </Typography>
      </Box>

      {/* 소셜 미디어 아이콘 */}
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: { xs: "center", sm: "flex-end" },
          width: { xs: "100%", sm: "auto" },
          boxSizing: "border-box",
          paddingTop: { xs: "10px", sm: 0 }, // 모바일에서 상단 여백 추가
        }}
      >
        <Instagram sx={{ fontSize: "24px", cursor: "pointer" }} />
        <YouTube sx={{ fontSize: "24px", cursor: "pointer" }} />
        <Facebook sx={{ fontSize: "24px", cursor: "pointer" }} />
      </Box>
    </div>
  );
};

export default Goyugu0600;

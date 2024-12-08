import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom"; // 링크를 클릭하기 위한 react-router-dom 사용
import { styled, keyframes } from "@mui/material/styles";
import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../img/goyuLOGO2.png"; // 로고 이미지를 import로 가져오기
import logo2 from "../img/goyu.png"; // 로고 이미지를 import로 가져오기
import video from "../img/video.mp4"; // 로고 이미지를 import로 가져오기
import video3 from "../img/video3.mp4"; // 로고 이미지를 import로 가져오기
import video4 from "../img/video4.mp4"; // 로고 이미지를 import로 가져오기
import video5 from "../img/video5.mp4"; // 로고 이미지를 import로 가져오기
import logo3 from "../img/goyu111.jpg"; // 로고 이미지를 import로 가져오기
import logo4 from "../img/goyu112.jpg"; // 로고 이미지를 import로 가져오기
import intro from "../img/intro.png"; // 로고 이미지를 import로 가져오기
import back from "../img/back.png"; // 로고 이미지를 import로 가져오기
import Grid from "@mui/material/Grid";
import image1 from "../img/image1.jpg";
import image2 from "../img/image2.jpg";
import image3 from "../img/image3.jpg";
import image4 from "../img/image4.jpg";
import image5 from "../img/image5.jpg";
import image6 from "../img/image6.jpg";
import image7 from "../img/image7.jpg";
import image8 from "../img/image8.jpg";
import image9 from "../img/image9.jpg";
import { GlobalStyles } from "@mui/material";

import { IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useTranslation } from "react-i18next"; // i18n 라이브러리 사용 시

const buttonStyle: React.CSSProperties = {
  display: "inline-block",
  margin: "10px",
  padding: "15px 30px",
  color: "white",
  backgroundColor: "#ff6b6b",
  borderRadius: "5px",
  textDecoration: "none",
  transition: "background-color 0.3s",
  width: "100%", // 부모 요소의 너비에 맞추어 버튼을 100%로 설정
  maxWidth: "200px", // 너무 길어지지 않도록 최대 너비 설정
  textAlign: "center", // 텍스트 가운데 정렬
};

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  // 애니메이션 정의
  const fadeIn = keyframes`
0% {
  opacity: 0;
  transform: scale(0.95);
}
100% {
  opacity: 1;
  transform: scale(1);
}
`;

  // 애니메이션이 적용된 이미지 스타일 컴포넌트
  const AnimatedImage = styled("img")({
    width: "100%",
    height: "200px",
    borderRadius: "16px",
    objectFit: "cover",
    opacity: 0,
    transform: "scale(0.95)",
    animation: `${fadeIn} 0.5s ease forwards`, // 애니메이션 적용
  });
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("ko"); // 기본값은 한국어

  const changeLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "ko" ? "en" : "ko"));
  };

  // const changeLanguage = (lng) => {
  //   i18n.changeLanguage(lng);
  // };
  const [showHearts, setShowHearts] = useState(false);

  const handleMouseEnter = () => {
    setShowHearts(true);
  };

  const handleMouseLeave = () => {
    setShowHearts(false);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {/* 상단 네비게이션 바 */}
      <Box
        component="header"
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: { xs: "90px", sm: "100px" },
          backgroundColor: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: { xs: "0 10px", sm: "0 0.5cm" },
          marginRight: "30px", // 왼쪽으로 이동
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          zIndex: 1000,
        }}
      >
        {/* 좌측 로고 */}
        <a href="/">
          <img
            src={logo3}
            alt="Logo"
            style={{ height: "80%", maxHeight: "90px" }}
          />
        </a>

        {/* 데스크톱 메뉴 */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            gap: { sm: "20px" },
            marginLeft: "220px",
            marginRight: "auto",
            justifyContent: "center", // 항목을 중앙 정렬

            flexGrow: 1, // 가능한 너비를 채우도록 설정
          }}
        >
          <a
            href="#about"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 10px",
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거 소개" : "About GoYouGo"}
          </a>
          <a
            href="#dogs"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거의 아이들" : "Our dog's"}
          </a>
          <a
            href="#news"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "고유거의 소식" : "Goyugu news"}
          </a>
          <a
            href="#with"
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "1.2rem",
              fontWeight: "bold",
              padding: "10px 0",
              display: "inline-block",
              margin: "0 20px",
              fontFamily: "'Nanum Gothic', sans-serif", // 나눔고딕 폰트 적용
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            {language === "ko" ? "함께하기" : "With Goyugu"}
          </a>
          <Button
            onClick={() => changeLanguage("en")}
            sx={{
              fontSize: "1rem",
              color: "#333",
              fontWeight: "bold",
              marginLeft: "10px",
              border: "1px solid #ccc",
              padding: "5px 15px",
              display: { xs: "flex", sm: "inline-flex" }, // 모바일과 웹 모두에서 표시
              borderRadius: "20px",
              transition: "color 0.3s ease, transform 0.2s ease", // 부드러운 전환 효과
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#b87a7a")} // 호버 색상
            onMouseOut={(e) => (e.currentTarget.style.color = "black")} // 기본 색상 복원
            onMouseDown={(e) =>
              (e.currentTarget.style.transform = "scale(0.95)")
            } // 클릭 시 약간 축소
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")} // 클릭 해제 시 원래 크기 복원
          >
            EN
          </Button>
        </Box>
        <Button
          onClick={() => changeLanguage("en")}
          sx={{
            fontSize: "1rem",
            color: "#b87a7a",
            fontWeight: "bold",
            border: "1px solid #ccc",
            padding: "0px 1px",
            display: { xs: "flex", sm: "none" },
            borderRadius: "20px",
            marginRight: "120px", // 왼쪽으로 이동
            transition: "background-color 0.3s ease, transform 0.2s ease", // 전환 효과
            "&:hover": {
              backgroundColor: "#f0f0f0", // 호버 시 배경색
            },
            "&:active": {
              transform: "scale(0.95)", // 클릭 시 약간 축소
            },
          }}
        >
          EN
        </Button>
        {/* 모바일 메뉴 (햄버거 아이콘) */}

        <Box
          sx={{
            display: {
              xs: "flex",
              sm: "none",
              justifyContent: "flex-start", // 아이콘을 왼쪽으로 정렬
              width: "100%", // Box의 너비를 전체 화면으로 설정
              position: "absolute", // 아이콘 위치를 절대 위치로 설정
              left: "80vw", // 화면 왼쪽에서 80% 지점에 위치하도록 설정
              paddingLeft: { xs: "150px", md: "80px" }, // 작은 화면에서는 작은 여백, 더 큰 화면에서는 여백을 넓게
            },
          }}
        >
          <IconButton onClick={handleMenuOpen} color="inherit">
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleMenuClose} component="a" href="#about">
              {language === "ko" ? "단체소개" : "About Goyugu"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#dogs">
              {language === "ko" ? "고유거 아이들" : "Our dog's"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#news">
              {language === "ko" ? "고유거 이야기" : "Goyugu news"}
            </MenuItem>
            <MenuItem onClick={handleMenuClose} component="a" href="#with">
              {language === "ko" ? "함께하기" : "With Goyugu"}
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;

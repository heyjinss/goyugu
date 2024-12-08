import * as React from "react";
import { Grid, GlobalStyles, Tabs, Tab } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Button } from "@mui/material";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import back from "../img/goyu_intro.jpg";
import {
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
const theme = createTheme({
  // You can customize your theme here
});

const Goyugu0300: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          position: "relative",
          maxWidth: "800px", // 부모 요소를 벗어나지 않도록 설정
          maxHeight: "180px", // 부모 요소를 벗어나지 않도록 설정
          overflow: "hidden", // 넘치는 부분 제거
          marginTop: 0,
          margin: 0,
          padding: 0, // 공백 제거
          display: "flex", // 중앙 정렬을 위해 flex 사용
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover", // 부모 요소를 꽉 채움 (공백 제거)
          display: "block", // Remove default inline block space
        }}
      >
        <img
          src={back}
          alt="back"
          style={{
            width: "100%", // 부모 요소를 꽉 채우도록 설정
            height: "100%", // 부모 요소를 꽉 채우도록 설정
            objectFit: "cover", // 비율을 유지하면서 꽉 차도록 설정
            margin: 0, // margin 제거
            padding: 0, // padding 제거
          }}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          padding: 0, // padding을 0으로 설정하여 불필요한 여백 제거
          margin: 0, // 불필요한 여백 제거
        }}
      >
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          sx={{
            display: "flex", // Flex로 변경하여 탭들이 균등하게 배치되도록 설정
            justifyContent: "flex-start", // 탭들을 왼쪽에 정렬
            borderBottom: 1,
            borderColor: "divider",
            padding: 0, // 양옆 패딩 제거
            width: "100%", // 부모 요소의 너비를 꽉 채우도록 설정
            boxSizing: "border-box", // 부모 요소의 padding이나 border를 포함한 너비 계산
            objectFit: "cover", // 비율 유지
          }}
        >
          <Tab label="정기후원" sx={{ padding: 0, flex: 1 }} />
          <Tab label="일시후원" sx={{ padding: 0, flex: 1 }} />
          <Tab label="물품후원" sx={{ padding: 0, flex: 1 }} />
          <Tab label="후원목적" sx={{ padding: 0, flex: 1 }} />
        </Tabs>
      </Box>
      <Box
        sx={{
          width: { xs: "100%", sm: "70%" },
          padding: { xs: "0 5%", sm: "0 20px" }, // 모바일에서 좌우 패딩을 줄임
          boxSizing: "border-box",
          marginTop: "20px",
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
    </ThemeProvider>
  );
};

export default Goyugu0300;

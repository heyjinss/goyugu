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
  Instagram,
  YouTube,
  Facebook,
  Twitter,
  GitHub,
} from "@mui/icons-material"; // 아이콘을 사용하기 위한 material-ui 아이콘
import img1 from "../img/image1.jpg";
import img2 from "../img/image2.jpg";
import img3 from "../img/image3.jpg";
import img4 from "../img/image4.jpeg";
import img5 from "../img/image5.jpg";
import img6 from "../img/image6.jpg";
import {
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const theme = createTheme({
  // You can customize your theme here
});

const Goyugu0400: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3개의 카드가 한 행에 배치
          gap: 2, // 카드 간의 간격
          padding: 1, // 외부 패딩
        }}
      >
        {/* 강아지 1 */}
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              아누
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img1}
              alt="Dog 1"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 활발한
            </Typography>
          </Box>
        </Box>

        {/* 강아지 2 */}
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              아린
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img2}
              alt="Dog 2"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 온순한
            </Typography>
          </Box>
        </Box>

        {/* 강아지 3 */}
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              치오
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img3}
              alt="Dog 3"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 친근한
            </Typography>
          </Box>
        </Box>

        {/* 강아지 4 */}
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              코코
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img4}
              alt="Dog 4"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 부드러운
            </Typography>
          </Box>
        </Box>

        {/* 강아지 5 */}
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              아솔
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img5}
              alt="Dog 5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 순한
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            backgroundColor: "#fff",
            border: "1px solid #ddd",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          <Box
            sx={{
              padding: "4px 0",
              borderBottom: "1px solid #ddd",
              textAlign: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: "1rem" }}>
              청심
            </Typography>
          </Box>
          <Box sx={{ flex: 1, padding: 0, borderBottom: "1px solid #ddd" }}>
            <img
              src={img6}
              alt="Dog 5"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                //borderRadius: "8px",
              }}
            />
          </Box>
          <Box sx={{ padding: "4px 0", textAlign: "center" }}>
            <Typography sx={{ fontSize: "0.8rem", color: "#555" }}>
              성격: 순한
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          onClick={() =>
            (window.location.href = "https://www.instagram.com/aniband_gouku/")
          }
          sx={{
            backgroundColor: "#E0E5B6",
            padding: "8px 16px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            color: "#555",
            textTransform: "none",
            boxShadow: "none",
          }}
        >
          애니밴드 아이들 보러가기
        </Button>
      </Box>
      <Box
        sx={{
          width: "100%",
          marginTop: "20px",
          backgroundColor: "#f9f9f9",
          color: "#BDBDBD",
          padding: "20px",
          display: "flex",
          flexDirection: { xs: "column", sm: "row" }, // 모바일에서는 세로 정렬, 큰 화면에서는 가로 정렬
          justifyContent: { xs: "center", sm: "space-between" },
          alignItems: "center",
          textAlign: { xs: "center", sm: "left" },
          boxSizing: "border-box",
          gap: { xs: 2, sm: 0 }, // 모바일에서 요소 간 간격 추가
        }}
      >
        {/* Footer 텍스트 */}
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
          <Typography variant="body2" sx={{ fontSize: "0.8rem" }}>
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
      </Box>
    </ThemeProvider>
  );
};

export default Goyugu0400;

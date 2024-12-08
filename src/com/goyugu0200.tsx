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

import back from "../img/back.png";
import intro from "../img/intro.png";
import organiz from "../img/orgaz.png";
import seoungju from "../img/seongju.jpg";
import care from "../img/care.jpg";
import sleep from "../img/sleep3.jpg";
import adopt_inter from "../img/adopt_inter.jpg";
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

const Goyugu0200: React.FC = () => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          maxWidth: "800px", // 부모 요소를 벗어나지 않도록 설정
          maxHeight: "180px", // 부모 요소를 벗어나지 않도록 설정
          overflow: "hidden", // 넘치는 부분 제거

          margin: 0,
          padding: 0, // 공백 제거
          display: "flex", // 중앙 정렬을 위해 flex 사용
          justifyContent: "center",
          alignItems: "center",
          objectFit: "cover", // 부모 요소를 꽉 채움 (공백 제거)
        }}
      >
        <img
          src={back}
          alt="back"
          style={{
            margin: "0", // 추가: 이미지 여백 제거
            padding: "0", // 추가: 이미지 여백 제거
            maxWidth: "100%", // 부모 요소를 벗어나지 않도록 설정
            maxHeight: "100%", // 부모 요소를 벗어나지 않도록 설정
            objectFit: "cover", // 비율 유지
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

        {/* 탭 콘텐츠 섹션 */}
        {activeTab === 0 && (
          <div>
            <Box
              sx={{
                //backgroundColor: "#E0E5B6", // Light background color
                padding: "16px",
                //borderRadius: "8px", // Rounded corners
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                정기후원은
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.75em", sm: "1.2em" },
                  color: "#555",
                }}
              >
                애니밴드에 입소한 유기견들이 따듯하고 쾌적하게
                <br />
                생계유지를 할 수 있도록 정기적으로 지원하는 방법입니다.
                <br />
                유기동물의 구조와 입양까지
                <br />
                여러분들의 소중한 후원금으로 진행되고 있습니다.
                <br />
                해외입양 비용, 구조후 진료 비용, 수술 비용, 예방접종비용
                <br />
                치료, 임보나 입양을 위한 이동,
                <br />
                동물보호를 위한 캠페인과 행사 등을 위한 목적으로
                <br />
                투명하게 쓰여질것을 약속드립니다.
                <br />
                아이들의 새로운 희망이 되어주세요.
              </Typography>
              <Button
                component="a"
                href="https://mrmweb.hsit.co.kr/v2/?server=Wb%2BZaYV0JAwgOT5NsJauAg==&action=join"
                target="_blank"
                sx={{
                  backgroundColor: "#9DAE72", // 더 진한 배경색
                  width: "70%", // 화면에서 70% 차지
                  padding: "10px", // 더 얇은 높이
                  color: "#fff", // 글자 색
                  fontSize: "1rem", // 글자 크기 줄이기
                  textTransform: "none", // 텍스트 변환 안 함
                  margin: "15px auto", // 가운데 정렬
                  display: "block", // 블록 요소로 설정
                }}
              >
                정기후원 하러가기
              </Button>
            </Box>

            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  후원금 사용 내역은 어디서 볼 수 있나요?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.8em", color: "#555", textAlign: "left" }}
                >
                  후원금 사용 내역은 매 달마다 카페에 공지하고 있습니다.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  기부금 영수증 처리는 어떻게 되나요?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.8em", color: "#555", textAlign: "left" }}
                >
                  기부금 영수증 처리는 매년 12월 카페에 공지하고 있습니다.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <Box
              sx={{
                //backgroundColor: "#E0E5B6", // Light background color
                padding: "16px",
                //borderRadius: "8px", // Rounded corners
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                일시후원은
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.75em", sm: "1.2em" },
                  color: "#555",
                }}
              >
                애니밴드에 입소한 유기견들이 따듯하고 쾌적하게
                <br />
                생계유지를 할 수 있도록 계좌이체로 지원하는 방법입니다.
                <br />
                아이들의 새로운 희망이 되어주세요.
              </Typography>
            </Box>
            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  계좌로 일시 후원하기
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Box
                  sx={{
                    backgroundColor: "#E0E5B6", // 배경 색상
                    padding: "20px 40px", // 안쪽 여백
                    margin: "20px auto", // 바깥 여백 및 가운데 정렬
                    display: "flex",
                    flexDirection: "column", // 세로 정렬
                    alignItems: "center", // 수평 가운데 정렬
                    justifyContent: "center", // 수직 가운데 정렬
                    textAlign: "center", // 텍스트 가운데 정렬
                    maxWidth: "400px", // 최대 가로 너비
                    border: "1px solid #B0B0B0", // 테두리
                    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // 그림자 효과
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "1.2rem",
                      fontWeight: "bold",
                      marginBottom: "10px", // 제목과 내용 사이 간격
                    }}
                  >
                    일시 후원 계좌
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                      marginBottom: "5px", // 항목 간 간격
                    }}
                  >
                    은행 이름: 96-114-100-468
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    예금주명 :사단법인고유거 애니밴드
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: "1rem",
                    }}
                  >
                    계좌 번호: 123-456-789-00
                  </Typography>
                </Box>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  기업후원 신청하기
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.8em", color: "#555", textAlign: "left" }}
                >
                  문의 부탁드립니다.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
        {activeTab === 2 && (
          <div>
            <Box
              sx={{
                //backgroundColor: "#E0E5B6", // Light background color
                padding: "16px",
                //borderRadius: "8px", // Rounded corners
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Soft shadow effect
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.2em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                물품후원은
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "0.75em", sm: "1.2em" },
                  color: "#555",
                }}
              >
                애니밴드에 입소한 유기견들이 따듯하고 쾌적하게
                <br />
                생계유지를 할 수 있도록 지원하는 방법입니다.
                <br />
                사료지원, 봉사자 음료 지원, 이불 및 담요지원, 수건지원,
                <br />
                소형견을 위한 쿠션 지원 간식 등이 필요합니다.
                <br />
                아이들의 새로운 희망이 되어주세요.
              </Typography>
            </Box>
            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  어떤 물품을 후원하면 되나요?
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.8em", color: "#555", textAlign: "left" }}
                >
                  1) ANF 6 free 사료 (소고기와 양고기 둘 다 가능) <br />
                  2) 배변패드 <br />
                  3)수건 및 담요/이불
                  <br />
                  (솜이불과 너무 두꺼운 극세사는 어렵습니다.)
                  <br />
                  4) 봉사자를 위한 음료 등 <br />
                  5) 강아지 집/쿠션 <br />
                  등 다양한 물품에 대한 후원 문의가 필요하시면 <br />
                  연락주세요
                </Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ marginBottom: "10px" }}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                sx={{
                  backgroundColor: "#E0E5B6", // 배경 색 지정
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: "0.8em", sm: "1.2em", textAlign: "left" },
                    color: "#555",
                  }}
                >
                  물품후원 주문 및 배송 요령
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{ fontSize: "0.8em", color: "#555", textAlign: "left" }}
                >
                  1) 입력자에 주문자/수신자 모두 후원자명으로 작성해주세요
                  <br />
                  (어느 천사님께서 보내셨는지 확인하기가 어렵기 때문입니다.){" "}
                  <br />
                  1-1) 주문자명 - 후원자명 <br />
                  1-2) 받는사람 - 고유거애니밴드(후원자명)
                  <br />
                  2) 기부금영수증 신청 - 해당년도 카페 공지 확인
                </Typography>
              </AccordionDetails>
            </Accordion>
          </div>
        )}
        {activeTab === 3 && (
          <div>
            <Box
              sx={{
                backgroundColor: "#F7F7F7", // 부드러운 회색 배경
                padding: "20px",
                //margin: "20px auto", // 상자 간격 및 중앙 정렬
                marginTop: "0px",
                maxWidth: "600px",
                border: "1px solid #E0E0E0", // 얇은 테두리
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // 그림자 효과
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.0em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                구조 및 보호
              </Typography>

              <Box
                component="img"
                src={seoungju} // 이미지 URL (대체 이미지)
                alt="후원 관련 이미지"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px", // 이미지와 내용 간 간격
                  borderRadius: "8px", // 부드러운 모서리
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.7rem",
                  color: "#555", // 텍스트 색상
                  lineHeight: 1.6, // 가독성을 위한 줄 간격
                }}
              >
                후원금은 번식장 구조 개선과 강아지들의 열악한 환경을 개선하는 데
                사용됩니다. 이는 건강 관리와 안전한 보호를 위한 시설 마련을
                목적으로 하며, 더 나아가 유기견의 삶의 질을 높이는 데
                기여합니다.
              </Typography>
            </Box>

            <Box
              sx={{
                backgroundColor: "#F7F7F7",
                padding: "20px",
                //margin: "20px auto",
                maxWidth: "600px",
                marginTop: "0px",
                border: "1px solid #E0E0E0",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.0em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                해외입양
              </Typography>

              <Box
                component="img"
                src={adopt_inter}
                alt="후원 관련 이미지"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px",
                  borderRadius: "8px",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.7rem",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                후원금은 해외입양을 통해 강아지들에게 새로운 가족을 찾아주는
                데에도 사용됩니다. 입양 비용 지원은 유기견들이 따뜻하고 안전한
                환경에서 새로운 삶을 시작할 수 있도록 돕는 중요한 역할을 합니다.
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F7F7F7",
                padding: "20px",
                //margin: "20px auto",
                maxWidth: "600px",
                marginTop: "0px",
                border: "1px solid #E0E0E0",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.0em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                유기견 치료
              </Typography>

              <Box
                component="img"
                src={care}
                alt="후원 관련 이미지"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px",

                  borderRadius: "8px",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.7rem",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                후원금은 치료가 필요한 강아지들에게 소중한 생명을 이어갈 기회를
                제공합니다. 질병이나 부상으로 고통받는 아이들이 따뜻한 보살핌과
                의료지원을 통해 건강을 되찾고, 행복한 삶을 누릴 수 있도록
                돕습니다.
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#F7F7F7",
                padding: "20px",
                //margin: "20px auto",
                marginTop: "0px",
                maxWidth: "600px",
                border: "1px solid #E0E0E0",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: "1.0em", sm: "1.2em" },
                  color: "#555",
                  marginBottom: "8px",
                }}
              >
                보호 및 케어
              </Typography>

              <Box
                component="img"
                src={sleep}
                alt="후원 관련 이E미지"
                sx={{
                  width: "100%",
                  height: "auto",
                  marginBottom: "15px",
                  borderRadius: "8px",
                }}
              />

              <Typography
                variant="body1"
                sx={{
                  fontSize: "0.7rem",
                  color: "#555",
                  lineHeight: 1.6,
                }}
              >
                후원금은 강아지들이 안전하고 편안한 환경에서 지낼 수 있도록 숙식
                제공과 온도 조절을 위한 관리에 사용됩니다. 따뜻하고 안정적인
                공간에서 아이들이 보호받으며 사랑을 느낄 수 있도록 세심한 케어를
                지원합니다.
              </Typography>
            </Box>
          </div>
        )}
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
      </Box>
    </ThemeProvider>
  );
};

export default Goyugu0200;

// import jwt_decode from "jwt-decode"; // jwt_decode 사용을 위해 import
// import { isMobile } from "react-device-detect"; // isMobile 확인을 위한 라이브러리 import

// 공통 헤더 정보 얻기 함수
function fn_getHeader(txCd) {
  // // JWT 토큰이 있으면 decode하여 사용
  // const decodeToken = localStorage.getItem("jwtToken")
  //   ? jwt_decode(localStorage.getItem("jwtToken"))
  //   : null;

  const header = {
    // instCd: decodeToken ? decodeToken.instCd : "000", // 토큰에서 기관 코드 추출, 없으면 '000' 사용
    txCd: txCd, // 트랜잭션 코드
    // txChnlCd: !isMobile ? "01" : "02", // 채널 코드: PC는 '01', 모바일은 '02'
    sessionId: localStorage.getItem("session_id"), // 로컬스토리지에서 session_id 가져옴
    scrnId: localStorage.getItem("scrn_id"), // 로컬스토리지에서 scrn_id 가져옴
    jwtToken: localStorage.getItem("jwtToken"), // JWT 토큰
  };

  return header;
}

// 필요한 함수들을 묶어 default로 export
export default {
  fn_getHeader,
};

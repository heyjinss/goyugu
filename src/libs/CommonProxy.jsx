import API from "./Api";
import * as commonLog from "./CommonLog.jsx";

export function CallAsyncSvc(requestData, options, dispatch) {
  // 설정된 헤더로 요청을 보냅니다. 필요한 경우에만 headers를 전달
  console.log(options);
  let config = {
    headers: { ...options.headers },
  };

  if (options.responseType) {
    config = { ...config, responseType: options.responseType };
  }

  if (options.contentType) {
    config = { ...config, contentType: options.contentType };
  }

  // 서버로부터 데이터 가져오기
  API.post("", requestData, config)
    .then((response) => {
      console.log(options.headers.txCd); // 로깅
      console.log(options.headers);

      if (options.headers) {
        commonLog.log(options.headers.txCd + " : Common Success");
      }

      // 서버 응답 데이터 처리
      try {
        if (typeof options.success === "function") {
          console.log(options.headers);
          console.log(response);
          console.log(response.data);
          dispatch({
            type: "SET_STATE",
            data_node: "fetchedData", // 상태 업데이트 노드
            value: response, // 서버에서 받은 데이터
          });
        }
      } catch (e) {
        commonLog.error(options.headers.txCd, e);
      }
    })
    .catch((error) => {
      // 에러 처리
      if (error.response) {
        const { status, data } = error.response;
        let errorMessage = "";

        switch (status) {
          case 401:
            errorMessage = "인증이 필요합니다.";
            break;
          case 503:
            errorMessage = data.message || "서버가 응답하지 않습니다.";
            break;
          case 404:
            errorMessage = "등록되지 않은 프로그램입니다.";
            break;
          case 505:
            errorMessage = data.message || "잘못된 요청입니다.";
            break;
          default:
            errorMessage = "알 수 없는 오류가 발생했습니다.";
        }

        console.error("Error: ", errorMessage);
        if (typeof options.error === "function") {
          options.error(requestData, data, error.response);
        }
      } else {
        console.error("네트워크 오류가 발생했습니다.");
      }
    });
}

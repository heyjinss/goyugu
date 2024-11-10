import { BrowserRouter as Router, Route } from "react-router-dom";
//import DataGridDemo from "./component/DatagridDemo.tsx";
//import TreeView from "./component/TreeView.tsx";
//import TreeData from "./component/TreeData.tsx";
import AppBar from "./frame/AppBar.tsx";
import PageContainer from "./component/PageContainer.tsx";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Com0100 from "./com/com0100.tsx";
function App() {
  // 백엔드에서 가져온 데이터를 저장할 상태
  const [members, setMembers] = useState([]);

  useEffect(() => {
    axios
      .get("/testDatabaseConnection2")
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정
        setMembers(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <AppBar />
      {/* <Com0100 /> */}
      {/* <Button variant="contained">Hello World</Button>
      <DataGridDemo />
      <TreeView />
      <TreeData /> */}

      {/* 가져온 데이터를 화면에 표시 */}
      <div>
        {/* <h2>백엔드에서 가져온 데이터</h2> */}
        {/* <ul> */}
        {/* {members.map((member) => (
            <li key={member.customerId}>
              ID: {member.fiscalYear}, Name: {member.customerId}, Age:{" "} */}
        {/* {member.parentCustomerId}, Sex Code: {member.customerKoreanNm} */}
        {/* </li> */}
        {/* ))} */}
        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;

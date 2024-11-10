import * as React from "react";
import { DataGridPro, useGridApiRef, GridToolbar } from "@mui/x-data-grid-pro";
import Button from "@mui/material/Button";
import axios from "axios";

export default function ServerSideTreeDataCustomCache() {
  const apiRef = useGridApiRef();
  const [members, setMembers] = React.useState([]); // API 데이터를 위한 상태

  // 백엔드 API 호출하여 데이터 가져오기
  React.useEffect(() => {
    axios
      .get("/testDatabaseConnection")
      .then((response) => {
        // 백엔드에서 가져온 데이터 설정
        setMembers(response.data); // 데이터를 상태에 저장
      })
      .catch((error) => console.log(error));
  }, []);

  // 트리 데이터를 생성하는 함수
  const buildTreeData = (data) => {
    // 트리 구조에 맞게 데이터를 변환
    return data.map((item) => ({
      id: item.id, // 각 항목의 고유 ID
      name: item.name, // 예시 필드: 이름
      age: item.age, // 예시 필드: 이름
      department: item.department,
      children: item.children || [], // 자식 항목이 있으면 children으로 연결
      descendantCount: item.children ? item.children.length : 0, // 자식의 개수
    }));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 }, // ID 컬럼
    { field: "name", headerName: "Name", width: 200 }, // 이름 컬럼
    { field: "age", headerName: "Age", width: 100 }, // 나이 컬럼
    { field: "department", headerName: "Department", width: 200 }, // 부서 컬럼
  ];

  const dataSource = React.useMemo(
    () => ({
      getRows: async (params) => {
        const treeData = buildTreeData(members); // 상태에 저장된 데이터를 트리 구조로 변환
        return {
          rows: treeData,
          rowCount: treeData.length,
        };
      },
      getGroupKey: (row) => row.name, // 그룹화할 필드
      getChildrenCount: (row) => row.descendantCount, // 자식 항목의 개수
    }),
    [members]
  );

  const treeData = React.useMemo(() => buildTreeData(members), [members]);

  return (
    <div style={{ width: "100%" }}>
      <div style={{ height: 400 }}>
        <DataGridPro
          treeData
          apiRef={apiRef}
          rows={treeData} // 변환된 트리 데이터를 rows로 전달
          rowCount={treeData.length} // 전체 데이터 개수 전달
          pagination
          columns={columns}
          pageSizeOptions={[5, 10, 50]}
          slots={{ toolbar: GridToolbar }}
          slotProps={{ toolbar: { showQuickFilter: true } }}
          getTreeDataPath={(row) => row.name.split("/")}
        />
      </div>
    </div>
  );
}

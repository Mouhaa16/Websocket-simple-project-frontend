import React, { useEffect, useState } from "react";
import { Table } from "antd";
import io from "socket.io-client";
import axios from "axios";
const DataPage = () => {
  const socket = io("http://localhost:8999");

  const [Student_info, setStudent_info] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8999/")
      .then((res) => {
        console.log(res.data);
        setStudent_info(res.data);
      })
      .catch((e) => console.log(e));
    return () => {
      socket.on("upload", (result) => {
        setStudent_info(result);
      });
    };
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Sex",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  return (
    <section>
      <div className="container">
        <Table
          style={{
            width: "800px",
            margin: "0 auto",
            marginTop: "50px",
          }}
          columns={columns}
          dataSource={Student_info}
        />
      </div>
    </section>
  );
};

export default DataPage;

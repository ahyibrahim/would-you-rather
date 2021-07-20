import React from "react";
import { DisconnectOutlined } from "@ant-design/icons";
import { Layout, Row, Col, Typography, Space } from "antd";

const { Content, Footer } = Layout;
const { Title } = Typography;

function Page_Not_Found({ location }) {
  return (
    <Layout>
      <Content style={{ padding: "0 50px", height: "100vh" }}>
        <Row
          justify="space-around"
          align="middle"
          style={{ height: "inherit" }}
        >
          <Col>
            <Space direction="vertical" size={30}>
              <Row justify="center">
                <Title level={1}>404</Title>
              </Row>
              <Row justify="center">
                <DisconnectOutlined style={{ fontSize: "64px" }} />
              </Row>
              <Row>
                <Title level={3}>Page Not Found</Title>
              </Row>
            </Space>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
}

export default Page_Not_Found;

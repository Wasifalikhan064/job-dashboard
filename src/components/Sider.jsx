import React from "react";
import { Sidebar } from "flowbite-react";
import {
  CalendarFilled,
  CustomerServiceFilled,
  SettingFilled,
  TeamOutlined,
  ContactsFilled,
  PieChartFilled,
  DatabaseFilled,
} from "@ant-design/icons";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sider() {
  const location = useLocation();
  const [tab, setTab] = useState("");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    setTab(location.pathname);
  }, [location.pathname]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="hidden md:flex">
        <Sidebar>
          <Sidebar.Items>
            <div>
              <Sidebar.ItemGroup>
                <h4 style={{ padding: "10px 16px", color: "#555" }}>
                  Main Menu
                </h4>
                <Link to="/dashboard">
                  <Sidebar.Item
                    active={tab === "/dashboard"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/dashboard" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/dashboard" ? "white" : "inherit",
                    }}
                  >
                    <PieChartFilled
                      style={{
                        color: tab === "/dashboard" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Dashboard
                  </Sidebar.Item>
                </Link>
                <Link to="/recruitment">
                  <Sidebar.Item
                    active={tab === "/recruitment"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/recruitment" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/recruitment" ? "white" : "inherit",
                    }}
                  >
                    <ContactsFilled
                      style={{
                        color: tab === "/recruitment" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Recruitment
                  </Sidebar.Item>
                </Link>
                <Link to="/schedule">
                  <Sidebar.Item
                    active={tab === "/schedule"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/schedule" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/schedule" ? "white" : "inherit",
                    }}
                  >
                    <CalendarFilled
                      style={{
                        color: tab === "/schedule" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Schedule
                  </Sidebar.Item>
                </Link>
                <Link to="/employee">
                  <Sidebar.Item
                    active={tab === "/employee"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/employee" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/employee" ? "white" : "inherit",
                    }}
                  >
                    <TeamOutlined
                      style={{
                        color: tab === "/employee" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Employee
                  </Sidebar.Item>
                </Link>
                <Link to="/department">
                  <Sidebar.Item
                    active={tab === "/department"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/department" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/department" ? "white" : "inherit",
                    }}
                  >
                    <DatabaseFilled
                      style={{
                        color: tab === "/department" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Department
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </div>

            <div>
              <Sidebar.ItemGroup>
                <h4 style={{ padding: "10px 16px", color: "#555" }}>Other</h4>
                <Link to="/support">
                  <Sidebar.Item
                    active={tab === "/support"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/support" ? "#FF5151" : "inherit",
                      backgroundColor: tab === "/support" ? "white" : "inherit",
                    }}
                  >
                    <CustomerServiceFilled
                      style={{
                        color: tab === "/support" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Support
                  </Sidebar.Item>
                </Link>
                <Link to="/settings">
                  <Sidebar.Item
                    active={tab === "/settings"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/settings" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/settings" ? "white" : "inherit",
                    }}
                  >
                    <SettingFilled
                      style={{
                        color: tab === "/settings" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Settings
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </div>
          </Sidebar.Items>
        </Sidebar>
      </div>

      {isSidebarOpen && (
        <div
          className="md:hidden fixed inset-0 z-50"
          onClick={toggleSidebar}
        ></div>
      )}
      <button
        className="md:hidden fixed top-4 left-4 z-70 bg-white p-2 rounded shadow-lg"
        onClick={toggleSidebar}
      >
        <FaBars className="text-gray-600 w-6 h-6" />
      </button>
      <div
        className={`md:hidden fixed left-0 top-0 z-60 h-full w-64 bg-white shadow-lg transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar>
          <Sidebar.Items>
            <div>
              <Sidebar.ItemGroup>
                <h4 style={{ padding: "10px 16px", color: "#555" }}>
                  Main Menu
                </h4>
                <Link to="/dashboard">
                  <Sidebar.Item
                    active={tab === "/dashboard"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/dashboard" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/dashboard" ? "white" : "inherit",
                    }}
                  >
                    <PieChartFilled
                      style={{
                        color: tab === "/dashboard" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Dashboard
                  </Sidebar.Item>
                </Link>
                <Link to="/recruitment">
                  <Sidebar.Item
                    active={tab === "/recruitment"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/recruitment" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/recruitment" ? "white" : "inherit",
                    }}
                  >
                    <ContactsFilled
                      style={{
                        color: tab === "/recruitment" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Recruitment
                  </Sidebar.Item>
                </Link>
                <Link to="/schedule">
                  <Sidebar.Item
                    active={tab === "/schedule"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/schedule" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/schedule" ? "white" : "inherit",
                    }}
                  >
                    <CalendarFilled
                      style={{
                        color: tab === "/schedule" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Schedule
                  </Sidebar.Item>
                </Link>
                <Link to="/employee">
                  <Sidebar.Item
                    active={tab === "/employee"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/employee" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/employee" ? "white" : "inherit",
                    }}
                  >
                    <TeamOutlined
                      style={{
                        color: tab === "/employee" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Employee
                  </Sidebar.Item>
                </Link>
                <Link to="/department">
                  <Sidebar.Item
                    active={tab === "/department"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/department" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/department" ? "white" : "inherit",
                    }}
                  >
                    <DatabaseFilled
                      style={{
                        color: tab === "/department" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Department
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </div>
            <div>
              <Sidebar.ItemGroup>
                <h4 style={{ padding: "10px 16px", color: "#555" }}>Other</h4>
                <Link to="/support">
                  <Sidebar.Item
                    active={tab === "/support"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/support" ? "#FF5151" : "inherit",
                      backgroundColor: tab === "/support" ? "white" : "inherit",
                    }}
                  >
                    <CustomerServiceFilled
                      style={{
                        color: tab === "/support" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Support
                  </Sidebar.Item>
                </Link>
                <Link to="/settings">
                  <Sidebar.Item
                    active={tab === "/settings"}
                    labelColor="dark"
                    as="div"
                    style={{
                      color: tab === "/settings" ? "#FF5151" : "inherit",
                      backgroundColor:
                        tab === "/settings" ? "white" : "inherit",
                    }}
                  >
                    <SettingFilled
                      style={{
                        color: tab === "/settings" ? "#FF5151" : "grey",
                        marginRight: "8px",
                      }}
                    />
                    Settings
                  </Sidebar.Item>
                </Link>
              </Sidebar.ItemGroup>
            </div>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
}

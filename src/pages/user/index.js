import React, { useState } from "react";
import {
  CSidebar,
  CButton,
  CInput,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from "@coreui/react";

import { CIcon } from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";

import Navbar from "../../components/navbar";
import Table from "../../components/table";
import UserEdit from "./userEdit";

import { fixedUsersData } from "../../data/users";

const Users = () => {
  const [usersData, setUsersData] = useState(fixedUsersData);
  const [activeScreen, setActiveScreen] = useState("List");
  const [selectedUser, setSelectedUser] = useState(-1);
  const [statusFilter, setStatusFilter] = useState("All");

  const updateStatus = (position) => {
    let newUsersData = usersData.map((item, index) =>
      index === position ? { ...item, status: "Inactive" } : item
    );

    setUsersData(newUsersData);
  };

  const editUser = (position) => {
    setSelectedUser(position);
    setActiveScreen("Create");
  };

  const fields = [
    { key: "name", label: "Name", _style: { width: "25%" } },
    { key: "username", label: "Username", _style: { width: "25%" } },
    { key: "profile", label: "Profile", _style: { width: "20%" } },
    { key: "status", label: "Status", _style: { width: "15%" } },
    {
      key: "actions",
      label: "Actions",
      _style: { width: "15%" },
      sorter: false,
      filter: false,
    },
  ];

  const list = (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: 20,
        display: "grid",
        // alignItems: "start",
        gridGap: 20,
        gridTemplateRows: "auto 1fr",
      }}
    >
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          gridGap: 36,
        }}
      >
        <CButton
          color={"warning"}
          style={{
            width: "fit-content",
            border: "2px solid black",
            borderRight: "4px solid black",
            borderBottom: "6px solid black",
            color: "white",
          }}
          onClick={() => {
            setActiveScreen("Create");
            setSelectedUser(-1);
          }}
        >
          +Add
        </CButton>
        <div
          style={{
            display: "grid",
            gridAutoFlow: "column",
            alignItems: "center",
            justifyContent: "end",
            gridGap: 12,
          }}
        >
          <span>Status</span>
          <CDropdown style={{ backgroundColor: "white", width: "fit-content" }}>
            <CDropdownToggle
              split
              style={{ borderRadius: 0, textAlign: "start" }}
            >
              {statusFilter}
            </CDropdownToggle>
            <CDropdownMenu>
              <CDropdownItem onClick={() => setStatusFilter("All")}>
                All
              </CDropdownItem>
              <CDropdownItem onClick={() => setStatusFilter("Active")}>
                Active
              </CDropdownItem>
              <CDropdownItem onClick={() => setStatusFilter("Inactive")}>
                Inactive
              </CDropdownItem>
            </CDropdownMenu>
          </CDropdown>
          <CIcon
            size={"xl"}
            style={{ color: "orange" }}
            content={freeSet.cilFilter}
          />
        </div>
        <CInput
          style={{ border: "2px solid black", height: 39 }}
          type="text"
          id="search"
          name="search"
          placeholder="Search"
        />
      </div>
      <Table
        actionEdit={editUser}
        actionUpdate={updateStatus}
        usersData={
          statusFilter !== "All"
            ? usersData.filter((item) => item.status === statusFilter)
            : usersData
        }
        fields={fields}
      />
    </div>
  );

  return (
    <div
      style={{
        width: "100vw",
        height: "calc(100vh - 45px)",
        gridTemplateRows: "auto 1fr",
        display: "grid",
      }}
    >
      <Navbar baseUrl={"Users"} screen={activeScreen} />
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "start",
          gridGap: 24,
          gridTemplateColumns: "auto 1fr",
          paddingRight: "1rem",
          boxSizing: "borderBox",
        }}
      >
        <CSidebar
          fixed={false}
          size={"sm"}
          style={{ backgroundColor: "#730FFF", height: "100%" }}
        >
          <CIcon
            size={"3xl"}
            style={{ color: "white", margin: "3rem auto 0 auto" }}
            content={freeSet.cilGroup}
          />
        </CSidebar>
        {activeScreen === "List" && list}
        {activeScreen === "Create" && (
          <UserEdit
            user={selectedUser >= 0 ? usersData[selectedUser] : undefined}
            return={() => setActiveScreen("List")}
          />
        )}
      </div>
    </div>
  );
};

export default Users;

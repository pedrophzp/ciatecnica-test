import React, { useState } from "react";
import {
  CTabs,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CContainer,
  CRow,
  CCol,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CFormText,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CButton,
} from "@coreui/react";

const Table = (props) => {
  const [expire, setExpire] = useState();
  const [status, setStatus] = useState(props.user?.status || "Active");
  const [profile, setProfile] = useState("Owner");
  const [company, setCompany] = useState("Company1");

  const [username, setUserName] = useState(props.user?.username || "");
  const [firstName, setFirstName] = useState(props.user?.firstName || "");
  const [lastName, setLastName] = useState(props.user?.lastName || "");

  const [phone, setPhone] = useState("");
  const [mobilePhone, setMobilePhone] = useState("");

  const phoneMask = (event) => {
    const regex = /^(([0-9]{3}))([0-9]{3})([0-9]{4})$/g;
    var str = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

    const result = str.replace(regex, "($1) $2-$4");

    return result;
  };

  return (
    <div
      style={{
        marginTop: "2rem",
        marginBottom: "2rem",
      }}
    >
      <CTabs activeTab="userRegistry">
        <CNav variant="tabs">
          <CNavItem style={{ marginLeft: 40, border: "none" }}>
            <CNavLink data-tab="userRegistry">User Registry</CNavLink>
          </CNavItem>
          <CNavItem style={{ border: "none", marginLeft: 2 }}>
            <CNavLink data-tab="profile">Profile</CNavLink>
          </CNavItem>
        </CNav>
        <CTabContent
          style={{
            borderRadius: 2,
            border: "2px solid black",
            minHeight: 520,
            padding: "1rem",
            display: "grid",
            gridTemplateRows: "1fr auto",
          }}
        >
          <CTabPane data-tab="userRegistry">
            <CContainer fluid>
              <CRow>
                <CCol sm="12">
                  <CForm action="" method="post">
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="username"
                      >
                        UserName*
                      </CLabel>
                      <CInput
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        id="username"
                        name="username"
                      />
                    </CFormGroup>
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="fullName"
                      >
                        Full name*
                      </CLabel>
                      <CInput
                        type="text"
                        id="firstName"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <CInput
                        type="text"
                        id="LastName"
                        name="LastName"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </CFormGroup>
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="email"
                      >
                        E-mail address*
                      </CLabel>
                      <CInput
                        type="email"
                        id="email"
                        name="email"
                        placeholder=""
                      />
                    </CFormGroup>
                    <div
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <CFormGroup
                        style={{
                          display: "grid",
                          gridGap: 12,
                          gridAutoFlow: "column",
                          gridTemplateColumns: "150px 1fr",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <CLabel
                          style={{ textAlign: "end" }}
                          className={"mb-0 mr-2"}
                          htmlFor="phone"
                        >
                          Phone Number
                        </CLabel>
                        <CInput
                          type="phone"
                          id="phone"
                          name="phone"
                          onChange={(e) => setPhone(phoneMask(e))}
                          maxLength={10}
                          value={phone}
                          placeholder="(000) 000-0000"
                        />
                      </CFormGroup>
                      <CFormGroup
                        style={{
                          display: "grid",
                          gridGap: 12,
                          gridAutoFlow: "column",
                          gridTemplateColumns: "150px 1fr",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <CLabel
                          style={{ textAlign: "end" }}
                          className={"mb-0 mr-2"}
                          htmlFor="mobilePhone"
                        >
                          Mobile Phone*
                        </CLabel>
                        <CInput
                          type="phone"
                          id="mobilePhone"
                          name="mobilePhone"
                          onChange={(e) => setMobilePhone(phoneMask(e))}
                          maxLength={10}
                          value={mobilePhone}
                          placeholder="(000) 000-0000"
                        />
                      </CFormGroup>
                    </div>
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="password"
                      >
                        Password
                      </CLabel>
                      <CInput
                        style={{ width: "80%" }}
                        type="password"
                        id="password"
                        name="password"
                        placeholder=""
                      />
                    </CFormGroup>
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="confirmPassword"
                      >
                        Confirm Password
                      </CLabel>
                      <CInput
                        style={{ width: "80%" }}
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder=""
                      />
                    </CFormGroup>
                    <CFormText
                      style={{ marginLeft: 162, marginTop: -14 }}
                      className="help-password"
                    >
                      The password must have at least 8 characters, 1 capital
                      letter, 1 special character and numbers.
                    </CFormText>

                    <div
                      style={{
                        display: "grid",
                        marginTop: 14,
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <CFormGroup
                        variant={"custom-radio"}
                        className={"p-0"}
                        style={{
                          display: "grid",
                          gridGap: 12,
                          gridAutoFlow: "column",
                          gridTemplateColumns: "150px 1fr",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <CLabel
                          style={{ textAlign: "end" }}
                          className={"mb-0 mr-2"}
                          htmlFor="expire"
                        >
                          Expire
                        </CLabel>
                        <div
                          style={{
                            display: "grid",
                            gridAutoFlow: "column",
                            gridGap: 20,
                            justifyContent: "start",
                          }}
                        >
                          <div
                            style={{
                              display: "grid",
                              gridAutoFlow: "column",
                              alignItems: "center",
                              textAlign: "start",
                              justifyContent: "start",
                              gridGap: 8,
                            }}
                          >
                            <CInput
                              style={{ width: 20 }}
                              type="radio"
                              id="expireYes"
                              name="expire"
                              placeholder="Yes"
                              value="Yes"
                              onClick={() => setExpire("Yes")}
                            />
                            <span>Yes</span>
                          </div>

                          <div
                            style={{
                              display: "grid",
                              gridAutoFlow: "column",
                              alignItems: "center",
                              textAlign: "start",
                              justifyContent: "start",
                              gridGap: 8,
                            }}
                          >
                            <CInput
                              style={{ width: 20 }}
                              type="radio"
                              id="expireNever"
                              name="expire"
                              placeholder="Never"
                              value="Never"
                              onClick={() => setExpire("Never")}
                            />
                            <span>Never</span>
                          </div>
                        </div>
                      </CFormGroup>
                      {expire === "Yes" && (
                        <CFormGroup
                          className={"mb-0"}
                          style={{
                            display: "grid",
                            gridGap: 12,
                            gridAutoFlow: "column",
                            gridTemplateColumns: "150px 1fr",
                            justifyContent: "start",
                            alignItems: "center",
                          }}
                        >
                          <CLabel
                            style={{ textAlign: "end" }}
                            className={"mb-0 mr-2"}
                            htmlFor="expireDate"
                          >
                            Expire Date
                          </CLabel>
                          <CInput
                            maxLength={8}
                            type="date"
                            id="expireDate"
                            name="expireDate"
                          />
                        </CFormGroup>
                      )}
                    </div>

                    <CFormGroup
                      style={{
                        display: "grid",
                        marginTop: 14,
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="status"
                      >
                        Status
                      </CLabel>
                      <div
                        style={{
                          display: "grid",
                          gridAutoFlow: "column",
                          gridGap: 8,
                          alignItems: "center",
                          justifyContent: "start",
                        }}
                      >
                        <CDropdown
                          style={{
                            height: 35,
                            backgroundColor: "white",
                            width: "fit-content",
                          }}
                        >
                          <CDropdownToggle
                            split
                            style={{ borderRadius: 0, textAlign: "start" }}
                          >
                            {status}
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem onClick={() => setStatus("Active")}>
                              Active
                            </CDropdownItem>
                            <CDropdownItem
                              onClick={() => setStatus("Inactive")}
                            >
                              Inactive
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                        <span>days</span>
                      </div>
                    </CFormGroup>
                  </CForm>
                </CCol>
              </CRow>
            </CContainer>
          </CTabPane>
          <CTabPane data-tab="profile">
            <CContainer fluid>
              <CRow>
                <CCol sm="12">
                  <CForm action="" method="post">
                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="username"
                      >
                        UserName*
                      </CLabel>
                      <CInput
                        value={username}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        id="usernameProfile"
                        name="username"
                      />
                    </CFormGroup>

                    <CFormGroup
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "150px 1fr 1fr",
                        justifyContent: "start",
                        alignItems: "center",
                      }}
                    >
                      <CLabel
                        style={{ textAlign: "end" }}
                        className={"mb-0 mr-2"}
                        htmlFor="fullName"
                      >
                        Full name*
                      </CLabel>
                      <CInput
                        type="text"
                        id="firstNameProfile"
                        name="firstName"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <CInput
                        type="text"
                        id="LastNameProfile"
                        name="LastName"
                        placeholder="Last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </CFormGroup>
                    <div
                      style={{
                        display: "grid",
                        gridGap: 12,
                        gridAutoFlow: "column",
                        gridTemplateColumns: "1fr 1fr",
                      }}
                    >
                      <CFormGroup
                        style={{
                          display: "grid",
                          gridGap: 12,
                          gridAutoFlow: "column",
                          gridTemplateColumns: "150px 1fr",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <CLabel
                          style={{ textAlign: "end" }}
                          className={"mb-0 mr-2"}
                          htmlFor="profile"
                        >
                          Profile
                        </CLabel>
                        <CDropdown
                          style={{
                            height: 35,
                            backgroundColor: "white",
                            width: "fit-content",
                          }}
                        >
                          <CDropdownToggle
                            split
                            style={{ borderRadius: 0, textAlign: "start" }}
                          >
                            {profile}
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem onClick={() => setProfile("Owner")}>
                              Owner
                            </CDropdownItem>
                            <CDropdownItem onClick={() => setProfile("Driver")}>
                              Driver
                            </CDropdownItem>
                            <CDropdownItem onClick={() => setProfile("Office")}>
                              Office
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </CFormGroup>
                      <CFormGroup
                        style={{
                          display: "grid",
                          gridGap: 12,
                          gridAutoFlow: "column",
                          gridTemplateColumns: "150px 1fr",
                          justifyContent: "start",
                          alignItems: "center",
                        }}
                      >
                        <CLabel
                          style={{ textAlign: "end" }}
                          className={"mb-0 mr-2"}
                          htmlFor="company"
                        >
                          Company
                        </CLabel>
                        <CDropdown
                          style={{
                            height: 35,
                            backgroundColor: "white",
                            width: "fit-content",
                          }}
                        >
                          <CDropdownToggle
                            split
                            style={{ borderRadius: 0, textAlign: "start" }}
                          >
                            {company}
                          </CDropdownToggle>
                          <CDropdownMenu>
                            <CDropdownItem
                              onClick={() => setCompany("Company1")}
                            >
                              Company1
                            </CDropdownItem>
                            <CDropdownItem
                              onClick={() => setCompany("Company2")}
                            >
                              Company2
                            </CDropdownItem>
                            <CDropdownItem
                              onClick={() => setCompany("Company3")}
                            >
                              Company3
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </CFormGroup>
                    </div>
                  </CForm>
                </CCol>
              </CRow>
            </CContainer>
          </CTabPane>
          <div
            style={{
              marginTop: "1rem",
              display: "grid",
              gridGap: 12,
              gridAutoFlow: "column",
              justifyContent: "end",
            }}
          >
            <CButton
              color={"warning"}
              style={{
                width: "fit-content",
                border: "2px solid black",
                borderRight: "4px solid black",
                borderBottom: "6px solid black",
                color: "black",
                backgroundColor: "white",
              }}
              onClick={props.return}
            >
              Cancel
            </CButton>
            <CButton
              color={"warning"}
              style={{
                width: "fit-content",
                border: "2px solid black",
                borderRight: "4px solid black",
                borderBottom: "6px solid black",
                color: "white",
              }}
              onClick={props.return}
            >
              Save
            </CButton>
          </div>
        </CTabContent>
      </CTabs>
    </div>
  );
};

export default Table;

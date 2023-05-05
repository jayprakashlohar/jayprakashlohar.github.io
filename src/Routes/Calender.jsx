import React from "react";
// import GitHubCalendar from "react-github-calendar";

export const Calender = () => {
  // const selectLastHalfYear = (contributions) => {
  //   const currentYear = new Date().getFullYear();
  //   const currentMonth = new Date().getMonth();
  //   const shownMonths = 6;

  //   return contributions.filter((day) => {
  //     const date = new Date(day.date);
  //     const monthOfDay = date.getMonth();

  //     return (
  //       date.getFullYear() === currentYear &&
  //       monthOfDay > currentMonth - shownMonths &&
  //       monthOfDay <= currentMonth
  //     );
  //   });
  // };
  return (
    <div
      className="box"
      style={{
        border: "1px solid  #f0f0f0",
        width: "85%",
        margin: "auto",
        marginBottom: "50px",
        paddingTop: "25px",
        backgroundColor: "rgba(245, 218, 178, 0.158)",
        transition: " all 0.3s ease",
      }}
    >
      <div>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          My Github Calender
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
          className="react-activity-calendar"
          src="https://ghchart.rshah.org/jayprakashlohar"
          alt="jay prakash lohar"
        />
        {/* <GitHubCalendar */}
        {/* // className="react-activity-calendar" // username="jayprakashlohar" // */}
        {/* /> */}
      </div>
      <div
        style={{
          marginTop: "60px",
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        }}
      >
        <img
          alt="jay"
          src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=jayprakashlohar&theme=github_dark"
          align="center"
        />
      </div>
    </div>
  );
};

import React from "react";
import styles from "./ChatComponent.module.css";

interface UserProfileProps {
  userData: {
    name: string;
    language: string;
    appointments: Array<{
      date: string;
      description: string;
    }>;
  };
}

const UserProfile: React.FC<UserProfileProps> = ({ userData }) => {
  return (
    <div className={styles.userProfile}>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5db8042574203c03fa40661834c9645d4355a7b36255c2af281ddb99a0d844a7?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
        alt=""
        className={styles.menuIcon}
      />
      <div className={styles.userInfo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8733defaa65922dd9b2d01e995d90f7d15fdd6b54a80d9028bc3e837b04531df?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
          alt=""
          className={styles.userIcon}
        />
        <div className={styles.userName}>{userData.name}</div>
        <div className={styles.languageTag}>
          <span>{userData.language}</span>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ecfdda06ef8827a6b541e7c0546cc844aecfbd65e981453516e0a58e5a00eec?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
            alt=""
            className={styles.dropdownIcon}
          />
        </div>
      </div>
      <div className={styles.appointmentList}>
        {userData.appointments.map((appointment, index) => (
          <div key={index} className={styles.appointment}>
            <div className={styles.appointmentDate}>{appointment.date}</div>
            <div className={styles.appointmentDescription}>
              {appointment.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;

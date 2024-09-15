import React from 'react';
import styles from './SignIn.module.css';

const SocialIcons = () => {
  const icons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/72df66de6ae94bd3c0813edbf0e9f19645471fbe0fee5869f88cdb5116289878?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2", alt: "Facebook icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/1b43ffb53e9602bb842a4c78301c2c03d4dec1f1b3d863c7f476c75057298b2c?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2", alt: "Twitter icon" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f16319c0d7590ecd0a11afcf9c92909516deee9313cb1ceb788cfd1024fa0b86?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2", alt: "Instagram icon" }
  ];

  return (
    <div className={styles.socialIcons}>
      {icons.map((icon, index) => (
        <img 
          key={index}
          loading="lazy" 
          src={icon.src} 
          className={styles.socialIcon} 
          alt={icon.alt}
        />
      ))}
    </div>
  );
};

export default SocialIcons;
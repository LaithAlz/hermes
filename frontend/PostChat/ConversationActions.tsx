import React from "react";
import styles from "./PostChat.module.css";

interface ActionButtonProps {
  text: string;
  isPrimary?: boolean;
  icon?: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  text,
  isPrimary = false,
  icon,
}) => {
  const buttonClass = isPrimary ? styles.primaryAction : styles.secondaryAction;
  return (
    <button className={buttonClass}>
      {text}
      {icon && <img src={icon} alt="" className={styles.actionIcon} />}
    </button>
  );
};

const ConversationActions: React.FC = () => {
  return (
    <div className={styles.actionContainer}>
      <ActionButton
        text="Share conversation"
        icon="https://cdn.builder.io/api/v1/image/assets/TEMP/a82ca3f1ef4e482f3c54eb81871b8bf9c6a8ad7864691e7daab4df021db43ddb?placeholderIfAbsent=true&apiKey=1198155fd72e422389e8f557dc5272e2"
      />
      <ActionButton text="Discard conversation" />
      <ActionButton text="Save conversation" isPrimary />
    </div>
  );
};

export default ConversationActions;

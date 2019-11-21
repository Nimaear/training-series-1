import React, { useEffect, useState, useCallback } from "react";

interface ExampleProps {
  defaultMessage: number;
  max?: number;
  onChange?: (value: number) => void;
}

const Example: React.FC<ExampleProps> = ({
  onChange,
  defaultMessage,
  max = 10
}) => {
  const [message, setMessage] = useState(defaultMessage);

  const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    let newMessage = parseInt(event.currentTarget.value, 10);
    if (newMessage > max) {
      newMessage = 0;
    }
    setMessage(newMessage);
    if (onChange) {
      onChange(newMessage);
    }
  };

  useEffect(() => {
    setMessage(defaultMessage);
  }, [defaultMessage, setMessage]);

  return (
    <div style={{ position: "absolute", top: 0, right: 0 }}>
      <input value={message.toString()} onChange={handleChange} />
    </div>
  );
};

export default Example;

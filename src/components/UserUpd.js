import React, { useEffect } from "react";

const UserUpd = ({ message, clear }) => {
  useEffect(() => {
    const timer = setTimeout(clear, 3000);
    return () => clearTimeout(timer);
  }, [clear]);

  return <div className="alert alert-info">{message}</div>;
};

export default UserUpd;

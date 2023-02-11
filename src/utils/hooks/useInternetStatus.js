import { useEffect, useState } from "react";

const useInternetStatus = () => {
  const [status, setStatus] = useState(true);

  const handleOnline = () => {
    setStatus(true);
  };
  const handleOffline = () => {
    setStatus(false);
  };
  useEffect(() => {
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // returns true(when online) and false(when offline)
  return status;
};

export default useInternetStatus;

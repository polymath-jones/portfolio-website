import React, { useEffect, useState } from "react";

const ErrorLabel: React.FC<{ error?: string; perm?: boolean; setError?: (error: string) => void }> = ({
  error,
  perm = false,
  setError,
}) => {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (error) {
      setDisplay(error);

      if (!perm) {
        setTimeout(() => {
          if (setError) {
            setError("");
          } else {
            setDisplay("");
          }
        }, 5000);
      }
    } else {
      setDisplay("");
    }
  }, [error]);

  return (
    <>
      {display ? (
        <div className="w-full bg-red-500 bg-opacity-20 text-red-500 text-1xs font-medium py-2 px-2.5 text-center mb-6 rounded-xl">
          <span className="inline-block">{display}</span>
        </div>
      ) : null}
    </>
  );
};

export default ErrorLabel;

import { useState } from "react";

export const useValiddate = (options) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (string) => {
    setValue(string);
    if (options.regex.test(string)) {
      setError(false);
      setErrorMessage("");
    } else {
      setError(true);
      setErrorMessage(options.error);
    }
  };

  const onRegexTest = () => {
    if (options.regex.test(value)) {
      setError(false);
    } else {
      setErrorMessage(options.error);
      setError(true);
    }
  };

  const validate = options.regex.test(value) ? false : true;

  const handleBlur = () => {
    if (options.regex.test(value)) {
      setError(false);
    } else {
      setErrorMessage(options.error);
      setError(true);
    }
  };

  return {
    value,
    error,
    errorMessage,
    handleChange,
    setErrorMessage,
    onRegexTest,
    handleBlur,
    validate
  };
};

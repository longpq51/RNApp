const useValidatePassword = input => {
  return input.length > 7 && input.length < 15 ? true : false;
};

export default useValidatePassword;

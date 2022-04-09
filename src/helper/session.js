
export const persistSession = (token) => localStorage.setItem('authentication-token-user',JSON.stringify(token));


export const deleteSession = () => localStorage.removeItem('authentication-token-user');

export const getSession = () =>localStorage.getItem('authentication-token-user');


export const hasToken = () => {
  const authToken = getSession();
  JSON.parse(authToken)
  if (authToken && authToken !== '') {
   

      return true;
  }
  return false;
};

export const getUserData = () => {
  const authToken = getSession();
  JSON.parse(authToken);
  // console.log(authToken);

  if (authToken && authToken !== '') {
    try {
      return JSON.parse(authToken).user;
    } catch (err) {
      return undefined;
    }
  }
  return undefined;
}


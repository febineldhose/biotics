const apicall = async (data, success, error) => {
  //  here we use data from where the function is called
  //  it includes url,headers,body, ...etc
  //  success is a call back fn that user can use,and recieve data after the fetching
  // error is also a call back function to catch errors

  const {url, method, headers, body} = data;
  const fetching = await fetch(url, {headers, method, body})
    .then(res => res.json())
    .then(res => {
      return success && success(res);
    })
    .catch(e => {
      return error && error(e);
    });
  return fetching;
};
export default apicall;

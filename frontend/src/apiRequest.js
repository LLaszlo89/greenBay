const sendHttpRequest = async (method, url, data, config = { "Content-Type": "application/json" } ) => {
  try {
    const response = await fetch(url, {
      method: method ,
      body: JSON.stringify(data), 
      headers: data ? config : {}
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default sendHttpRequest;

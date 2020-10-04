const sendHttpRequest = async (method, url, data) => {
  try {
    const response = await fetch(url, {
      method: method,
      body: JSON.stringify(data),
      headers: data ? { "Content-Type": "application/json" } : {},
    });
    return await response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
export default sendHttpRequest;

export const saveData = (data) => {
  console.log(data);
    localStorage.setItem('userData', JSON.stringify(data));
  };
  
  export const getData = () => {
    const data = localStorage.getItem('userData');
    return data ? JSON.parse(data) : [];
    console.log(data);
  };
export const choseJob=(data)=>{
    return{
        type:'jobs',
        payload:data,
    }
}
export const changeRole = (data) => {
  return {
    type: "user",
    payload: data,
  };
};
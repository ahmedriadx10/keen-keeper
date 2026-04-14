
const useFriendPromise = async () => {
  
  const res=await fetch('/friendsData.json')
  return res.json()


};

export default useFriendPromise;
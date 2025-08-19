import { useNavigate } from "react-router-dom";


const useLanding =()=>{
  const navigate = useNavigate() 
  const handleNavigate =()=>{
     navigate('/projects')
  }

  return {
    handleNavigate
}
}

export default useLanding;
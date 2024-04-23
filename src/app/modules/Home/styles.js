
import styled from "@emotion/styled";
export const Title = styled.h1({
    color:' #165a72',
    margin:' 5px auto',
    fontSize:'5em',
    textAlign:'center',
    position: 'absolute', 
    top: '50%', 
    left: '55%', 
    transform: 'translate(-50%, -50%)', 
    zIndex: 1,
    '@media (max-width: 768px)': {
      fontSize: '60px',
    },
    '@media (max-width: 576px)': {
      fontSize: '40px',
    },
    
  });

  
  
  
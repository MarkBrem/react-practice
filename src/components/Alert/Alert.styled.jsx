import  styled  from 'styled-components'

export const AlertStyled = styled.p`

    line-height: 1.5;
    padding: 10px 20px;
    background-color: ${({type})=>{
        switch (type) {
            case "error":
                
            return 'red'

            case "warning":
            return 'orange'

            case "success":
            return 'green'
            default:
                return 'grey'
        }
    }};
    color: #fff;
    

  
  /* .error {
    composes: alert;
    background-color: red;
  }
  
  .warning {
    composes: alert;
    background-color: orange;
  }
  
  .success {
    composes: alert;
    background-color: green;
  } */
`
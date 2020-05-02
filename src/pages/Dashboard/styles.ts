import styled from 'styled-components';

export const Navbar = styled.div`

  display: flex;
  align-items: center;

  h2{
    margin-left: 5px;
    color: #656565;
  }

  img{
    height: 50px;
    width: 50px;
  }
`;

export const Title = styled.h1`

  margin-top: 80px;
  
  font-size: 48px;
  color: #656565;
  max-width: 450px;
  line-height: 56px;


`;

export const Form = styled.form`

  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input{
    flex: 1;
    height: 65px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #656565;
    border-right: 0;

    &::placeholder{
      color: grey;
      font-size: 16px;
    }
  }

  button{
    width: 210px;
    height: 65px;
    background: #1a73e8;
    border: 0;
    border-radius: 0px 5px 5px 0px;
    color: white;
    font-weight: bold;
    transition: background 0.2s;


    &:hover{
      background: grey;
    }
    
  }
`;

export const Contacts = styled.div`
    margin-top: 20px;
    max-width: 700px;

    

    img{
      width: 70px;
      height: 70px;
      border-radius: 50%;
    }

    div{
      margin: 0 16px;
      flex: 1;

      strong{
        font-size: 20px;
        color:#656565; 
      }
      p{
        font-size: 15px;
        color:#7a7a7b; 
      }
    }

    a{
      text-decoration: none;
      display: flex;
      align-items: center;
      background: #ffffff;
      border-radius: 5px;
      width: 100%;
      padding: 24px;   
      transition: transform 0.2s;

      &:hover{
        transform: translate(15px);

      }

      & + a{
        margin-top: 16px;
      }     
    }
`;

export const SingIn = styled.span`
  
    a{
      margin-top: 20px;
      margin-left: 30%;
      color: #1a73e8;
      text-decoration: none;
      display: flex;
      align-items: center;

      svg{
        margin-left: 7px;
      }
    }
`;
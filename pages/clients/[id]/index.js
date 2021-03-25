import React from "react";
import { useRouter } from 'next/router'

const ClientsProjectPage = () => {
  
const router = useRouter();

  const onClickHandler = () => {
    //load data etc
    router.push('/clients/max/projectA');
  }
  
    return (
    <div>
      <h1>The Projects of a given client</h1>
      <button onClick={onClickHandler} >Load Project A</button>
    </div>
  );
};

export default ClientsProjectPage;

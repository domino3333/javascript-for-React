import { useState } from "react";
import { useSearchParams, useParams } from "react-router-dom"
import Button from './Button'
import Header from './Header';


const Edit = () => {

  const params = useParams();

  return (<>
    <h2>{params.id}edit</h2>
  </>
  )
}

export default Edit
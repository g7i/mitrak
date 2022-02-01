import React from 'react'
import {useParams} from "react-router-dom";
import CSE from "./cse/New";

export default function Department() {
  const {route} = useParams();
  const pages = {
    cse: <CSE />
  }
  return pages[route];
}

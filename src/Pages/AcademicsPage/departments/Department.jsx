import React from 'react'
import {useParams} from "react-router-dom";
import CSE from "./cse/New";
import EE from "./electrical/New";
import CE from "./civil/New";
import ME from "./mechanical/New";

export default function Department() {
  const {route} = useParams();
  const pages = {
    cse: <CSE />,
    ee: <EE />,
    ce: <CE />,
    me: <ME />,
  }
  return pages[route];
}

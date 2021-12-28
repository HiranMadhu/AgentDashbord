import React from 'react'
import { BsCircle, BsCheckCircleFill } from 'react-icons/bs';
import { AiOutlineEdit, AiOutlineEye  } from 'react-icons/ai';

import { IconContext } from "react-icons";

export const IBsCircle = (props) => {
    return (
        <IconContext.Provider value={{ color: "#C1C1C1", className: "global-class-name" }}>
            <BsCircle size="1.2em"/>
        </IconContext.Provider>
    )
}

export const IBsCheckCircleFill = (props) => {
    return (
        <IconContext.Provider value={{ color: "#9ADA44", className: "global-class-name" }}>
            <BsCheckCircleFill size="1.2em" />
        </IconContext.Provider>
    )
}

export const IAiOutlineEdit = (props) => {
    return (
        <IconContext.Provider value={{ color: "#FCC236", className: "global-class-name" }}>
            <AiOutlineEdit size="1.2em" />
        </IconContext.Provider>
    )
}
export const IAiOutlineEye = (props) => {
    return (
        <IconContext.Provider value={{ color: "#FCC236", className: "global-class-name" }}>
            <AiOutlineEye size="1.2em" />
        </IconContext.Provider>
    )
}
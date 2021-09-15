import React from "react";
import ImageCard from "./ImageCard";
import logo from 'C://sandbox/projects/tutorials/react-tutorial/src/logo.svg';
import {Meta} from '@storybook/react';

export const DefaultImageCard = () => {
    return <ImageCard   src={logo} 
                        caption="React Logo"
                        onClick={undefined}/>
};

export const WithButtonImageCard = () => {
    return <ImageCard   src={logo} 
                        caption="React Logo"
                        onClick={ ()=>{alert("click")} }
            />
};

export default {
    component: DefaultImageCard,
    title: 'Components/ImageCard',
} as Meta;
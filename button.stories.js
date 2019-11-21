import React, { Component } from 'react'
import './components/header/buttonComponent.css'
import { HeaderComponent } from './components/header/buttonComponent'

export default{
    title: 'Button miXin'
};

const deleteSomething = () => {
    alert('Esti sigur ca vrei sa stergi?');
}

export const button = () => <ButtonComponent methodToRun={deleteSomething} name="Delete"></ButtonComponent>
import React from 'react';
import './App.css'
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import { Data } from "./assets/data/data";
import Dashboard from "./components/Dashboard";

Chart.register(CategoryScale);

export default function App() {


  return (
    <div className="App">
      <Dashboard Data={Data} />
    </div>
  );
}
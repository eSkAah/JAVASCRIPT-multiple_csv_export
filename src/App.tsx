import './App.css';
import {FC, useState} from "react";
import {ExportCsv} from "./components/export-csv";

export const App : FC = () => {

  const budgetData = [
      {
        budgetId: "98765454-9876546-8798744",
        id: "999999-888888-7777777",
        label: "Peinture",
        lines: [
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Bathroom Walls", plannedBudget: 65411},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Room Walls", plannedBudget: 8941651},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Bedrooms Walls", plannedBudget: 3246},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Outside Walls", plannedBudget: 665145},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Desktop Walls", plannedBudget: 541552},
        ]
      },
      {
        budgetId: "98765454-9876546-8798744",
        id: "544111-66325-8744",
        label: "Carriage",
        lines: [
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Bathroom", plannedBudget: 565654},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Room", plannedBudget: 4651651},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Bedrooms Walls", plannedBudget: 44845},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Outside Walls", plannedBudget: 225415},
          {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Desktop Walls", plannedBudget: 365412},
        ]
      },
    {
      budgetId: "98765454-9876546-8798744",
      id: "544111-66325-8744",
      label: "House",
      lines: [
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test1", plannedBudget: 565654},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test2", plannedBudget: 4651651},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test3", plannedBudget: 44845},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test4", plannedBudget: 225415},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test4", plannedBudget: 365412},
      ]
    },
    {
      budgetId: "98765454-9876546-8798744",
      id: "544111-66325-8744",
      label: "Garden",
      lines: [
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test1", plannedBudget: 565654},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test2", plannedBudget: 4651651},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test3", plannedBudget: 44845},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test4", plannedBudget: 225415},
        {budgetId: "98765454-9876546-8798744", id: "45sdf48-sdf841sd5df-sdf54sdf", label: "Test4", plannedBudget: 365412},
      ]
    },

  ];

  console.log(budgetData[0]);

  return (
      <>
        <h1>Export data as .CSV DEMO</h1>
        <ExportCsv data={budgetData}  />
      </>

  );
}


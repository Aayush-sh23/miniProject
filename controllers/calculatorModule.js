const express = require('express');
const calculator= require('../routes/calculatorRoutes')
const calculation = async (req, res) => {
  const { number1, number2, operation } = req.body;

  if (number1 === undefined || number2 === undefined || !operation) {
    return res.status(400).json({ msg: "Please provide  all the details" });
  }

  const num1 = Number(number1);
  const num2 = Number(number2);

  if (isNaN(num1) || isNaN(num2)) {
    return res.status(400).json({ msg: "Inputs must be valid numbers" });
  }

  let result;
  switch (operation) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      if (num2 === 0) {
        return res.status(400).json({ msg: "Cannot divide by zero" });
      }
      result = num1 / num2;
      break;
    default:
      return res.status(400).json({ msg: "Invalid operation" });
  }

  return res.status(200).json({ result });
};

module.exports = { calculation };

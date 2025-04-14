import React from "react";

function ExpenseTable({ expenses, onDelete }) {
  return (
    <table>
        <thead>
            <tr>
                <th>Expense</th>
                <th>Description</th>
                <th>Category</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {expenses.map((expense) => (
                <tr key={expense.id}>
                    <td>{expense.expense}</td>
                    <td>{expense.description}</td>
                    <td>{expense.category}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.date}</td>
                    <td>
                           <button
                                onClick={() => onDelete(expense.id)} className="delete-btn">
                                 Del
                            </button>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>
  );
}

export default ExpenseTable;

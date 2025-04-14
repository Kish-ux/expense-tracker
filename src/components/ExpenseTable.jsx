import React from 'react';

function ExpenseTable({ expenses }) {
    return (
        <div className="expense-table-wrapper">
            <input className="search-bar" placeholder="🔍 Search expenses..." disabled />
            <table className="expense-table">
                <thead>
                    <tr>
                        <th>Expense</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {expenses.map((exp) => (
                       <tr key={exp.id}>
                            <td>{exp.name}</td>
                            <td>{exp.description}</td>
                            <td>{exp.category}</td>
                            <td>{exp.amount}</td>
                            <td>{exp.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ExpenseTable;
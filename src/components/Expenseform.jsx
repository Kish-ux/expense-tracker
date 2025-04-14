import React, { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
    const [expense, setExpense] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");
    const [error, setError] = useState("");  // Error state to show validation message

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        if (!(expense && description && category && amount && date)) {
            setError("Please fill all fields.");
            return;
        }

        // Check if amount is a valid number
        if (isNaN(amount) || amount <= 0) {
            setError("Please enter a valid amount.");
            return;
        }

        // Reset error if form is valid
        setError("");

        const newExpense = { expense, description, category, amount, date };
        onAddExpense(newExpense);

        setExpense("");
        setDescription("");
        setCategory("");
        setAmount("");
        setDate("");
    };

  return (
    <form onSubmit={handleSubmit} className="expense-form">
        <input 
           type="text"
           placeholder='Expense'
           value={expense}
           onChange={(e) => setExpense(e.target.value)} />

         <input 
           type="text"
           placeholder='Description'
           value={description}
           onChange={(e) => setDescription(e.target.value)} />

         <input 
           type="text"
           placeholder='Category'
           value={category}
           onChange={(e) => setCategory(e.target.value)} />

         <input 
           type="text"
           placeholder='Amount'
           value={amount}
           onChange={(e) => setAmount(e.target.value)} />

         <input 
           type="date"
           placeholder='date'
           value={date}
           onChange={(e) => setDate(e.target.value)} />

        {error && <p className="error">{error}</p>}  {/* Error message display */}

        <button type='submit'>Add Expense</button>              
    </form>
  ) 
}   

export default ExpenseForm;

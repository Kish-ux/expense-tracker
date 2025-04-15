import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import initialExpenses from './Data/expesesData'; 
import './App.css';

function App() {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchTerm, setSearchTerm] = useState('');

  const handleAddExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleSort = (key) => {
    const sorted = [...expenses].sort((a, b) =>
      a[key]?.toString().localeCompare(b[key]?.toString())
    );
    setExpenses(sorted);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return (
      expense.name.toLowerCase().includes(searchTerm) || 
      expense.description.toLowerCase().includes(searchTerm)
    );
  });

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Start keeping control of your finances</p>
      <div className="content">
        <ExpenseForm onAddExpense={handleAddExpense} />
        <div className="search-table-container">
          <SearchBar onSearch={handleSearch} />
          <ExpenseTable
            expenses={filteredExpenses}
            onDelete={handleDelete}
            onSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

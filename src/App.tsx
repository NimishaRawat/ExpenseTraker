import { useState } from "react";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";

import categories from "./expense-tracker/Categories";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Bucket", amount: 11, category: "Utilities" },
    { id: 2, description: "Paneer", amount: 101, category: "Groceries" },
    { id: 3, description: "Shinchan", amount: 1, category: "Entertainment" },
    { id: 4, description: "Kapil Sharma Show", amount: 1, category: "Entertainment" },
    { id: 5, description: "Majic ward", amount: 11, category: "Utilities" },
    { id: 6, description: "Bheem ka ladu", amount: 101, category: "Groceries" },
    { id: 7, description: "Uri", amount: 11, category: "Movies" },
    { id: 8, description: "Hungama", amount: 101, category: "Movies" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseForm onSubmit={expense => setExpenses([...expenses,{...expense, id: expenses.length + 1}])
        }/>
      </div>
      <ExpenseFilter
        onSelectCategory={(category) => setSelectedCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
    </div>
  );
}

export default App;

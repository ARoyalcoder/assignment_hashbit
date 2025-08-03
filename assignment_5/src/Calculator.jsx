import { useState } from 'react';

export default function Calculator() {
  const [inputs, setInputs] = useState({ num1: '', num2: '' });
  const [result, setResult] = useState('');

  const operations = [
    { label: 'Add', value: 'add', color: 'bg-blue-500 hover:bg-blue-600' },
    { label: 'Subtract', value: 'subtract', color: 'bg-yellow-500 hover:bg-yellow-600' },
    { label: 'Multiply', value: 'multiply', color: 'bg-green-500 hover:bg-green-600' },
    { label: 'Divide', value: 'divide', color: 'bg-red-500 hover:bg-red-600' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const calculate = (operation) => {
    const a = parseFloat(inputs.num1);
    const b = parseFloat(inputs.num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'subtract':
        res = a - b;
        break;
      case 'multiply':
        res = a * b;
        break;
      case 'divide':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      default:
        res = 'Invalid operation';
    }
    setResult(`Result: ${res}`);
  };

  const clear = () => {
    setInputs({ num1: '', num2: '' });
    setResult('');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Dynamic React Calculator</h2>

        <input
          name="num1"
          type="number"
          value={inputs.num1}
          onChange={handleChange}
          placeholder="Enter first number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400"
        />

        <input
          name="num2"
          type="number"
          value={inputs.num2}
          onChange={handleChange}
          placeholder="Enter second number"
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-400  "
        />

        <div className="grid grid-cols-2 gap-2">
          {operations.map((op) => (
            <button
              key={op.value}
              onClick={() => calculate(op.value)}
              className={`w-full py-2 text-white rounded-md ${op.color}`}
            >
              {op.label}
            </button>
          ))}
        </div>

        <button
          onClick={clear}
          className="w-full py-2 mt-2 bg-gray-500 hover:bg-gray-600 text-white rounded-md"
        >
          Clear
        </button>

        <div className="text-center text-lg font-semibold text-gray-700 mt-4">
          {result}
        </div>
      </div>
    </div>
  );
}

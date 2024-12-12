import React, { useState, useEffect } from 'react';
import './styles/style.css'; 
import TransactionTable from './components/TransactionsTable';
import StatisticsBox from './components/StatisticsBox';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import MonthSelector from './components/MonthSelector';
import SearchBox from './components/SearchBox';
import { fetchTransactions, fetchStatistics, fetchBarChartData, fetchPieChartData } from './services/transactionService';

function App() {
  const [selectedMonth, setSelectedMonth] = useState('03'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [transactions, setTransactions] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [barChartData, setBarChartData] = useState([]);
  const [pieChartData, setPieChartData] = useState([]);

  // Fetch data from backend
  useEffect(() => {
    const loadData = async () => {
      try {
        // Fetch transactions
        const transactionsData = await fetchTransactions(selectedMonth, searchQuery, page, perPage);
        setTransactions(transactionsData);
  
        // Fetch statistics
        const statisticsData = await fetchStatistics(selectedMonth);
        setStatistics(statisticsData || {}); // Fallback to empty object
  
        // Fetch bar chart data
        const barChart = await fetchBarChartData(selectedMonth);
        setBarChartData(barChart || []); // Fallback to empty array
  
        // Fetch pie chart data
        const pieChart = await fetchPieChartData(selectedMonth);
        setPieChartData(pieChart || []); // Fallback to empty array
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    loadData();
  }, [selectedMonth, searchQuery, page, perPage]);
  

  return (
    <div className="App">
      <div className='dash'>
      <h1>Transaction Dashboard</h1>
      </div>

      {/* Month Selector */}
      <MonthSelector selectedMonth={selectedMonth} setSelectedMonth={setSelectedMonth} />

      {/* Search Box */}
      <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Transaction Statistics */}
      <StatisticsBox statistics={statistics} />

      {/* Transaction Table */}
      <TransactionTable
        selectedMonth={selectedMonth}
        searchQuery={searchQuery}
        transactions={transactions}
        page={page}
        perPage={perPage}
        setPage={setPage}
      />

      {/* Bar Chart */}
      <BarChart barChartData={barChartData} selectedMonth={selectedMonth} />

      {/* Pie Chart */}
      <PieChart pieChartData={pieChartData} selectedMonth={selectedMonth} />
    </div>
  );
}

export default App;

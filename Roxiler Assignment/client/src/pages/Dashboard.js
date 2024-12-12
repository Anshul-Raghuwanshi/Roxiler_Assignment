import React, { useState, useEffect } from 'react';
import TransactionTable from '../components/TransactionTable';
import StatisticsBox from '../components/StatisticsBox';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import MonthSelector from '../components/MonthSelector';
import SearchBox from '../components/SearchBox';
import { fetchStatistics } from '../services/transactionService';

const Dashboard = () => {
  const [selectedMonth, setSelectedMonth] = useState('03'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const loadStatistics = async () => {
      const data = await fetchStatistics(selectedMonth);
      setStatistics(data);
    };

    loadStatistics();
  }, [selectedMonth]);

  return (
    <div className="dashboard">
      <h1>Transaction Dashboard</h1>

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
        page={page}
        perPage={perPage}
        setPage={setPage}
      />

      {/* Bar Chart */}
      <BarChart selectedMonth={selectedMonth} />

      {/* Pie Chart */}
      <PieChart selectedMonth={selectedMonth} />
    </div>
  );
};

export default Dashboard;

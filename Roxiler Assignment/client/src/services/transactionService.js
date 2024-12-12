const API_URL = "http://localhost:5000"; 

// Function to fetch transactions with pagination and search
export const fetchTransactions = async (month, searchQuery = '', page = 1, perPage = 10) => {
  try {
    const response = await fetch(`${API_URL}/api/stats/transactions?month=${month}&searchQuery=${searchQuery}&page=${page}&perPage=${perPage}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching transactions:", error);
    return [];
  }
};

// Function to fetch statistics data for a selected month
export const fetchStatistics = async (month) => {
  try {
    const response = await fetch(`${API_URL}/api/stats/statistics?month=${month}`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching statistics:", error.message);
    return {};
  }
};


// Function to fetch bar chart data for a selected month
export const fetchBarChartData = async (month) => {
  try {
    const response = await fetch(`${API_URL}/api/stats/bar-chart?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching bar chart data:", error);
    return [];
  }
};

// Function to fetch pie chart data for a selected month
export const fetchPieChartData = async (month) => {
  try {
    const response = await fetch(`${API_URL}/api/stats/pie-chart?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching pie chart data:", error);
    return [];
  }
};

// Combined data fetching function (for the /api/combined endpoint)
export const fetchCombinedData = async (month) => {
  try {
    const response = await fetch(`${API_URL}/api/stats/combined?month=${month}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching combined data:", error);
    return {
      statistics: {},
      barChartData: [],
      pieChartData: [],
    };
  }
};

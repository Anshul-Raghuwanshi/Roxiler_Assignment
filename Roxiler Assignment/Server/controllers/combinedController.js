const { getStatistics } = require("./statsController");
const { listTransactions } = require("./transactionController");
const { getBarChartData } = require("./chartController");

exports.getCombinedData = async (req, res) => {
  try {
    const statistics = await getStatistics(req, res);
    const transactions = await listTransactions(req, res);
    const barChart = await getBarChartData(req, res);
    const pieChart = await getBarChartData(req, res);

    res.json({
      success: true,
      statistics,
      transactions,
      barChart,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

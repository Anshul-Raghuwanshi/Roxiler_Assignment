const Transaction = require("../models/Transaction");

exports.getBarChartData = async (req, res) => {
  try {
    const { month } = req.query;

    const startDate = new Date(`${month} 1, 2000`);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);

    const query = { dateOfSale: { $gte: startDate, $lt: endDate } };

    const priceRanges = [
      { range: "0-100", min: 0, max: 100 },
      { range: "101-200", min: 101, max: 200 },
      { range: "201-300", min: 201, max: 300 },
      { range: "301-400", min: 301, max: 400 },
      { range: "401-500", min: 401, max: 500 },
      { range: "501-600", min: 501, max: 600 },
      { range: "601-700", min: 601, max: 700 },
      { range: "701-800", min: 701, max: 800 },
      { range: "801-900", min: 801, max: 900 },
      { range: "901-above", min: 901, max: Infinity },
    ];

    const results = await Promise.all(
      priceRanges.map(async (range) => {
        const count = await Transaction.countDocuments({
          ...query,
          price: { $gte: range.min, $lt: range.max === Infinity ? undefined : range.max },
        });
        return { range: range.range, count };
      })
    );

    res.json({ success: true, data: results });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

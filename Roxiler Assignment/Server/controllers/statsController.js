const Transaction = require("../models/Transaction");

exports.getStatistics = async (req, res) => {
  try {
    const { month } = req.query;

    const startDate = new Date(`${month} 1, 2000`);
    const endDate = new Date(startDate);
    endDate.setMonth(startDate.getMonth() + 1);

    const query = { dateOfSale: { $gte: startDate, $lt: endDate } };

    const totalSales = await Transaction.aggregate([
      { $match: query },
      { $group: { _id: null, totalAmount: { $sum: "$price" } } },
    ]);

    const soldCount = await Transaction.countDocuments({ ...query, sold: true });
    const notSoldCount = await Transaction.countDocuments({ ...query, sold: false });

    res.json({
      totalSaleAmount: totalSales[0]?.totalAmount || 0,
      soldItems: soldCount,
      notSoldItems: notSoldCount,
    });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

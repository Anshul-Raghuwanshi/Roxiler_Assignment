const Transaction = require("../models/Transaction");

exports.listTransactions = async (req, res) => {
  try {
    const { month, search, page = 1, perPage = 10 } = req.query;

    const query = {};
    if (month) {
      const startDate = new Date(`${month} 1, 2000`);
      const endDate = new Date(startDate);
      endDate.setMonth(startDate.getMonth() + 1);

      query.dateOfSale = { $gte: startDate, $lt: endDate };
    }

    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
        { price: { $regex: search, $options: "i" } },
      ];
    }

    const transactions = await Transaction.find(query)
      .skip((page - 1) * perPage)
      .limit(parseInt(perPage));

    res.json({ success: true, data: transactions });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
};

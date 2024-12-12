import React from 'react';

const TransactionTable = ({ transactions, page, perPage, setPage, searchQuery }) => {
  return (
    <div className="transaction-table">
      <h2>Transaction List</h2>

      {/* Table to display transactions */}
      <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Date of Sale</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.productTitle}</td>
                <td>{transaction.description}</td>
                <td>{transaction.price}</td>
                <td>{transaction.dateOfSale}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No transactions found</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
          Previous
        </button>
        <span>{`Page ${page}`}</span>
        <button onClick={() => setPage(page + 1)} disabled={transactions.length < perPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionTable;

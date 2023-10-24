import React from 'react';
import './Dashboard.css'
import { Link } from 'react-router-dom';
import Admin from './Admin';
export default function Dashboard() {
  return (
    <div className="container-fluid">
      {/* Upper Row */}
      <div className="row">
        <div className="col-md-12">
          {/* Upper content */}
          <h1>Upper Row</h1>
        </div>
      </div>

      {/* Lower Row with Two Columns */}
      <div className="row">
        <div className="col-md-2">
          <h2>Column 1</h2>
          <div className='dash'>
         <Link type='button' to="./Admin" className="btn btn-primary btn-lg"> Dashboard</Link>
         <div class="btn-group">
  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Products
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Add Product</a></li>
    <li><a class="dropdown-item" href="#">Product Management</a></li>
    <li><a class="dropdown-item" href="#">Product Editor</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Delete Product</a></li>
  </ul>
</div>
            <button type="button" className="btn btn-primary btn-lg">Orders</button>
            <button type="button" className="btn btn-primary btn-lg">Statistics</button>
            <button type="button" className="btn btn-primary btn-lg">Reviews</button>
            <button type="button" className="btn btn-primary btn-lg">Customers</button>
            <button type="button" className="btn btn-primary btn-lg">Transaction</button>
          </div>
        </div>
        <div className="col-md-10">
          <h2>Column 2</h2>
          














        </div>
      </div>
    </div>
  );
}

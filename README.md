# Payment Pages

## Overview
This document provides an overview of the functionality, structure, and routes for the payment-related pages in the application.

---

## Pages and Routes

### 1. Landing Page
- **Route**: `/`
- **Description**: This is the homepage of the application, providing an overview and navigation to other sections.

### 2. Bid Token Money Payment Page
- **Route**: `/bid-token-money-payment`
- **Description**: This page allows users to view bid details and proceed with token money payment.

### 3. Bid Balance Money Payment Page
- **Route**: `/bid-balance-money-payment`
- **Description**: This page allows users to view bid details and proceed with the balance money payment for a bid.

### 4. Refund to Buyer Page
- **Route**: `/refund-to-buyer`
- **Description**: This page displays refund details and allows users to process refunds if applicable.

### 5. Non-Refund to Buyer Page
- **Route**: `/nonrefund-to-buyer`
- **Description**: This page displays non-refund details and provides an option to contact support for assistance.

### 6. Payment History Page
- **Route**: `/payment-history`
- **Description**: This page lists the payment history for bids, including artwork details and transaction statuses. Users can download invoices for past transactions.

### 7. Not Found Page
- **Route**: `*`
- **Description**: A fallback page displayed when users navigate to an undefined route. It informs users that the requested page was not found and provides a link to return to the homepage.

---

## Usage Instructions
1. **Navigation**:
   - Use the header to access `Home`, `Cart`, or `Profile` pages at any time.
   - Direct links to specific pages are provided based on their respective routes.
2. **Making Payments**:
   - Use the `Bid Token Money Payment Page` or `Bid Balance Money Payment Page` to complete payment-related actions.
3. **Refunds**:
   - Navigate to the `Refund to Buyer Page` for refund actions or to the `Non-Refund to Buyer Page` for support options if refunds are not applicable.
4. **Payment History**:
   - View the `Payment History Page` for past transactions and download invoices if needed.
5. **Error Handling**:
   - If a user navigates to an undefined route, the `Not Found Page` will be displayed.




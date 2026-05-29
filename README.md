# 🏪 HMG Enterprise — Business Manager v5.0

> **Technology-Powered Business Intelligence**
> Complete enterprise business management system by **HMG Concepts** (est. 2015).
> Founded by **Adewale Samson Adeagbo** — Educator, Data Scientist, AI-Augmented Solutions Developer.
> No server. No subscription. No AI API. **100% free forever.**

---

## 📋 Table of Contents

1. [About This System](#about-this-system)
2. [What's New in v5.0](#whats-new-in-v50)
3. [Complete Feature Guide (30+ Features)](#complete-feature-guide)
4. [File Structure](#file-structure)
5. [Deployment Guide (Step-by-Step)](#deployment-guide)
6. [Daily Workflow](#daily-workflow)
7. [Data & Storage](#data--storage)
8. [Backup & Restore](#backup--restore)
9. [Installing as a Mobile App (PWA)](#installing-as-a-mobile-app-pwa)
10. [Keyboard Shortcuts](#keyboard-shortcuts)
11. [Troubleshooting](#troubleshooting)
12. [About HMG Concepts](#about-hmg-concepts)

---

## About This System

HMG Enterprise v5.0 is a **professional-grade, browser-based business management system** that works entirely offline. It features a modern, enterprise-quality UI with a sidebar navigation, glassmorphism-inspired cards, smooth animations, and 7 theme options.

**Built with:** Vanilla HTML5, CSS3, JavaScript (no frameworks), Chart.js for charts (cached after first visit), GitHub Pages for hosting, browser localStorage for data.

**Who it's for:** Retail shops, provision stores, pharmacies, wholesalers, food vendors, electronics sellers, service businesses, schools, consulting firms — any small-to-medium business.

---

## What's New in v5.0

| Category | Feature | Description |
|---|---|---|
| 🎨 **UI/UX Revamp** | Professional Dashboard | Sidebar navigation, glassmorphism cards, smooth animations |
| 🎨 **UI/UX Revamp** | 7 Themes | Indigo, Blue, Emerald, Purple, Rose, Amber, Light Mode |
| 🎨 **UI/UX Revamp** | Responsive Design | Optimized for desktop, tablet, and mobile |
| 🎨 **UI/UX Revamp** | Collapsible Sidebar | Toggle between full and icon-only sidebar |
| 🎨 **UI/UX Revamp** | Toast Notifications | Animated toast messages replacing alerts |
| 🎨 **UI/UX Revamp** | Modal Dialogs | Smooth animated modals for all forms |
| 🎨 **UI/UX Revamp** | Modern Tables | Hover effects, sorting indicators, zebra striping |
| 🆕 **New Feature** | Global Search | Search across products, customers, suppliers, staff |
| 🆕 **New Feature** | Customer Loyalty Tiers | Bronze, Silver, Gold, Platinum with discount suggestions |
| 🆕 **New Feature** | Sales Velocity Tracking | Fast/Moderate/Slow indicator + "days until out of stock" |
| 🆕 **New Feature** | Monthly Comparison | This month vs last month with percentage changes |
| 🆕 **New Feature** | CSV Product Import | Import products from CSV text |
| 🆕 **New Feature** | Data Health Dashboard | Storage alerts, overdue credits, stock warnings |
| 🆕 **New Feature** | Enhanced Notification Panel | Dropdown with notification history |
| 🆕 **New Feature** | Product Tags | Categorize products with custom tags |
| 🆕 **New Feature** | Invoice Numbers | Auto-generated INV-YYYY-XXXX format |
| 🆕 **New Feature** | Enhanced Receipts | Shareable via WhatsApp |
| 🆕 **New Feature** | Print-Optimized Layouts | Clean print CSS for all pages |

---

## Complete Feature Guide

### 📊 1. Live Dashboard (`index.html`)
**Purpose:** Your business command center with real-time overview.

**What it shows:**
- **8 KPI Cards** — Today's Revenue, Today's Profit, Today's Expenses, This Week, This Month, All-Time Revenue, Stock Value, Outstanding Credits
- **Business Health Score (0-100)** — Auto-calculated from 4 metrics: profit margin, stock health, revenue activity, net position
- **Monthly Comparison** — Side-by-side comparison of this month vs last month for Revenue, Net Profit, Transactions, and Average Order Value with percentage change indicators
- **Sales Targets** — Daily/weekly/monthly revenue goals with animated progress bars
- **Register Status** — Shows if cash register is open or closed
- **Data Health Alerts** — Storage warnings, overdue credits, out-of-stock alerts, security tips
- **Quick Actions** — One-click shortcuts to Record Sale, Restock, Log Expense, Add Note, Share Today
- **Recent Sales Table** — Last 10 transactions
- **Top Products Today** — Ranked by revenue
- **Activity Feed** — Last 10 system events (sales, restocks, expenses, register actions)

### 🛒 2. Sales Recording (`sales.html`)
**Purpose:** Full point-of-sale system for recording every transaction.

**How to use:**
1. Select a product from dropdown (price/stock auto-fills) OR click a Quick Select button
2. Enter quantity
3. Optionally add discount %, customer name, payment method, note
4. Click "Record Sale"

**Features:**
- **Quick Select Grid** — Top products as one-click buttons for fast recording
- **Repeat Last Sale** — One-click re-record of previous transaction
- **Built-in Calculator** — Quick arithmetic without leaving the page
- **Discount Support** — Percentage-based discounts
- **5 Payment Methods** — Cash, Bank Transfer, Card (POS), Mobile Money, Credit/Debt
- **Auto Invoice Numbers** — INV-2026-XXXX format
- **Staff Assignment** — Link sales to staff members for performance tracking
- **Customer Auto-Tracking** — Customer stats update automatically
- **Stock Auto-Deduction** — Inventory decreases when sales are recorded
- **WhatsApp Receipt Sharing** — Share receipt via WhatsApp
- **Today's Summary** — Running revenue, profit, payment breakdown
- **CSV Export** — Download today's sales data

### 📦 3. Inventory Manager (`inventory.html`)
**Purpose:** Complete product catalog management with smart insights.

**Features:**
- **Stats Dashboard** — Total products, stock units, retail value, cost value, low stock, out of stock
- **Advanced Filtering** — By name, SKU, category, stock status
- **Sorting** — By name, stock (ascending/descending), price, margin
- **Per-Product Actions:**
  - **Restock** — Add quantity with optional cost price update
  - **Edit** — Update any product field
  - **Duplicate** — Clone for product variants
  - **Disable** — Remove from active catalog without deleting
- **Margin % Column** — Shows profit margin percentage for each product
- **Sales Velocity** — NEW! Shows Fast/Moderate/Slow indicator and "days until out of stock" based on 30-day sales history
- **Product Tags** — NEW! Custom tags for categorization (fast-moving, popular, etc.)
- **CSV Import** — NEW! Import products from CSV text
- **CSV Export** — Download product catalog
- **Stock Movement History** — Log of all stock changes

### 💸 4. Expense Tracker (`expenses.html`)
**Purpose:** Track all business spending with category analysis.

**Features:**
- **11 Categories** — Rent, Utilities, Salaries, Transport, Supplies, Maintenance, Marketing, Tax, Insurance, Food, Miscellaneous
- **KPI Cards** — Today, This Week, This Month, All-Time expense totals
- **Category Breakdown** — Visual progress bars showing spending per category this month
- **Net Profit Calculator** — Revenue → Gross Profit → Expenses → Net Profit (all calculated for this month)
- **Time Filters** — Today, This Week, This Month, Last 90 Days, All Time
- **Payment Method Tracking** — Cash, Bank Transfer, Card, Mobile Money
- **Delete Function** — Remove incorrect entries
- **CSV Export** — Download expense records

### 👥 5. Customer Directory (`customers.html`)
**Purpose:** Customer relationship management with loyalty tracking.

**Features:**
- **Auto-Tracking** — Customer stats update automatically when their name is used during sales
- **Loyalty Tier System** — NEW! Auto-calculated based on total spend:
  - 🥉 Bronze — All customers (1% discount suggestion)
  - 🥈 Silver — ₦20,000+ spent (3% discount suggestion)
  - 🥇 Gold — ₦50,000+ spent (5% discount suggestion)
  - 💎 Platinum — ₦100,000+ spent (10% discount suggestion)
- **Customer Fields** — Name, phone, email, address, notes
- **Auto-Generated Stats** — Total spend, total orders, average order value, last purchase date
- **Sorting** — By highest spend, most orders, name A-Z, recent purchase
- **Search** — Filter by name, phone, or email
- **WhatsApp Button** — Direct message to customer
- **CSV Export** — Download customer list including loyalty tier

### 🚚 6. Supplier Management (`suppliers.html`)
**Purpose:** Supplier relationship tracking.

**Features:**
- **Fields** — Company name, contact person, phone, email, category, address, notes (payment terms, delivery schedule)
- **Auto-Tracking** — Total orders, total spent with supplier
- **Sorting** — By name, recent, most spent
- **Search** — Filter by company name or contact person
- **WhatsApp Button** — Direct message to supplier
- **CSV Export** — Download supplier list

### 👨‍💼 7. Staff Management (`staff.html`)
**Purpose:** Employee management with performance tracking.

**Features:**
- **Fields** — Name, role, phone, email, monthly salary, notes
- **7 Roles** — Sales Associate, Cashier, Manager, Supervisor, Storekeeper, Accountant, Other
- **Auto-Tracking** — Total sales count and revenue per staff member (updated when staff name is selected during sale recording)
- **Performance Bars** — Visual comparison of monthly revenue contribution
- **Enable/Disable Staff** — Toggle active status
- **Stats Dashboard** — Total staff, active count, top performer, total staff revenue
- **CSV Export** — Download staff data

### 💰 8. Budget Manager (`budgets.html`)
**Purpose:** Monthly budget tracking by expense category.

**Features:**
- **Set Budgets Per Category** — Map any expense category to a monthly budget limit
- **Visual Progress Bars** — Spent vs budget with color coding:
  - 🟢 Green: < 80% used (On Track)
  - 🟣 Purple: 80-100% used (Near Limit)
  - 🔴 Red: Over budget (Over Budget)
- **Summary KPIs** — Total budget, total spent, remaining, over-budget count
- **Budget vs Actual Table** — Category, budget, spent, remaining, % used, status
- **Edit/Delete Budgets** — Full CRUD operations
- **Auto-Calculated** — Spending figures pulled from actual expense records

### 💳 9. Credit/Debt Tracker (`credits.html`)
**Purpose:** Credit sales and debt management.

**Features:**
- **Record Credit Sales** — Customer, product, amount, due date, phone number
- **Payment Tracking** — Record partial payments with date history
- **Status Badges** — ⏳ Pending, ✅ Paid, ⚠️ Overdue (auto-detected)
- **Tab Filtering** — All, Pending, Paid, Overdue
- **Summary KPIs** — Total credit given, total collected, outstanding, overdue count
- **WhatsApp Reminders** — Send payment reminders directly to customers
- **Auto-Notifications** — Alert when a debt is fully cleared
- **CSV Export** — Download credit records

### 🏧 10. Cash Register (`register.html`)
**Purpose:** Daily cash drawer management.

**How to use:**
1. **Morning:** Enter starting cash → Click "Open Register"
2. **Throughout the day:** Record sales and expenses as usual
3. **Evening:** The system calculates Expected Cash (Starting + Cash Sales − Cash Expenses). Count actual cash in drawer, enter it, and close.

**Features:**
- **Open Register** — Record starting cash with optional note
- **Close Register** — Shows expected vs actual with discrepancy highlighted
- **Register History** — Log of all open/close events
- **Payment Breakdown** — Today's sales grouped by payment method
- **Dashboard Integration** — Register status shown on dashboard

### 📝 11. Business Journal (`journal.html`)
**Purpose:** Business notes, to-dos, and reminders.

**Features:**
- **5 Note Types** — To-Do 📋, Reminder ⏰, Idea 💡, Meeting 🤝, General 📝
- **3 Priority Levels** — High 🔴, Medium 🟡, Low ⚪
- **Due Dates** — Optional deadline with overdue detection
- **Tab Filtering** — All, To-Do, Reminders, Ideas, Meetings, Completed
- **Mark Complete** — Toggle completion status
- **WhatsApp Share** — Share notes via WhatsApp
- **Stats Dashboard** — Total notes, pending to-dos, completed, high priority
- **Overdue Alerts** — Due dates past current date are flagged

### 📈 12. Reports & Analytics (`reports.html`)
**Purpose:** Comprehensive business intelligence and reporting.

**Features:**
- **8 KPI Cards** — Revenue, Gross Profit, Expenses, Net Profit, Units Sold, Transactions, Avg Order Value, Profit Margin
- **4 Interactive Charts (Chart.js):**
  1. Revenue Over Time (line chart)
  2. Profit vs Expenses (bar chart)
  3. Sales by Category (doughnut chart)
  4. Payment Methods (pie chart)
- **Time Period Filters** — 7 Days, 14 Days, 30 Days, 90 Days, 12 Months, All Time
- **Top Products Table** — Ranked by revenue with margin analysis
- **Profit & Loss Summary** — Revenue → COGS → Gross Profit → Expenses → Net Profit
- **Sales History** — Searchable, paginated transaction log
- **Storage Usage Meter** — Shows localStorage consumption
- **Full Backup** — Export ALL 16 data stores as JSON file
- **Full Restore** — Import backup JSON to restore on any device
- **CSV Export** — Download filtered sales data
- **WhatsApp Sharing** — Share report summaries

### ⚙️ 13. Settings (`settings.html`)
**Purpose:** Complete system configuration.

**Sections:**
- **Business Information** — Name, owner, type, address, phone, email
- **Financial Settings** — Currency (14 options), tax rate, low stock threshold, financial year start
- **Sales Targets** — Daily, weekly, monthly revenue goals
- **Product Categories** — Add/remove/edit category names
- **7 Themes** — Indigo, Blue, Emerald, Purple, Rose, Amber, Light Mode
- **Security** — 4-digit PIN lock (session-based verification)
- **Danger Zone** — Clear sales, clear expenses, reset stock, factory reset
- **Keyboard Shortcuts Reference**
- **About Section** — Version, storage info, usage stats

### 🔍 14. Global Search (All Pages)
**Purpose:** Search across all data types from the top bar.

**Searches across:** Products (name, SKU, category), Customers (name, phone, email), Suppliers (company, contact), Staff (name, role).

**How to use:** Click the search bar in the top bar and type at least 2 characters. Results appear as a dropdown panel.

### 🔔 15. Notification System (All Pages)
**Purpose:** In-app notification center with bell icon in top bar.

**Triggers:** Credit sales, debt clearances. Badge shows unread count. Click to expand panel. "Clear all" to dismiss.

### ⌨️ 16. Keyboard Shortcuts
Navigate between pages instantly:
`Alt+D` Dashboard | `Alt+S` Sales | `Alt+I` Inventory | `Alt+E` Expenses | `Alt+C` Customers | `Alt+R` Reports | `Alt+G` Register | `Alt+N` Journal | `Alt+O` Staff | `Alt+B` Budgets | `Alt+T` Credits

### 📱 17. PWA / Install as App
Install on phone/tablet home screen, works full-screen offline. See installation guide below.

### 📥 18. CSV Export
Download data from: Sales, Inventory, Expenses, Customers, Suppliers, Staff, Credits.

### 💾 19. Full Backup/Restore
Export ALL data (16 data stores) as JSON, restore on any device. Available on Reports page.

### 🧾 20. Receipt Generator
Auto-receipts with HMG branding, invoice numbers, shareable via WhatsApp.

### 🏥 21. Business Health Score
0-100 score calculated from: profit margin, stock health, revenue activity, net position.

### 🎯 22. Sales Targets
Daily/weekly/monthly revenue goals with color-coded progress bars on dashboard.

### 🏷️ 23. Product Tags
Custom tags for product categorization (fast-moving, popular, seasonal, etc.).

### ⚡ 24. Sales Velocity
Per-product speed indicator based on 30-day sales: Fast (>2/day), Moderate (0.5-2/day), Slow (<0.5/day). Shows estimated "days until out of stock."

### 📊 25. Monthly Comparison
Dashboard shows this month vs last month for revenue, profit, transactions, avg order value with percentage change arrows.

### 📤 26. CSV Import
Import products from CSV text on the Inventory page. Paste CSV with columns: name, price, costPrice, stock, unit, category, sku.

### 🏅 27. Customer Loyalty Tiers
Auto-calculated based on spending: Bronze, Silver, Gold, Platinum with suggested discount percentages.

### 🩺 28. Data Health Dashboard
Dashboard alerts for: storage usage, overdue credits, multiple out-of-stock items, missing PIN.

### 🖨️ 29. Print-Optimized Layouts
All pages have clean print CSS — sidebar, navigation, and buttons are hidden for clean printed output.

### 🔐 30. PIN Security
Optional 4-digit PIN lock. Once set, prompts on each new browser session. Unlock persists until tab/browser closes.

---

## File Structure

```
enterprise/
├── index.html          Dashboard with Health Score, Credits KPI
├── sales.html          Record sales + calculator + WhatsApp
├── inventory.html      Products + stock + velocity + CSV import
├── expenses.html       Expense tracker + net profit calculator
├── customers.html      Customer directory + loyalty tiers
├── suppliers.html      Supplier management
├── register.html       Cash register open/close
├── journal.html        Business notes + to-dos + reminders
├── staff.html          Staff management + performance
├── budgets.html        Budget manager + tracking
├── credits.html        Credit/debt tracker + payments
├── reports.html        Charts + P&L + backup/restore
├── settings.html       Config + 7 themes + targets + security
├── manifest.json       PWA manifest (HMG branded)
├── sw.js               Service worker (offline for all pages)
├── README.md           This documentation
├── css/
│   └── style.css       Complete design system (1,500+ lines)
├── js/
│   ├── storage.js      Core engine (16 data stores + enhanced functions)
│   └── app.js          Shared utilities + themes + PIN + search
└── data/
    ├── config.json     Default HMG Concepts configuration
    ├── products.json   Sample products catalog (8 products)
    └── sales.json      Empty sales log template
```

---

## Deployment Guide

### OPTION A: GitHub Pages (Recommended — Free)

#### Step 1: Create a GitHub Account
1. Open your browser → Go to **https://github.com**
2. Click **Sign up** (top-right corner)
3. Enter your **email address** → Click "Continue"
4. Create a **password** → Click "Continue"
5. Choose a **username** (e.g., `yourname`) → Click "Continue"
6. Complete the verification puzzle (if prompted)
7. Check your email for a verification code → Enter it
8. Click **Create account**
9. Choose the **Free** plan → Skip personalization questions

#### Step 2: Create a New Repository
1. Once logged in, click the **+** icon (top-right of the page)
2. Select **New repository**
3. **Repository name:** type `business-manager` (lowercase, no spaces)
4. Select **Public** (required for free GitHub Pages)
5. ✅ Check **"Add a README file"**
6. Click **Create repository**
7. Your repo URL is now: `https://github.com/YOURUSERNAME/business-manager`

#### Step 3: Upload All Files

**Method 1: Browser Upload (No Software Needed)**
1. In your GitHub repo page, click **"Add file"** → **"Upload files"**
2. Open the `enterprise/` folder on your computer
3. **Drag and drop** ALL these files at once:
   - `index.html`
   - `sales.html`
   - `inventory.html`
   - `expenses.html`
   - `customers.html`
   - `suppliers.html`
   - `register.html`
   - `journal.html`
   - `staff.html`
   - `budgets.html`
   - `credits.html`
   - `reports.html`
   - `settings.html`
   - `manifest.json`
   - `sw.js`
4. Type a commit message: `Upload HMG Enterprise v5.0`
5. Click **"Commit changes"**
6. Wait for the upload to complete

**Now create the subfolders:**
7. Click **"Add file"** → **"Create new file"**
8. In the filename box, type: `css/style.css` (this creates the `css` folder AND the file)
9. Open `css/style.css` from your computer in a text editor (Notepad, VS Code, etc.)
10. **Select ALL** the content → **Copy** → **Paste** into the GitHub editor
11. Click **"Commit changes"**
12. Repeat for `js/storage.js`:
    - Click **"Add file"** → **"Create new file"**
    - Type: `js/storage.js`
    - Copy and paste the contents from your computer's `js/storage.js`
    - Click **"Commit changes"**
13. Repeat for `js/app.js`:
    - Click **"Add file"** → **"Create new file"**
    - Type: `js/app.js`
    - Copy and paste the contents
    - Click **"Commit changes"**
14. Repeat for `data/config.json`, `data/products.json`, `data/sales.json`
    - Same process: type the path with folder (e.g., `data/config.json`), paste content, commit

**Method 2: GitHub Desktop (Easier for Multiple Files)**
1. Download **GitHub Desktop** from https://desktop.github.com
2. Install and sign in with your GitHub account
3. Click **"Clone a repository from the Internet..."**
4. Select your `business-manager` repo → Choose a folder → Click **Clone**
5. Open the cloned folder on your computer
6. Inside it, copy ALL files from the `enterprise/` folder
7. Open **GitHub Desktop** — you'll see all changes listed
8. Type a commit message: `Upload HMG Enterprise v5.0`
9. Click **"Commit to main"**
10. Click **"Push origin"** (uploads to GitHub)
11. Wait 30 seconds for upload to complete

#### Step 4: Enable GitHub Pages
1. Go to your repository on GitHub (https://github.com/YOURUSERNAME/business-manager)
2. Click the **"Settings"** tab (at the top of the repo page)
3. In the left sidebar, click **"Pages"**
4. Under **"Build and deployment"**:
   - **Source:** Select "Deploy from a branch"
   - **Branch:** Select `main`
   - **Folder:** Select `/ (root)`
5. Click **"Save"**
6. Wait **2-5 minutes**
7. A green banner appears at the top with your URL:
   **`https://YOURUSERNAME.github.io/business-manager/`**

#### Step 5: Verify
1. Open the URL in Chrome
2. You should see **"HMG Enterprise"** dashboard with the dark professional theme
3. The sidebar should show all 13 pages
4. Click through every page to verify they all load
5. The first load needs internet (to cache fonts + Chart.js)
6. After that, it works **100% offline**

---

### OPTION B: Netlify Drop (Fastest — Free)
1. Go to **https://app.netlify.com/drop**
2. Create a free account (email or GitHub login)
3. **Drag and drop** the entire `enterprise/` folder onto the page
4. Wait 30 seconds — deployed!
5. Rename: Site settings → Change site name → e.g., `your-business.netlify.app`
6. Free HTTPS included

---

### OPTION C: Other Free Static Hosts
- **Vercel** (https://vercel.com) — Free, automatic deployments from GitHub
- **Cloudflare Pages** (https://pages.cloudflare.com) — Free, global CDN
- **Firebase Hosting** (https://firebase.google.com/products/hosting) — Free tier
- **Render** (https://render.com) — Free static sites

---

## Daily Workflow

### 🌅 Morning
1. Open HMG Enterprise → **Register** → Enter starting cash → **Open Register**
2. Check **Dashboard** for health score, alerts, and data health warnings
3. Review **Journal** for pending to-dos and reminders
4. Check **Credits** for overdue debts — send WhatsApp reminders

### 🌞 Throughout the Day
1. **Sales page** → Record each sale (assign to staff member)
2. **Expenses** → Log any spending as it happens
3. **Credits** → Record any credit sales
4. **Journal** → Jot notes, ideas, reminders

### 🌆 End of Day
1. **Register** → Count cash → Close register (see discrepancy)
2. Check **Budgets** → See today's spending vs limits
3. **Credits** → Record any debt payments received
4. **Reports** → Click **💾 Backup** to save the day's data

### 📅 Weekly
- **Monday:** Review weekly report on Reports page
- **Friday:** Download backup, share summary via WhatsApp

### 📆 Monthly
- Review P&L on Reports page
- Update budgets for new month
- Assess staff performance
- Check customer loyalty tiers

---

## Data & Storage

All data stored in **browser localStorage** (5-10MB capacity).

| # | Key | Purpose |
|---|---|---|
| 1 | `st_config` | Business settings, currency, themes |
| 2 | `st_products` | Product catalog |
| 3 | `st_sales` | Transaction log |
| 4 | `st_expenses` | Expense records |
| 5 | `st_customers` | Customer directory |
| 6 | `st_suppliers` | Supplier directory |
| 7 | `st_staff` | Employee records |
| 8 | `st_register` | Open/close events |
| 9 | `st_credits` | Credit sales & payments |
| 10 | `st_budgets` | Monthly budgets |
| 11 | `st_notes` | Journal entries |
| 12 | `st_targets` | Revenue goals |
| 13 | `st_activity` | Audit log (300 max) |
| 14 | `st_notifications` | Notifications (50 max) |
| 15 | `st_theme` | Theme preference |
| 16 | `st_pin` | Security PIN |

**Important:** Data is per-browser, per-device. Use Backup/Restore to transfer between devices.

---

## Backup & Restore

### Backup
1. Go to **Reports** → Click **💾 Backup**
2. JSON file downloads with ALL 16 data stores
3. Save to Google Drive, email to yourself, WhatsApp, USB

### Restore
1. Go to **Reports** → Click **🔄 Restore**
2. Select backup JSON file → Confirm → Page reloads with restored data

**Best practice:** Backup every **Friday**, keep last **4 backups** in **2+ locations**.

---

## Installing as a Mobile App (PWA)

### Android (Chrome):
1. Open your URL in Chrome
2. Tap the **⋮** menu (three dots, top-right)
3. Tap **"Add to Home screen"**
4. Tap **"Add"**
5. App appears on home screen — opens full-screen without browser bar

### iPhone (Safari):
1. Open your URL in Safari
2. Tap the **Share** button (square with arrow, bottom of screen)
3. Scroll down → Tap **"Add to Home Screen"**
4. Tap **"Add"**
5. App appears on home screen — opens full-screen

**Both:** Works offline after first visit with internet.

---

## Keyboard Shortcuts

| Shortcut | Page | Shortcut | Page |
|---|---|---|---|
| `Alt+D` | Dashboard | `Alt+N` | Journal |
| `Alt+S` | Sales | `Alt+O` | Staff |
| `Alt+I` | Inventory | `Alt+B` | Budgets |
| `Alt+E` | Expenses | `Alt+T` | Credits |
| `Alt+C` | Customers | `Alt+R` | Reports |
| `Alt+U` | Suppliers | `Alt+G` | Register |

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "My data disappeared" | Data is per-browser + per-device. Use same browser + same device. Backup weekly. |
| "Charts not showing" | Visit Reports page once with internet to cache Chart.js library. |
| "New pages show 404" | Upload ALL 13 HTML files. Check filenames are lowercase. |
| "PIN not working" | Settings → Remove PIN → Set again. |
| "GitHub Pages shows 404" | Wait 5 minutes after enabling. Check `index.html` exists (lowercase). |
| "Theme not changing" | Clear browser cache, reload. Check Settings → Theme section. |
| "Storage almost full" | Go to Reports → check storage meter. Backup → Clear old data from Settings. |
| "Can't find a feature" | Use Alt+keyboard shortcuts or Global Search in top bar. |

---

## About HMG Concepts

**HMG Concepts** is a multi-industry solutions company established in 2015 by **Adewale Samson Adeagbo** — educator with 15+ years experience, data scientist, and AI-Augmented Solutions Developer. B.Sc./Ed in Computer Science Education from Lagos State University. 3MTT Data Science (2025).

**Subsidiaries:** HMG Academy (EdTech), HMG Technologies (Software), HMG Media (Content)

**Websites:**
- 🌐 [cssadewale.pages.dev](https://cssadewale.pages.dev) — Portfolio
- 🌐 [hmgconcepts.pages.dev](https://hmgconcepts.pages.dev) — Company
- 🌐 [hmgacademy.pages.dev](https://hmgacademy.pages.dev) — Virtual School

---

*HMG Enterprise v5.0.0 — Technology-Powered Business Intelligence*
*Built by Adewale Samson Adeagbo — Founder & Director, HMG Concepts*
*Free forever. No ads. No subscription. No AI API required.*

# Frontend Build Guide - Remaining Pages

## ✅ COMPLETED PAGES

1. **HomePage.js** (Section 1) - Hero + Package Selection ✅
2. **EntitySelector.js** (Section 3) - Quiz + All Entity Types ✅  
3. **StateSelector.js** (Section 4) - All 50 States + Comparison ✅
4. **PackageCard.js** - Reusable Component ✅
5. **App.js** - Main app with routing ✅
6. **formStore.js** - Complete state management ✅

---

## 🔨 PAGES TO BUILD (Follow Same Pattern)

### Page 5: BusinessNameCheck.js (Section 5)

**Purpose:** Check business name availability and reserve

**Key Features:**
- Text input for business name
- Entity designation dropdown (LLC, Inc, Corp, etc.)
- Real-time availability check (API call to backend)
- Alternative name suggestions if unavailable
- Domain name availability check
- Trademark search option ($99 add-on)
- Name reservation option
- Warning if name contains restricted words

**State to Update:**
```javascript
setBusinessName(name)
setBusinessNameAvailable(true/false)
setEntityDesignation('LLC')
```

**API Endpoints Needed:**
- `POST /api/names/check` - Check availability
- `GET /api/names/suggest` - Get alternatives
- `GET /api/names/domains` - Check domain availability

**Layout:**
- Large text input with label
- Real-time feedback (✓ Available / ✗ Taken)
- Alternative suggestions list (if taken)
- Domain availability cards
- Continue button (disabled until name available)

---

### Page 6: BusinessInformation.js (Section 6)

**Purpose:** Collect detailed business information

**Key Features:**
- Business purpose (General vs Specific)
- Address form (with "Use EazyTaxes RA Address" option - default selected)
- Mailing address (optional, checkbox for "same as principal")
- Registered agent (EazyTaxes pre-selected, warnings if they change)
- Effective date (Upon approval / Specific date)
- Fiscal year end (dropdown - Dec 31 default)
- Management structure (Member-managed / Manager-managed for LLC)
- Stock structure (Authorized shares, par value for Corp)
- Industry selector (searchable dropdown)
- NAICS code (auto-filled after industry selection)
- Business description textarea
- Product/Services checkboxes
- Sales channels checkboxes
- Will collect sales tax? (Yes/No)
- Will have employees? (Yes/No + count)

**State to Update:**
```javascript
setBusinessInfo({
  businessPurpose: 'general',
  principalAddress: { useEazyTaxes: true, ... },
  effectiveDate: 'upon_approval',
  fiscalYearEnd: '12-31',
  managementStructure: 'member-managed',
  industry: 'Consulting',
  naicsCode: '541611',
  ...
})
```

**Form Validation:**
- All required fields must be filled
- Ownership percentages must = 100%
- Valid addresses
- NAICS code required

**Layout:**
- Multi-section form with headings
- Collapsible sections
- Progress indicator
- Save & continue at bottom

---

### Page 7: OwnerInformation.js (Section 7)

**Purpose:** Collect all owner/member/shareholder information

**Key Features:**
- Number of owners selector (1-10+)
- Ownership type selector (Solo, Spouse, Equal Partners, Unequal, Complex)
- For each owner:
  - Personal info (Name, DOB, SSN, Address)
  - Contact (Email, Phone)
  - Ownership % (must total 100%)
  - Role checkboxes (Member, Manager, Director, Officer)
  - Employment status
  - Beneficial owner determination (auto if 25%+)
  - ID document upload (for beneficial owners)
  - Marital status
- Add/Remove owner buttons
- Ownership % validation (shows running total)
- Profit/loss allocation options
- Voting structure selector
- Buy-sell agreement options

**State to Update:**
```javascript
addOwner(ownerData)
updateOwner(id, updates)
removeOwner(id)
```

**Form Validation:**
- At least 1 owner required
- Total ownership must = 100%
- All required fields per owner
- Valid SSN format
- Valid email/phone
- ID upload for beneficial owners (25%+)

**Layout:**
- Owner cards (expandable)
- Add Owner button
- Ownership pie chart (visual feedback)
- Summary table showing all owners
- Continue button at bottom

---

### Page 8: OperatingAgreement.js (Section 8)

**Purpose:** Customize operating agreement/bylaws

**Key Features:**
- Customization level selector (Standard FREE / Custom $199 / Attorney $799)
- If Custom selected, show customization options:
  - Capital calls checkbox
  - Special allocations checkbox
  - Preferred returns checkbox
  - Custom voting thresholds
  - Detailed buyout provisions
  - Non-compete clauses
  - IP provisions
  - Dispute resolution (Mediation/Arbitration/Both)
- Preview of what's included
- Explanation of each provision
- Price updated based on selections
- Electronic signature notice

**State to Update:**
```javascript
setOperatingAgreement({
  customizationLevel: 'standard',
  customProvisions: { ... }
})
```

**Layout:**
- Three cards for each level (Standard/Custom/Attorney)
- Selected card highlighted
- If Custom: Checklist of provisions with explanations
- Continue button

---

### Page 9: AddOnServices.js (Section 9)

**Purpose:** Select additional services

**Key Features:**
- Service catalog (30+ services from frozen spec)
- Categories: Federal Filings, State/Local, Tax/Accounting, Insurance, Compliance
- Each service card shows:
  - Service name
  - Description
  - Price
  - Timeline
  - Add/Remove button
- Popular bundles section
- Multi-state selector (for multi-state services)
- Running total of add-ons
- Smart recommendations based on entity type and previous answers

**Services to Include:**
- EIN Application ($79 or FREE in Standard+)
- S-Corp Election ($99)
- BOI Filing ($79 or FREE in Premium+)
- Trademark Search ($99)
- Business License Research ($99)
- Sales Tax Registration ($79/state)
- Expedited Filing (varies by state)
- Annual Report Auto-Filing ($99/year)
- QuickBooks Setup ($199)
- Tax Planning Consultation ($199)
- Many more...

**State to Update:**
```javascript
addAddOnService({ id, name, price, quantity })
removeAddOnService(id)
calculatePricing() // Recalculate totals
```

**Layout:**
- Grid of service cards
- Category tabs/filters
- Selected services sidebar (sticky)
- Total price calculator
- Continue button

---

### Page 10: ReviewPayment.js (Section 10)

**Purpose:** Review complete order and process payment

**Key Features:**
- Complete order summary
  - Business name
  - Entity type
  - State
  - Package selected
  - All owners listed
  - All add-ons listed
- Pricing breakdown
  - Package price
  - State fees
  - Add-on services total
  - Subtotal
  - Promo code input
  - Discount
  - Tax
  - **Total Due**
- Payment method selector
  - Credit/Debit card (Stripe Elements)
  - ACH/Bank transfer
  - Payment plan (if Premium/Platinum)
- Terms & conditions checkbox
- Submit order button
- Edit buttons for each section

**State to Update:**
```javascript
setPaymentMethod('card')
setPromoCode('SAVE50')
```

**Payment Integration:**
- Stripe Elements for card input
- Stripe Payment Intent creation
- Success/failure handling
- Loading state during processing

**Layout:**
- Left side: Order summary
- Right side: Payment form
- Terms at bottom
- Large "Submit Order" button

---

### Page 11: OrderConfirmation.js (Section 11)

**Purpose:** Confirm order placed successfully

**Key Features:**
- Success message with animation
- Order number display
- Order details summary
- What happens next timeline
- Next steps checklist
- Portal access button
- Download order confirmation PDF
- Referral program CTA
- Social sharing buttons

**Display:**
- Confirmation email notice
- Expected timeline (documents ready in 1-2 days)
- Portal login info
- Customer support contact

**Layout:**
- Large success checkmark animation
- Order # prominently displayed
- Timeline visualization
- Action buttons (Go to Portal, Download PDF)

---

## 🎨 COMMON COMPONENTS TO BUILD

### ProgressIndicator.js
- Shows "Step X of 9"
- Visual progress bar
- Step labels
- Current step highlighted

### Header.js
- Logo
- Navigation (if logged in)
- Login/Signup buttons
- User menu (if authenticated)

### Footer.js
- Company info
- Links (Privacy, Terms, Support)
- Contact info
- Copyright

### InputField.js (Reusable)
- Styled input with label
- Error message display
- Help text
- Required indicator

### AddressForm.js (Reusable)
- Street, City, State, ZIP fields
- Validation
- Used in multiple places

### PrivateRoute.js
- Protects authenticated routes
- Redirects to login if not authenticated

---

## 📱 PORTAL PAGES TO BUILD

### Dashboard.js
- Order status cards
- Recent activity
- Compliance calendar widget
- Quick actions
- Documents grid

### OrderDetails.js
- Detailed order view
- Document list with download
- Status timeline
- Support chat

### Documents.js
- All documents grid
- Filter by type
- Download buttons
- Upload functionality

### Compliance.js
- Calendar view of deadlines
- Upcoming items list
- Completed items
- Reminder settings

### Profile.js
- User info form
- Business list
- Password change
- Preferences

---

## 🔌 API SERVICE FILES TO BUILD

### services/api.js
```javascript
import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
```

### services/orderService.js
```javascript
import API from './api';

export const createOrder = (orderData) => {
  return API.post('/orders', orderData);
};

export const getOrder = (orderId) => {
  return API.get(`/orders/${orderId}`);
};

export const approveDocuments = (orderId) => {
  return API.post(`/orders/${orderId}/approve-documents`);
};
```

### services/nameService.js
```javascript
import API from './api';

export const checkNameAvailability = (name, state) => {
  return API.post('/names/check', { name, state });
};

export const suggestAlternatives = (name, state) => {
  return API.get(`/names/suggest?name=${name}&state=${state}`);
};

export const checkDomains = (name) => {
  return API.get(`/names/domains?name=${name}`);
};
```

### services/paymentService.js
```javascript
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

export const createPaymentIntent = async (amount) => {
  const response = await API.post('/payments/intent', { amount });
  return response.data;
};

export { stripePromise };
```

---

## 🎨 STYLING APPROACH

### GlobalStyles.js
```javascript
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    color: #1a1a1a;
    background: #ffffff;
    line-height: 1.6;
  }

  button {
    font-family: inherit;
  }

  // Add more global styles
`;

export default GlobalStyles;
```

### Theme (Optional)
```javascript
export const theme = {
  colors: {
    primary: '#667eea',
    secondary: '#764ba2',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    gray: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827'
    }
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1280px'
  }
};
```

---

## ✅ TESTING CHECKLIST

For each page, test:
- [ ] Loads without errors
- [ ] All form fields work
- [ ] Validation works correctly
- [ ] State updates properly
- [ ] Can navigate forward and back
- [ ] Mobile responsive
- [ ] Error handling
- [ ] Loading states
- [ ] Success states

---

## 📦 BUILD & DEPLOY

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel
```

### Deploy to Netlify
```bash
netlify deploy --prod
```

---

## 🎯 PRIORITY ORDER

**Week 1:**
1. BusinessNameCheck.js
2. BusinessInformation.js
3. OwnerInformation.js

**Week 2:**
4. OperatingAgreement.js
5. AddOnServices.js
6. ReviewPayment.js (with Stripe)

**Week 3:**
7. OrderConfirmation.js
8. Dashboard.js
9. Common components

**Week 4:**
10. Portal pages
11. API service files
12. Testing & polish

---

## 💡 TIPS

1. **Follow the pattern** - HomePage, EntitySelector, and StateSelector show the exact pattern to follow
2. **Use Zustand store** - All state is already defined in formStore.js
3. **Styled components** - Keep styling consistent
4. **Framer Motion** - Use for animations (already imported)
5. **Mobile-first** - Design for mobile, then desktop
6. **Form validation** - Use react-hook-form + yup (already in package.json)
7. **Error handling** - Show user-friendly error messages
8. **Loading states** - Always show loading indicators
9. **Frozen content** - Don't change any copy/pricing from the spec

---

## 🆘 NEED HELP?

Reference files:
- `eazytaxes_biz_formation_workflow.md` - Complete frozen spec
- `HomePage.js` - Pattern for page structure
- `formStore.js` - All state management
- `README.md` - Overall architecture

You've got this! 🚀

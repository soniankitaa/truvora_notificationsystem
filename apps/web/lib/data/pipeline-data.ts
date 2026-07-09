export const pipeline = [
  {
    stage: "New Leads",
    deals: [
      {
        company: "Acme Inc.",
        value: "₹1.2M",
        owner: "John",
        priority: "High",
      },
      {
        company: "Uber",
        value: "₹820K",
        owner: "David",
        priority: "Medium",
      },
    ],
  },

  {
    stage: "Qualified",
    deals: [
      {
        company: "Google",
        value: "₹4.8M",
        owner: "Sarah",
        priority: "High",
      },
    ],
  },

  {
    stage: "Proposal",
    deals: [
      {
        company: "Tesla",
        value: "₹950K",
        owner: "Alex",
        priority: "High",
      },
    ],
  },

  {
    stage: "Negotiation",
    deals: [
      {
        company: "Adobe",
        value: "₹2.4M",
        owner: "Emily",
        priority: "Low",
      },
    ],
  },

  {
    stage: "Closed",
    deals: [
      {
        company: "Meta",
        value: "₹6.2M",
        owner: "Emma",
        priority: "Won",
      },
    ],
  },
];
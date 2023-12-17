export default interface IClientConfig {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
    balance: number;          // Represents current financial balance
    debt: number;             // Total outstanding debt
    interestRate: number;     // Annual interest rate (percentage)
    inflationRate: number;    // Current inflation rate (percentage)
    industry: Industry;
}

interface Industry {
    id: string;
    name: string;
    income: number;
}

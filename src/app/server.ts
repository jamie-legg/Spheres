import IClientConfig from "@/interfaces/client/iclient-config";

export const getCurrentConfig = (): IClientConfig => {
const newDefaultConfig: IClientConfig = {
    id: 'spheres',
    name: 'spheres',
    createdAt: new Date(),
    updatedAt: new Date(),
    balance: 1000000,        // Example starting balance
    debt: 500000,            // Example debt
    interestRate: 5,         // Example interest rate (5%)
    inflationRate: 2.5,       // Example inflation rate (2.5%)
    industry: {
        name: 'fire saas company',
        id: 'saas',
        income: 1000000
    }
}
    return newDefaultConfig;
    //TODO: retrieve config from a server
}
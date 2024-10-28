export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let previous = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    const totalInterest = interestEarnedInYear + previous;
    previous += interestEarnedInYear;
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1,
      invesmentValue: investmentValue,
      interest: interestEarnedInYear,
      totalInterest: totalInterest,
      investedCapital: investmentValue - totalInterest,
    });
  }

  return annualData;
}
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

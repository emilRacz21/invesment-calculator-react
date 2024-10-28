import { calculateInvestmentResults, formatter } from "../util/investment";
export default function Result(results) {
  let calculate = calculateInvestmentResults({
    initialInvestment: results.results[0].value,
    annualInvestment: results.results[1].value,
    expectedReturn: results.results[2].value,
    duration: results.results[3].value,
  });
  console.log(calculate);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invesment Value</th>
          <th>Interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculate.map((items) => {
          return (
            <tr key={items.year}>
              <td>{items.year}</td>
              <td>{formatter.format(items.invesmentValue)}</td>
              <td>{formatter.format(items.interest)}</td>
              <td>{formatter.format(items.totalInterest)}</td>
              <td>{formatter.format(items.investedCapital)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

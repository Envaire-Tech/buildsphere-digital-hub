import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

const MortgageCalculator = ({ price }: { price: number }) => {
  const [downPaymentPct, setDownPaymentPct] = useState(20);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(30);

  const monthly = useMemo(() => {
    const principal = price * (1 - downPaymentPct / 100);
    const monthlyRate = rate / 100 / 12;
    const n = years * 12;
    if (monthlyRate === 0) return principal / n;
    return (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) / (Math.pow(1 + monthlyRate, n) - 1);
  }, [price, downPaymentPct, rate, years]);

  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-2 mb-5">
        <Calculator size={20} className="text-primary" />
        <h3 className="font-heading font-bold text-lg text-foreground">Mortgage Estimator</h3>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-xs font-medium text-muted-foreground mb-1 block">Down Payment (%)</label>
          <Input
            type="number"
            value={downPaymentPct}
            onChange={(e) => setDownPaymentPct(Number(e.target.value))}
            min={0}
            max={100}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Interest Rate (%)</label>
            <Input
              type="number"
              step={0.1}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground mb-1 block">Loan Term (years)</label>
            <Input
              type="number"
              value={years}
              onChange={(e) => setYears(Number(e.target.value))}
            />
          </div>
        </div>

        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 text-center">
          <div className="text-xs text-muted-foreground mb-1">Estimated Monthly Payment</div>
          <div className="text-2xl font-heading font-bold text-primary">
            ${Math.round(monthly).toLocaleString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;

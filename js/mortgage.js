class Mortgage {
  constructor(principal, years, rate) {
    this.principal = principal;
    this.years = years;
    this.rate = rate;
  }

  get monthlyPayment() {
    let monthlyRate;
    if (this.rate) {
      monthlyRate = this.rate / 100 / 12;
    }
    return this.principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), this.years * 12)));
  }

  get amortization() {
    let monthlyPayment = this.monthlyPayment
    let monthlyRate = this.rate / 100 / 12;

    let balance = this.principal;
    let amortization = [];
    for (let y = 0; y < this.years; y++) {
      let interestY = 0;    // interest payment for year y
      let principalY = 0;   // principal payment for year y
      for (let m = 0; m < 12; m++) {
        let interestM = balance * monthlyRate;        // interest payment for month m
        let principalM = monthlyPayment - interestM;   // principay payment for month m
        interestY = interestY + interestM;
        principalY = principalY + principalM;
        balance = balance - principalM;
      }
      amortization.push({principalY, interestY, balance});
    }
    return amortization;
  }
}

export default Mortgage;
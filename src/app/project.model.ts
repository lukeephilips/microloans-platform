export class Project {
  public amountFunded: number = 0;
  constructor(public title: string, public borrower: string, public totalLoanAmount: number, public category: string, public region: string, public img: string, public description: string) { }
}

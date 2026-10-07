// class A {
//   m1() {
//     console.log("M1 from A");
//   }
// }
// class B extends A {
//   m2() {
//     console.log("M2 from B");
//   }
// }
// class C extends B {
//   m3() {
//     console.log("M3 from C");
//   }
// }
// let c = new C();
// c.m3(); //its own method
// c.m2(); //parent method
// c.m1(); //grand parent method




// class mobile {
//   call() {
//     console.log("for calling");
//   }
//   text() {
//     console.log("chatting");
//   }
// }
// class SmartMobile extends mobile {
//   camera() {
//     console.log("ready to pose");
//   }
// }
// class LatestSmartPhone extends SmartMobile {
//   internet() {
//     console.log("Browsing enable");
//   }
// }
// let Latest = new LatestSmartPhone();
// Latest.call();
// Latest.text();
// Latest.camera();
// Latest.internet();




class BankAccount {
  constructor(accNum, accHldName) {
    this.accNum = accNum;
    this.accHldName = accHldName;
  }
  displayBankDet() {
    console.log("Account Number :", this.accNum);
    console.log("Account HolderName :", this.accHldName);
  }
}
// let ba=new BankAccount(1001,"Hero1");
// ba.displayBankDet();

class BankBlc extends BankAccount{
  constructor(accNum, accHldName, accBlc) {
    // this.accNum = accNum;
    // this.accHldName = accHldName;
    super(accNum,accHldName);
    this.accBlc = accBlc;
  }
  displayBankBlcDet() {
    // console.log("Account Number :", this.accNum);
    // console.log("Account HolderName :", this.accHldName);
    super.displayBankDet()
    console.log("Account Balance :", this.accBlc);
  }
}
let bankBlc = new BankBlc(1001, "Hero1", 95000);
bankBlc.displayBankBlcDet();
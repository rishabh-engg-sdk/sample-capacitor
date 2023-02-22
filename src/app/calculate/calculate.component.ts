import {Component, Input, OnInit} from '@angular/core';
import {Calculate, Operator} from "activity-plugin";
import {Echo} from "../../../echo-plugin";

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  @Input() a?: number
  @Input() b?: number

  ngOnInit(): void {
    Calculate.addListener('onCalculate', (calculateEventData => {
      alert(`Result ${calculateEventData.result}`)
      Echo.echo({value : JSON.stringify(calculateEventData)})
    }))
  }

  add(): void {
    this.calculate(Operator.ADD)
  }

  subtract(): void {
    this.calculate(Operator.SUBTRACT)
  }

  multiply(): void {
    this.calculate(Operator.MULTIPLY)
  }

  division(): void {
    this.calculate(Operator.DIVISION)
  }

  private calculate(operator: Operator) {
    if (this.a === undefined || this.b === undefined) {
      alert("Both values are necessary")
      return
    }
    Calculate.calculate({
      operand: {a: this.a, b: this.b},
      operator: operator
    })
  }
}

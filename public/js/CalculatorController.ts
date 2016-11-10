namespace App {
    export class CalculatorController {
        static $inject = [];

        public title;
        public display;
        public num1;
        public num2;
        public operation;
        public operationSelected;

        constructor() {
            this.title = 'Calculator Page';
            this.useClear ();
        }

        public setNumber (numValue) {
            console.log ('Hello! I was clicked!!');

            if (this.operationSelected == false) {
                this.num1 = this.num1 + numValue;
            }
            else {
                this.num2 = this.num2 + numValue;
            }

            this.display = this.num1 + this.operation + this.num2;
        }

        public useValue (value) {
            this.setNumber (value);
        }

        // These functions below are combined by the function useValue above.
        // in calculator.html you need to have number in the parenthesis
        // public useValueOf0 () {
        //     this.setNumber (0)
        // }
        //
        // public useValueOf1 () {
        //     this.setNumber (1)
        // }
        //
        // public useValueOf2 () {
        //     this.setNumber (2)
        // }
        //
        // public useValueOf3 () {
        //     this.setNumber (3)
        // }
        //
        // public useValueOf4 () {
        //     this.setNumber (4)
        // }
        //
        // public useValueOf5 () {
        //     this.setNumber (5)
        // }
        //
        // public useValueOf6 () {
        //     this.setNumber (6)
        // }
        //
        // public useValueOf7 () {
        //     this.setNumber (7)
        // }
        //
        // public useValueOf8 () {
        //     this.setNumber (8)
        // }
        //
        // public useValueOf9 () {
        //     this.setNumber (9)
        // }



        public setOperation (operation) {
            console.log ('Hello! I was clicked!!');
            this.operation = operation;
            this.operationSelected = true;

            this.display = this.num1 + this.operation + this.num2;
        }


        public useOperationAdd () {
            this.setOperation ('+');
        }

        public useOperationSubtract () {
            this.setOperation ('-');
        }

        public useOperationMultiply () {
            this.setOperation ('*');
        }

        public useOperationDivide () {
            this.setOperation ('/');
        }

        public useClear () {
            console.log ('Clicked!');
            this.display = '';
            this.num1 = '';
            this.operation = '';
            this.num2 = '';
            this.operationSelected = false;
        }

        public useEqual () {
            let firstNumber = 0;
            let secondNumber = 0;
            let value = null;

            console.log ('I was clicked!');

            // Convert the string represented numbers into their
            // integer equivelants.
            firstNumber = parseInt (this.num1);
            secondNumber = parseInt (this.num2);

            if (this.operation == '+') {
                value = firstNumber + secondNumber;
            }
            else if (this.operation == '-') {
                value = firstNumber - secondNumber;
            }
            else if (this.operation == '*') {
                value = firstNumber * secondNumber;
            }
            else if (this.operation == '/' && this.num2 === 0) {
                alert ('Cannot divide by 0');
            }
            else {
                value = firstNumber / secondNumber;
            }

            this.useClear ();
            this.display = value;
        }
    }
}

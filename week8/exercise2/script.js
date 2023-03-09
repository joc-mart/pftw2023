const { createApp } = Vue;

createApp ({
    data() {
        return {
            firstNum: null,
            secondNum: null,
            operation: 'add',
            total: null
        }
    },
    methods: {
        calculate: (num1, num2) => {
            // switch is an if statement, pass specific values to check against
            switch (operation) {
                case 'add':
                    total = num1 + num2;
                    break;
                case 'subtract':
                    total = num1 - num2;
                    break;
                case 'multiply':
                    total = num1 * num2;
                    break;
                case 'divide':
                    total = num1 / num2;
                    break;
                
                default:
                    window.alert('unexpected operator');
                    break;
            }
            firstNum = secondNum = null;
        }
    }
}).mount("#calcApp");

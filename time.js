function calculate() {
    const cost = document.getElementById('cost').value;
    const wage = document.getElementById('wage').value;
    const time = document.getElementById('time').value;

    let result = '';
    let resultDays = '';

    // Check if all three values are filled
    if (cost && wage && time) {
        result = 'Please enter only two values.';
        document.getElementById('result').innerHTML = result;
        return;
    }

    if (cost && wage) {
        const hours = cost / wage;
        const hrs = Math.floor(hours);
        const mins = Math.floor((hours - hrs) * 60);
        const secs = Math.floor(((hours - hrs) * 60 - mins) * 60);

        const days = (cost / wage) / 24;
        result = `Time: ${hrs} hours, ${mins} minutes, ${secs} seconds`;
        resultDays = `Days: ${days.toFixed(2)}`;
    } else if (cost && time) {
        const wage = cost / time;
        result = `Hourly Wage: $${wage.toFixed(2)}`;
    } else if (wage && time) {
        const cost = wage * time;
        result = `Cost: $${cost.toFixed(2)}`;
    } else {
        result = 'Please enter two values.';
    }

    document.getElementById('result').innerHTML = result;
    document.getElementById('resultDays').innerHTML = resultDays;
}

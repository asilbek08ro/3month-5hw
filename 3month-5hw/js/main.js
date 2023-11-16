document.getElementById('button').addEventListener('click', function() {
    var textOneValue = document.getElementById('one').value;
    var textTwoValue = document.getElementById('two').value;
    document.getElementById('one').value = textTwoValue;
    document.getElementById('two').value = textOneValue;
});
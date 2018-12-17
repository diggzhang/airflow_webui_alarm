var casper = require('casper').create();
var airflow_web_url = "http://10.8.8.111:8088/admin/";


casper.start(airflow_web_url, function() {
    this.waitForSelector('input[type="checkbox"]', function() {
        this.sendKeys('input[placeholder="Username"]', 'master');
        this.sendKeys('input[placeholder="Password"]', '123456');
        this.click('input[type="checkbox"]');
        this.click('button[type="submit"]');
    }, function() { 
        this.echo("error"); 
    })
}).then(function () {
    console.log("Login Success")
});


casper.then(function (){
    this.test.assertExists({
        type: 'xpath',
        path: '//*[@id="dags_wrapper"]'
    }, 'the element exists');
});


casper.run(function() {
    // echo results in some pretty fashion
    this.echo("Indeed.")
    this.exit();
});
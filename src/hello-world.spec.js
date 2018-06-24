var helloWorld = require('./hello-world');
it('says hello world', function() {
    expect(helloWorld.hello()).toEqual('Hello, World!');
});
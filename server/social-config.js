ServiceConfiguration.configurations.remove({
    service: 'facebook'
});

ServiceConfiguration.configurations.insert({
    service: 'facebook',
    appId: '233472020374588',
    secret: '005d7bdf931974f9fa9b2035aaf461d0',
    requestPermissions: ['public_profile', 'email']
});


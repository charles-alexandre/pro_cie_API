var server = require('./server');
var ds = server.dataSources.db_procie;
var lbTables = ['AccessToken', 'ACL', 'RoleMapping', 'Role', 'Account', 'Feature', 'Article', 'Appointment', 'Category'];
ds.automigrate(lbTables, function(er) {
  if (er) throw er;
  console.log('Loopback tables [' - lbTables - '] created in ', ds.adapter.name);
  ds.disconnect();
});
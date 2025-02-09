/**
 * Init script for docker-compose replica setup
 */
try {
  rs.status();
  print('Already initiated');
}
catch {
  rs.initiate({
    _id: 'rs0',
    members: [
      { _id: 0, host: 'mongo1:27017' },
      { _id: 1, host: 'mongo2:27017' }
    ]
  })
  print('Successfully initiated');
}
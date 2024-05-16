import bcrypt from 'bcryptjs';

async function testHash() {
  const password = 'frankec';
  const hashed = await bcrypt.hash(password, 12);
  console.log('Hashed:', hashed);

  const match = await bcrypt.compare(password, hashed);
  console.log('Match:', match);
}

testHash();

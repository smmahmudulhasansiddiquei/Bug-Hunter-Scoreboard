const teamMembers = ['Mahmudul', 'Nafis', 'Noman'];

let rafiScore = 0;
let meemScore = 0;
let shuvoScore = 0;


const Mahmudul = {
  id: Symbol('Mahmudul'),
  name: 'Mahmudul',
  age: 26,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Login Bug'],
  bugCount: 3
};

const Nafis = {
  id: Symbol('Nafis'),
  name: 'Nafis',
  age: 25,
  isActive: true,
  bugs: ['UI Bug'],
  bugCount: 1
};

const Noman = {
  id: Symbol('Noman'),
  name: 'Noman',
  age: 25,
  isActive: true,
  bugs: ['UI Bug', 'API Bug', 'Logic Bug', 'DB Bug', 'Crash Bug', 'Auth Bug'],
  bugCount: 6
};


function calculateGrade(bugCount) {
  if (bugCount > 5) {
    return '⭐ Bug Star';
  } else if (bugCount >= 3) {
    return '✅ Active Hunter';
  } else {
    return '🔍 Needs Improvement';
  }
}

const totalBugs = (user) => user.bugs.length;

const users = [Rafi, Meem, Shuvo];

for (const user of users) {
  console.log(`\n👤 Name: ${user.name} (Age: ${user.age})`);
  console.log(`📌 Bugs Found: ${user.bugs.join(', ')}`);

  user.bugCount = totalBugs(user);
  console.log(`🎯 Grade: ${calculateGrade(user.bugCount)}`);
}



Rafi.bugs.push('Navbar Bug');
Meem.bugs.pop();



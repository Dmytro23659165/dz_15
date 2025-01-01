const users = [ 
    { id: 1, balance: 100 }, 
    { id: 2, balance: 200 }, 
    { id: 3, balance: 300 } 
];
let totalBalance = users.reduce((ark, use) => ark + use.balance, 0);
console.log(totalBalance);


const users = [
    { id: 1, name: 'John', friends: ['Alice', 'Bob'] },
    { id: 2, name: 'Jane', friends: ['Charlie', 'Alice'] },
    { id: 3, name: 'Mike', friends: ['Bob', 'David'] }
];
const friendName = 'Alice';
const usersWithFriend = users.reduce((acc, user) => 
acc.concat(user.friends.includes(friendName) ? user.name : []), []);
console.log(usersWithFriend);


const users = [
    { id: 1, name: 'John', friends: ['Alice', 'Bob', 'Alina', 'Sofa', 'Vova'] },
    { id: 2, name: 'Jane', friends: ['Charlie', 'Alice'] },
    { id: 3, name: 'Mike', friends: ['Bob', 'David', 'Oleg', 'Romko'] }
];
const friendName = 'Alice';
let use = users.reduce((nam, poblo) => 
poblo.friends.includes(friendName) ? nam.concat(poblo.name) : nam, []);
console.log(use);


const users = [
    { id: 1, name: 'John', skills: ['JavaScript', 'HTML', 'CSS'] },
    { id: 2, name: 'Jane', skills: ['Java', 'Python', 'HTML'] },
    { id: 3, name: 'Mike', skills: ['C#', 'JavaScript', 'SQL'] }
];
let allSkills = users.reduce((acc, user) => acc.concat(user.skills), []);
let uniqueSkills = [...new Set(allSkills)].sort();
console.log(uniqueSkills);

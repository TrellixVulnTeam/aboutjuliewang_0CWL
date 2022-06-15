const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'  
}

module.exports = {
    ROLE: ROLE,
    users: [
        {id: 1, name: 'julie', role: ROLE.ADMIN},
        {id: 2, name: 'kyle', role: ROLE.BASIC},
        {id: 3, name: 'evan', role: ROLE.BASIC}
    ],
    projects: [
        {id: 1, name: 'julies project', userId: 1},
        {id: 2, name: 'kyles project',  userId: 2},
        {id: 3, name: 'evans project',  userId: 3}
    ]
}
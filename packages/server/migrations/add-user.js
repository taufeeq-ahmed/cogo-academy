/* eslint-disable max-len */
/* eslint-disable no-await-in-loop */

require('../helpers/load-env');
const bcrypt = require('bcrypt');
const { prisma } = require('../helpers/db-client');

async function main() {
    const password = "saitarun1"
    const hashedPassword = await bcrypt.hash(password, 10)
    const admin_data = { user_name: "saitarun", email: "saitarunsst@gmail.com", password: hashedPassword, github_username: "saitaruns" }
    const user_data = { user_name: "shivom", email: "shivommahar@gmail.com", password: hashedPassword, github_username: "shivom" }


    const adminUser = await prisma.User.create({
        data: {
            user_name: admin_data.user_name,
            email: admin_data.email,
            password: hashedPassword,
            github_username: admin_data.github_username,
            isAdmin: true
        }
    })

    console.log("Admin added successfully")
    console.log(adminUser)

    const newUser = await prisma.User.create({
        data: {
            user_name: user_data.user_name,
            email: user_data.email,
            password: hashedPassword,
            github_username: user_data.github_username
        }
    })

    console.log("User added successfully")
    console.log(newUser)
}

main();

const bcrypt = require('bcrypt');
const { prisma } = require('../../helpers/db-client');

const acceptInvite = async ({ data = {} }) => {
	const { userName, email, password, gitUserName, token} = data;
    const [user]=await prisma.findUnique({
        where:{
            email:email,
        }
    })
	if (user) {
		return ('User with entered email already exists');
	}

	const hashedPassword = await bcrypt.hash(password, 10);
    const createuser=await prisma.user.create({
        data:{
            user_name:userName,
            email:email,
            password:hashedPassword,
            github_username:gitUserName,
        },
    })
    const deleteReq=await prisma.UserInvites.delete({
        where:{
            token:token,
        }
    })
    return createuser;
};

module.exports=acceptInvite;


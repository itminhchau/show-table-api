import db from '../models'
const getUserService = () => {
    return new Promise(async (resolve, reject) => {
        try {

            let dataUser = await db.User.findAll()
            resolve(dataUser)
        } catch (error) {
            reject(error)
        }
    })
}

const getUserOfGroupService = (groupId) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!groupId) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter group id"
                })
                return;
            }
            let dataUser = await db.User.findAll({
                where: { group_id: groupId },
                raw: true,
                nest: true
            })
            resolve(dataUser)
        } catch (error) {
            reject(error)
        }
    })
}


const updateUserService = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.id) {
                resolve({
                    errCode: 1,
                    errMessage: "Missing parameter group id"
                })
                return;
            }
            let user = await db.User.findOne({
                where: { id: data.id },

            })
            if (user) {
                await db.User.update({
                    first_name: data.first_name,
                    last_name: data.last_name,
                    birthday: data.birthday,
                    gender: data.gender
                },
                    {
                        where: { id: data.id }
                    })
            }

            resolve({
                errCode: 0,
                message: " update success"
            })
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    getUserService,
    getUserOfGroupService,
    updateUserService
}
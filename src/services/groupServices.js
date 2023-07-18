import db from '../models'
const getGroupService = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let dataGroup = await db.Group.findAll()
            resolve(dataGroup)
        } catch (error) {
            reject(error)
        }
    })
}
export default {
    getGroupService
}
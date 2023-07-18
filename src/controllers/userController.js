import userServices from "../services/userServices"

const getUser = async (req, res) => {
    try {

        let dataUser = await userServices.getUserService()
        return res.status(200).json(dataUser)
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "error from server"
        })
    }
}
const getUseOfGroup = async (req, res) => {
    try {
        let groupId = req.query.groupId
        let dataUser = await userServices.getUserOfGroupService(groupId)
        return res.status(200).json(dataUser)
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "error from server"
        })
    }
}

const updateUser = async (req, res) => {
    try {
        let dataBody = req.body
        let data = await userServices.updateUserService(dataBody)

        return res.status(200).json(data)
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            errMessage: "error from server"
        })
    }
}
export default {
    getUser,
    getUseOfGroup,
    updateUser
}
import groupServices from "../services/groupServices"

const getGroup = async (req, res) => {


    try {
        let dataGroup = await groupServices.getGroupService()

        return res.status(200).json(dataGroup)
    } catch (error) {
        return res.status(500).json({
            errCode: -1,
            messCode: "error sever"
        })
    }
}

export default {
    getGroup
}
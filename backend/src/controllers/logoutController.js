
let logout = async (req, res) => {
    res.clearCookie("refreshToken")
    refreshToken = refreshToken.filter(token => token !== req.cookies.refreshToken)
    res.status(200).json("Logged out")
}

module.exports = {logout};
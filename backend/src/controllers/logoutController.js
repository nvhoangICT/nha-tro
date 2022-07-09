
let logout = async (req, res) => {
    res.clearCookie("refreshToken")
    refreshToken = refreshToken.filter(token => token !== req.cookies.refreshToken)
    res.redirect('/');
}

module.exports = {logout};
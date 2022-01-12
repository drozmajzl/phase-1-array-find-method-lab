function superbowlWin(recordsArray) {
    const superbowlWinDeclaration = recordsArray.find(record => record.result === "W")
    if(superbowlWinDeclaration) {
    return superbowlWinDeclaration.year
    } else {
        return undefined
    }
}
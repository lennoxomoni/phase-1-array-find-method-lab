// code your solution here
const superbowlWin = (array) => {
    let resultobj = array.find(obj => obj.result === `W`)
    if (resultobj) {
        return resultobj.year
    }else return undefined
}

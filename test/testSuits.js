import testFileUtils from "./utils/testFileUtils.js"
import testTransformUtil from "./utils/transformUtils.js"
import util from "./util.js"

function main() {
    testFileUtils.runAll()
    util.espacioDos()
    testTransformUtil.runAll()
    util.espacioDos()
}


main()

